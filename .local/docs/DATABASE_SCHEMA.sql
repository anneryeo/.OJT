-- Mapua Student Portfolio Registry production database schema
-- Target database: PostgreSQL-compatible SQL

CREATE TYPE profile_status AS ENUM ('pending', 'published', 'removed');
CREATE TYPE availability_status AS ENUM ('open', 'selective', 'unavailable');
CREATE TYPE year_level_status AS ENUM ('1st Year', '2nd Year', '3rd Year', '4th Year', 'Fresh Grad');

CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  initials TEXT NOT NULL,
  email TEXT NOT NULL,
  program TEXT NOT NULL,
  course_type TEXT NOT NULL CHECK (
    course_type IN (
      'Computer Science',
      'Information Technology',
      'Information Systems',
      'Data Science',
      'Tech Courses',
      'Media and Design'
    )
  ),
  year_level year_level_status NOT NULL,
  grad_years_since INTEGER NOT NULL DEFAULT 0 CHECK (grad_years_since >= 0),
  role_title TEXT NOT NULL,
  location TEXT,
  availability availability_status NOT NULL DEFAULT 'open',
  availability_label TEXT NOT NULL,
  bio TEXT NOT NULL,
  portfolio_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  status profile_status NOT NULL DEFAULT 'pending',
  source TEXT NOT NULL DEFAULT 'visitor',
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  approved_at TIMESTAMPTZ,
  removed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE student_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  skill_name TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  UNIQUE (student_id, skill_name)
);

CREATE TABLE student_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  project_code TEXT NOT NULL,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  result TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE student_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  metric_value TEXT NOT NULL,
  metric_label TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE admin_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user_id UUID REFERENCES admin_users(id) ON DELETE SET NULL,
  student_id UUID REFERENCES students(id) ON DELETE SET NULL,
  action TEXT NOT NULL CHECK (action IN ('approve', 'remove', 'restore', 'edit')),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_students_status ON students(status);
CREATE INDEX idx_students_course_type ON students(course_type);
CREATE INDEX idx_students_year_level ON students(year_level);
CREATE INDEX idx_students_availability ON students(availability);
CREATE INDEX idx_student_skills_name ON student_skills(skill_name);
