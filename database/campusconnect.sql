CREATE DATABASE IF NOT EXISTS campusconnect;

USE campusconnect;


/* =================================
   USERS
================================= */

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(50) NOT NULL UNIQUE,

    password_hash VARCHAR(255) NOT NULL,

    role ENUM('admin', 'student', 'faculty')
        DEFAULT 'student',

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);


/* =================================
   STUDENTS
================================= */

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NULL,

    roll_no VARCHAR(30) NOT NULL UNIQUE,

    name VARCHAR(100) NOT NULL,

    branch VARCHAR(100),

    year INT,

    phone VARCHAR(15),

    email VARCHAR(100),

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE SET NULL
);


/* =================================
   COURSES
================================= */

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,

    course_code VARCHAR(30) UNIQUE,

    course_name VARCHAR(100) NOT NULL,

    faculty VARCHAR(100),

    room VARCHAR(50),

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);


/* =================================
   TIMETABLE
================================= */

CREATE TABLE timetable (
    id INT AUTO_INCREMENT PRIMARY KEY,

    course_id INT NOT NULL,

    day ENUM(
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ) NOT NULL,

    start_time TIME NOT NULL,

    end_time TIME NOT NULL,

    room VARCHAR(50),

    FOREIGN KEY (course_id)
        REFERENCES courses(id)
        ON DELETE CASCADE
);


/* =================================
   ASSIGNMENTS
================================= */

CREATE TABLE assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,

    course_id INT NOT NULL,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    due_date DATE,

    status ENUM(
        'Pending',
        'In Progress',
        'Completed'
    ) DEFAULT 'Pending',

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (course_id)
        REFERENCES courses(id)
        ON DELETE CASCADE
);


/* =================================
   ATTENDANCE
================================= */

CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,

    student_id INT NOT NULL,

    course_id INT NOT NULL,

    attendance_date DATE NOT NULL,

    status ENUM(
        'Present',
        'Absent'
    ) NOT NULL,

    FOREIGN KEY (student_id)
        REFERENCES students(id)
        ON DELETE CASCADE,

    FOREIGN KEY (course_id)
        REFERENCES courses(id)
        ON DELETE CASCADE
);


/* =================================
   STUDY SESSIONS
================================= */

CREATE TABLE study_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,

    student_id INT NOT NULL,

    course_id INT NULL,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    session_date DATE NOT NULL,

    start_time TIME,

    duration_minutes INT,

    priority ENUM(
        'Low',
        'Medium',
        'High'
    ) DEFAULT 'Medium',

    completed BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (student_id)
        REFERENCES students(id)
        ON DELETE CASCADE,

    FOREIGN KEY (course_id)
        REFERENCES courses(id)
        ON DELETE SET NULL
);


/* =================================
   EVENTS
================================= */

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    event_date DATE NOT NULL,

    event_time TIME,

    location VARCHAR(150),

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);


/* =================================
   NOTIFICATIONS
================================= */

CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    title VARCHAR(150) NOT NULL,

    message TEXT,

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);