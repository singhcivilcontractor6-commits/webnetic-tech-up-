# Complete Database Schema

## Multi-Tenant Architecture

The database uses a **tenant-based schema separation** approach where each school (tenant) has isolated data.

## Core Tables Overview

### 1. TENANTS (Organizations/Schools)
- tenant_id (Primary Key)
- school_name, slug, email, phone, website
- logo_url, branding_color
- subscription_plan, subscription_status
- max_students, max_teachers, max_staff
- custom_domain, white_label
- is_active, is_suspended

### 2. USERS & AUTHENTICATION
- user_id (Primary Key)
- email, phone, password_hash
- role (super_admin, school_admin, principal, teacher, student, parent, etc)
- status, two_factor_enabled
- last_login, last_login_ip
- email_verified, phone_verified

### 3. STUDENTS
- student_id (Primary Key)
- admission_number, roll_number
- date_of_birth, gender, blood_group
- aadhaar_number
- current_class, current_section
- student_photo_url
- status (active, inactive, graduated, transferred)

### 4. TEACHERS
- teacher_id (Primary Key)
- employee_id, qualification, specialization
- experience_years, joining_date
- employment_type (full_time, part_time, contract)
- department

### 5. ATTENDANCE SYSTEM
- **student_attendance**: attendance_date, status, remarks
- **teacher_attendance**: check_in_time, check_out_time
- **staff_attendance**: attendance tracking

### 6. FEE MANAGEMENT
- **fee_types**: Admission, Tuition, Examination, Transport, Hostel, Library
- **fee_structures**: Class-wise fee configuration
- **student_fees**: Per-student fees with discounts/scholarships
- **fee_payments**: Payment tracking (UPI, Razorpay, PhonePe, etc)

### 7. EXAMINATION SYSTEM
- **exams**: Exam definitions (terminal, unit_test, mid_term, final)
- **exam_schedules**: Date, time, room, subject mapping
- **student_marks**: Theory, practical, total marks with grades
- **grading_scales**: GPA and grade definitions

### 8. HOMEWORK & ASSIGNMENTS
- **homework**: Teacher assignments with attachments
- **homework_submissions**: Student submissions with feedback

### 9. TIMETABLE
- **timetables**: Class timetable master
- **timetable_slots**: Period-wise subject-teacher mapping

### 10. LIBRARY MANAGEMENT
- **books**: Book catalog with ISBN, barcode
- **book_issues**: Issue/return tracking with fine calculation

### 11. TRANSPORT MANAGEMENT
- **vehicles**: Vehicle fleet management
- **routes**: Route definitions with stops
- **student_transport_allocation**: Student-route mapping

### 12. HOSTEL MANAGEMENT
- **hostels**: Hostel definitions
- **hostel_rooms**: Room capacity and allocation
- **student_hostel_allocation**: Bed allocation

### 13. HR & PAYROLL
- **employees**: Staff records
- **leave_types**: Leave policies
- **employee_leaves**: Leave requests and approvals
- **salary_structures**: Component-based salary setup
- **payrolls**: Monthly salary generation

### 14. COMMUNICATIONS
- **notifications**: In-app notifications
- **sms_logs**: SMS delivery tracking
- **email_logs**: Email delivery tracking

### 15. AUDIT & LOGGING
- **activity_logs**: User action tracking
- **error_logs**: System error tracking

## Multi-Tenancy Implementation

Every table includes:
- `tenant_id` column for complete data isolation
- Foreign key reference to `tenants` table
- `ON DELETE CASCADE` for referential integrity
- Indexes on `tenant_id` for query optimization

This ensures:
✅ Complete data isolation between schools
✅ Secure multi-tenant operations
✅ Independent data management per school
✅ Easy tenant scaling

## Database Technology

- **Primary DB**: MySQL 8.0
- **Cache Layer**: Redis for sessions and caching
- **Connection Pooling**: 20-100 connections per environment
- **Backup**: Daily automated backups (30-day retention)

For complete SQL schema definitions, see `SCHEMA.md`
