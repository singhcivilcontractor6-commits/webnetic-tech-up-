# WEBNESTIC SCHOOL ERP - Production Ready SaaS Platform

![Webnestic](https://img.shields.io/badge/Webnestic-School%20ERP-blue)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen)

## 📋 Overview

Webnestic School ERP is a comprehensive, cloud-based Multi-Tenant School Management System designed for educational institutions in India. It provides complete end-to-end solutions for student management, fee collection, attendance tracking, examination management, and communication.

### Key Features

✅ **Multi-Tenant SaaS Architecture** - Support unlimited schools on single platform
✅ **10+ User Roles** - Super Admin, School Admin, Principal, Teacher, Student, Parent, and more
✅ **Complete Student Lifecycle** - Admission to promotion management
✅ **Advanced Fee Management** - Multiple payment gateways integration
✅ **Attendance System** - RFID, Biometric, QR code ready
✅ **Examination Module** - Result cards, GPA calculation, analysis reports
✅ **Mobile Apps** - Flutter apps for Teachers, Parents, Students
✅ **Communication Hub** - SMS, WhatsApp, Email integration
✅ **Advanced Reporting** - PDF, Excel, CSV exports
✅ **Enterprise Security** - JWT, 2FA, Role-based access, AES encryption

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- Next.js 14 + React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit
- Axios

**Backend:**
- Node.js + Express.js
- TypeScript
- MySQL 8.0
- Redis (Caching)
- JWT Authentication

**Mobile:**
- Flutter
- Dart
- Provider State Management

**DevOps:**
- Docker & Docker Compose
- Nginx
- AWS S3
- CI/CD Pipeline
- SSL/TLS

### Database

- **MySQL 8.0** - Relational database
- **Redis** - Session & cache management
- **Tenant Isolation** - Schema-based multi-tenancy

## 📁 Project Structure

```
webnestic-school-erp/
├── backend/                 # Node.js Backend
├── frontend/                # Next.js Admin Panel
├── mobile-apps/             # Flutter Apps
├── database/                # Database Schema & Migrations
├── devops/                  # Docker & Deployment
├── documentation/           # API Docs & Guides
└── docker-compose.yml       # Multi-service orchestration
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+
- Flutter SDK
- MySQL 8.0

### Installation

```bash
# Clone repository
git clone https://github.com/singhcivilcontractor6-commits/webnetic-tech-up-.git
cd webnetic-tech-up-

# Start services with Docker
docker-compose up -d

# Initialize database
docker exec webnestic-api npm run migrate

# Access platform
# Admin: http://localhost:3000
# API: http://localhost:5000
```

## 📚 Modules

### 1. Student Management
- Admission workflow
- Student profiles
- Document management
- ID card & certificate generation
- Bulk promotion

### 2. Attendance System
- Daily attendance marking
- RFID/Biometric/QR integration
- Automated SMS/WhatsApp alerts
- Reports and analytics

### 3. Fee Management
- Multiple fee types (Admission, Tuition, Transport, Hostel)
- Flexible installment plans
- Online payment gateway integration (Razorpay, PhonePe, UPI)
- Receipt generation
- Scholarship & discount management

### 4. Examination Module
- Exam scheduling
- Marks entry
- GPA calculation
- Report card generation
- Performance analytics

### 5. Homework & Assignment
- Upload assignments
- Student submission tracking
- Grading system

### 6. Library Management
- Book cataloging
- Issue/Return tracking
- Fine calculation
- Barcode support

### 7. Transport Management
- Route management
- Driver tracking
- GPS integration ready
- Transport fee management

### 8. Hostel Management
- Room allocation
- Attendance tracking
- Hostel fees
- Complaints management

### 9. HR & Payroll
- Employee records
- Leave management
- Attendance tracking
- Salary generation
- Payslip generation

### 10. Communication Module
- Bulk SMS
- WhatsApp API integration
- Email notifications
- Automated alerts

## 🔐 Security Features

- JWT token-based authentication
- Role-based access control (RBAC)
- Password encryption (bcrypt)
- Two-factor authentication
- Audit logging
- Data encryption at rest
- SQL injection prevention
- CSRF protection
- Rate limiting
- Daily automated backups

## 📱 Mobile Apps

### Parent App
- View child's attendance
- Access homework & assignments
- Check exam results
- View fee dues
- Make online payments
- Receive notifications

### Student App
- Personal dashboard
- Attendance tracking
- Homework submission
- Exam results
- Timetable
- Notifications

### Teacher App
- Mark attendance
- Upload homework
- Enter marks
- View timetable
- Student management
- Notifications

## 📊 Super Admin Dashboard

- School management (Add, Suspend, Activate)
- Subscription management
- Billing & revenue reports
- User monitoring
- Server health monitoring
- Support ticket management
- Activity logs
- Backup management
- Analytics dashboard

## 💰 Pricing Plans

| Plan | Monthly | Yearly | Features |
|------|---------|--------|----------|
| **Starter** | ₹1,500 | ₹5,000 | Upto 500 students, basic modules |
| **Standard** | ₹2,500 | ₹10,000 | Upto 2000 students, all modules |
| **Premium** | ₹4,000 | ₹20,000 | Unlimited students, white-label, priority support |

## 📖 Documentation

- [API Documentation](./documentation/API.md)
- [Database Schema](./database/SCHEMA.md)
- [Deployment Guide](./devops/DEPLOYMENT.md)
- [UI/UX Design System](./frontend/DESIGN_SYSTEM.md)
- [Architecture Overview](./documentation/ARCHITECTURE.md)
- [Security Policy](./documentation/SECURITY.md)

## 🔄 Deployment

### Development
```bash
docker-compose -f docker-compose.dev.yml up
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

See [Deployment Guide](./devops/DEPLOYMENT.md) for detailed instructions.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

Commercial License - See LICENSE.md

## 📞 Support

- Email: support@webnestic.com
- Documentation: https://docs.webnestic.com
- Issues: https://github.com/singhcivilcontractor6-commits/webnetic-tech-up-/issues

---

**Built with ❤️ for Educational Excellence**

Version 1.0.0 | © 2025 Webnestic. All rights reserved.
