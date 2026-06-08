import mysql from 'mysql2/promise';
import { config } from './index';

export const createPool = () => {
  return mysql.createPool({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    connectionLimit: config.database.connectionLimit,
    waitForConnections: config.database.waitForConnections,
    queueLimit: config.database.queueLimit,
    enableKeepAlive: config.database.enableKeepAlive,
    keepAliveInitialDelayMs: config.database.keepAliveInitialDelayMs,
  });
};

export const getConnection = async (pool: mysql.Pool) => {
  return await pool.getConnection();
};

export const executeQuery = async (pool: mysql.Pool, query: string, values?: any[]) => {
  const connection = await getConnection(pool);
  try {
    const [results] = await connection.execute(query, values);
    return results;
  } finally {
    connection.release();
  }
};

export const executeTransaction = async (pool: mysql.Pool, callback: (connection: mysql.PoolConnection) => Promise<any>) => {
  const connection = await getConnection(pool);
  try {
    await connection.beginTransaction();
    const result = await callback(connection);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

export default createPool;
