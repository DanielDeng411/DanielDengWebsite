// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Dean’s Honor List Spring 2024',
    description: 'Awarded for academic excellence',
    date: '2024',
    location: 'Ottawa, Canada',
  },
  {
    name: 'Dean’s Honor List Fall 2024',
    description: 'Awarded for academic excellence',
    date: '2024',
    location: 'Ottawa, Canada',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Book Cataloging System',
    description:
      'A web application for user registration, login, and personal book library management using PHP, JavaScript, and MySQL.',
    link: {
      href: 'https://github.com/DanielDeng411/Book-Catalogue-System.git',
      label: 'View on GitHub',
    },
    tags: ['Web App', 'PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'XAMPP'],
  },
  {
    name: 'Recipe Management System',
    description:
      'Java-based desktop app for managing bakery recipes with file I/O and auto-generated shopping lists.',
    link: {
      href: '#',
      label: 'Project Details',
    },
    tags: ['Java', 'OOP', 'Desktop App', 'File I/O'],
  },
  {
    name: 'Authors CRUD Web App (Assignment 2)',
    description:
      'A Java Servlet-based multi-tier web application that manages authors using JDBC, DAO, and Singleton design patterns.',
    link: {
      href: 'https://github.com/DanielDeng411/DBMS-Using-Servlet',
      label: 'View on GitHub',
    },
    tags: ['Java', 'Servlets', 'JDBC', 'DAO', 'Design Patterns'],
  },
  {
    name: 'Public Transit Fleet Management System (PTFMS)',
    description:
      'A full-stack group project to manage public transit fleet data, including vehicle tracking, maintenance, and assignments.',
    link: {
      href: 'https://github.com/Nanastrike/java-project-cst8288.git',
      label: 'View on GitHub',
    },
    tags: ['Team Project', 'Java', 'JSP', 'JDBC', 'MySQL', 'Fleet Management'],
  },
  {
    name: 'Mobile Profile App with Flutter',
    description:
      'A mobile profile page built with Flutter that uses encrypted shared preferences to store login credentials and supports phone, SMS, and email actions.',
    link: {
      href: 'https://github.com/DanielDeng411/CST2335-Group-Project.git',
      label: 'View on GitHub',
    },
    tags: ['Flutter', 'Mobile App', 'Encrypted Storage', 'Shared Preferences', 'Dart'],
  },
]


// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Flutter Mobile Development Showcase',
    description:
      'Demonstrated a mobile profile app built in Flutter with encrypted preferences and built-in phone, SMS, and email functionality.',
    date: '2025-04-08',
    location: 'Algonquin College',
    link: 'https://github.com/DanielDeng411/CST2335-Group-Project.git',
  },
  {
    name: 'Test Assistant Internship',
    description:
      'Tested auditing software workflows, resolved SQL database issues, and improved software testing efficiency by 20%.',
    date: '2023-10-01',
    location: 'Changsha, China',
  },
  {
    name: 'Auditing Assistant Internship',
    description:
      'Assisted in preparing audit papers and verifying financial data, gaining collaborative and analytical experience in a real-world audit environment.',
    date: '2023-03-01',
    location: 'Changsha, China',
  },
  {
    name: 'LeetCode Challenge Practice',
    description:
      'Solving daily coding challenges on LeetCode to improve problem-solving skills in data structures and algorithms using Java and Python.',
    date: 'Ongoing',
    location: 'Online',
    link: 'https://leetcode.com/u/ZhennanDeng/',
  },
]

