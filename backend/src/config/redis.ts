import { createClient } from 'redis';
import { config } from './index';

let redisClient: any;

export const createRedisClient = async () => {
  redisClient = createClient({
    socket: {
      host: config.redis.host,
      port: config.redis.port,
    },
    password: config.redis.password,
  });

  redisClient.on('error', (err: any) => console.log('Redis Client Error', err));
  
  await redisClient.connect();
  return redisClient;
};

export const getRedisClient = () => {
  if (!redisClient) {
    throw new Error('Redis client not initialized');
  }
  return redisClient;
};

export const setCache = async (key: string, value: any, expireSeconds: number = 3600) => {
  const client = getRedisClient();
  await client.setEx(key, expireSeconds, JSON.stringify(value));
};

export const getCache = async (key: string) => {
  const client = getRedisClient();
  const value = await client.get(key);
  return value ? JSON.parse(value) : null;
};

export const deleteCache = async (key: string) => {
  const client = getRedisClient();
  await client.del(key);
};

export const clearAllCache = async () => {
  const client = getRedisClient();
  await client.flushDb();
};

export const setSession = async (sessionId: string, data: any, expireSeconds: number = 86400) => {
  await setCache(`session:${sessionId}`, data, expireSeconds);
};

export const getSession = async (sessionId: string) => {
  return await getCache(`session:${sessionId}`);
};

export const deleteSession = async (sessionId: string) => {
  await deleteCache(`session:${sessionId}`);
};

export default createRedisClient;
