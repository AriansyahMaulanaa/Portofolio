import type { Translation } from './types'

export const en: Translation = {
  hud: {
    sector: 'SECTOR 7G // DEEP SPACE',
    signal: 'SIGNAL: STRONG',
    ind: 'IND',
    eng: 'ENG',
  },
  boot: {
    terminal: 'MAIN CONSOLE — TERMINAL',
    nav: 'SHIP SYSTEMS',
    lines: [
      { text: 'HAIL MARY ONBOARD SYSTEM v2.0', color: 'text-hazard-amber' },
      { text: 'INITIALIZING MAIN CONSOLE...' },
      { text: 'CHECKING LIFE SUPPORT: NOMINAL', color: 'text-astrophage' },
      { text: 'CREW MANIFEST: 1/1 — COMMANDER ARIANSYAH' },
      { text: 'PROPULSION: ASTROPHAGE DRIVE ONLINE', color: 'text-astrophage' },
      { text: 'NAVIGATION: LOCKED ON TARGET' },
      { text: 'MISSION CLOCK: SYNCHRONIZED' },
      { text: '—————————————————————————————', color: 'text-static-gray' },
      { text: 'WELCOME BACK, COMMANDER ARIANSYAH.', color: 'text-signal-white' },
    ],
    skip: 'CLICK OR PRESS ANY KEY TO SKIP',
  },
  nav: {
    access: 'ACCESS',
    sections: [
      { id: 'log-00', label: 'MAIN CONSOLE' },
      { id: 'log-01', label: 'PERSONNEL FILE' },
      { id: 'log-02', label: 'MISSION ARCHIVE' },
      { id: 'log-03', label: 'SHIP SYSTEMS' },
      { id: 'log-04', label: 'TRAINING RECORDS' },
      { id: 'log-05', label: 'TRANSMISSION' },
    ],
  },
  hero: {
    eyebrow: 'MAIN CONSOLE // ONLINE',
    name1: 'Ariansyah',
    name2: 'Maulana',
    commander: 'COMMANDER // COMPUTER SCIENCE',
    tagline:
      'Building systems from the ground up — full-stack web developer with a bias toward clean architecture and honest code. Currently navigating the final year of Computer Science studies while shipping real products.',
    ctaMission: 'ACCESS MISSION ARCHIVE',
    ctaChannel: 'OPEN CHANNEL',
    scroll: 'SCROLL',
  },
  personnel: {
    eyebrow: '01 // PERSONNEL FILE',
    title: 'Field Notes',
    bio1:
      'Active-duty student, currently in my final year of Computer Science. I build things for the web — from backend APIs to the interfaces people actually touch. My approach: understand the problem first, then write the simplest code that solves it honestly.',
    bio2:
      'When not coding, I\'m usually reading about system design, tinkering with side projects, or convincing teammates that clear naming conventions are worth arguing about.',
    status: 'STATUS:',
    statusValue: 'ACTIVE STUDENT',
    availability: 'AVAILABILITY:',
    availabilityValue: 'OPEN TO WORK',
    location: 'LOCATION:',
    locationValue: 'INDONESIA',
    equipment: 'EQUIPMENT LOADOUT',
  },
  mission: {
    eyebrow: '02 // MISSION ARCHIVE',
    title: 'Projects Completed',
    classification: 'CLASSIFICATION:',
    completed: 'COMPLETED',
    operational: 'OPERATIONAL',
    missions: [
      {
        code: 'MSN-01',
        title: 'E-Commerce Platform',
        classification: 'FULLSTACK WEB APPLICATION',
        description:
          'A full-featured e-commerce platform built with Laravel and React. Covers product management, cart flow, order tracking, and admin dashboard with role-based access.',
        tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
        status: 'COMPLETED',
      },
      {
        code: 'MSN-02',
        title: 'Task Management System',
        classification: 'INTERNAL OPS TOOLING',
        description:
          'Team task management app with drag-and-drop Kanban board, real-time updates, priority labels, and deadline tracking. Built for small dev teams.',
        tech: ['React', 'TypeScript', 'PostgreSQL', 'REST API'],
        status: 'OPERATIONAL',
      },
      {
        code: 'MSN-03',
        title: 'University Portal',
        classification: 'ACADEMIC INFORMATION SYSTEM',
        description:
          'Student information portal handling course registration, grade reporting, and academic calendar. Backend in Java Spring Boot, frontend in vanilla JS.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
        status: 'COMPLETED',
      },
      {
        code: 'MSN-04',
        title: 'Inventory Management',
        classification: 'INTERNAL OPS TOOLING',
        description:
          'Warehouse inventory system with barcode scanning support, stock alerts, supplier management, and CSV export for audit purposes.',
        tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
        status: 'COMPLETED',
      },
    ],
    viewDemo: 'VIEW DEMO',
    source: 'SOURCE',
  },
  shipSystems: {
    eyebrow: '03 // SHIP SYSTEMS DIAGNOSTIC',
    title: 'Skills & Capabilities',
    systemHealth: 'SYSTEM HEALTH',
    systems: [
      {
        name: 'BACKEND SYSTEMS',
        icon: '</>',
        health: 88,
        items: [
          'PHP & Laravel',
          'Java & Spring Boot',
          'REST API Design',
          'MySQL & PostgreSQL',
          'Authentication & RBAC',
          'MVC Architecture',
        ],
      },
      {
        name: 'FRONTEND INTERFACE',
        icon: '[]',
        health: 83,
        items: [
          'React & TypeScript',
          'Tailwind CSS',
          'HTML & CSS',
          'JavaScript (ES2022+)',
          'Responsive Design',
          'Component Architecture',
        ],
      },
      {
        name: 'TOOLS & INSTRUMENTS',
        icon: '>_',
        health: 91,
        items: [
          'Git & GitHub',
          'Figma',
          'Postman',
          'VS Code',
          'Arch Linux',
          'Docker (basic)',
        ],
      },
    ],
  },
  training: {
    eyebrow: '04 // TRAINING RECORDS',
    title: 'Education',
    institution: 'INSTITUTION',
    major: 'S1 Informatika — Computer Science',
    inProgress: 'IN PROGRESS',
    period: 'PERIOD',
    periodValue: '2023 — Present',
    ipk: 'IPK',
    ipkValue: '3.72 / 4.00',
    semester: 'SEMESTER',
    semesterValue: '6th',
    status: 'STATUS',
    statusValue: 'ACTIVE',
    fieldNotes: 'FIELD NOTES',
    notes:
      'Focused coursework in software engineering, database systems, algorithms, and web development. Complemented academic study with hands-on project experience and open-source contribution throughout the program.',
  },
  transmission: {
    eyebrow: '05 // OPEN CHANNEL',
    title: 'Let\'s Build Something Together',
    description:
      'Whether you have a project in mind, want to collaborate, or just want to say hello — I\'m reachable. Response time: usually within 24 hours.',
    transmittingOn: 'TRANSMITTING ON: EMAIL_FREQ',
    copyright: '\u00a9 {year} ARIANSYAH MAULANA. ALL RIGHTS RESERVED.',
    systemBuild: 'SYSTEM BUILD v2.0',
  },
}
