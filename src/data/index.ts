import { Experience, Project } from '../types';

export const EXPERIENCE_DATA: Experience[] = [
  {
    period: 'FEB 2025 — PRESENT',
    role: 'Full Stack Developer',
    company: 'HT Media (Shine.com)',
    companyUrl: 'https://recruiter.shine.com/',
    summary: 'Helping scale a job platform with 100k+ daily users by moving to microservices.',
    points: [
      'Breaking down the monolith so the site stays up even when one part fails.',
      'Launched a Semantic Search engine using Vector DBs—finding candidates is now way smarter.',
      'Speeded up WhatsApp and Email alerts by 40% using AWS SQS.',
      'Built an AI screener that auto-ranks profiles so recruiters see the best ones first.',
      'Refactored heavy background jobs to cut server load by a solid 35%.'
    ],
    technologies: ['Python', 'Django', 'Milvus', 'AWS SQS', 'LLMs', 'Microservices'],
  },
  {
    period: 'JUN 2022 — OCT 2024',
    role: 'Software Engineer',
    company: 'Samsung R&D Institute',
    companyUrl: 'https://research.samsung.com/sri-d',
    summary: 'Spent two years deep in C++ and Bluetooth code to make device connections "just work".',
    points: [
      'Refactored Bluetooth apps to double CPU performance and save 60% memory.',
      'Built a "Quick Settings" menu that made pairing 70% faster for users.',
      'Created a way for TVs to transfer data securely using Ultrasound sound waves.',
      'Automated TV setup with a sound "handshake"—no more typing in manual PINs.',
      'Cleaned up NFC and Bluetooth code to keep the user experience smooth and bug-free.'
    ],
    technologies: ['C++', 'Bluetooth Stack', 'Ultrasound Tech', 'NFC', 'Memory Management'],
  },
  {
    period: 'JUN 2021 — NOV 2021',
    role: 'Software Engineer Intern',
    company: 'Teliolabs',
    companyUrl: 'https://teliolabs.com/',
    summary: 'Learned the ropes by building data dashboards from the ground up.',
    points: [
      'Built "Project Rikarica" to turn SQL data into interactive React charts.',
      'Optimized dashboard rendering so complex data views stay snappy.'
    ],
    technologies: ['Python', 'React.js', 'SQL Server', 'Data Visualization'],
  },
];

export const SOFTWARE_PROJECTS: Project[] = [
  {
    title: 'MyMedic',
    description: 'A smart medical platform that reads your prescriptions using OCR and uses AI to explain dosages and side effects in plain English.',
    technologies: ['Next.js', 'Django', 'OpenCV', 'Tesseract', 'LLMs'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Aether Dashboard',
    description: 'A high-performance monitoring tool for distributed systems with real-time WebSocket updates.',
    technologies: ['React', 'D3.js', 'Node.js', 'WebSockets'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400&auto=format&fit=crop',
  },
];

export const IOT_PROJECTS: Project[] = [
  {
    title: 'Ultrasound Data Bridge',
    description: 'A secure alternative to Bluetooth using high-frequency sound waves for device-to-device communication.',
    technologies: ['C++', 'Digital Signal Processing', 'Android'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'SmartGrid Monitor',
    description: 'Industrial IoT platform for tracking energy across facilities via ESP32 clusters and Grafana.',
    technologies: ['MQTT', 'InfluxDB', 'Grafana', 'C++'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400&auto=format&fit=crop',
  },
];

export const PHOTO_GALLERY_BATCH_1 = [
  [
    '/media/2.jpeg',
    '/media/11.jpeg',
    '/media/4.jpeg',
  ],
  [
    '/media/5.jpeg',
    '/media/3.jpeg',
    '/media/12.jpeg',
  ],
  [
    '/media/17.jpeg',
    '/media/18.jpeg',
    '/media/19.jpeg',
  ]
];

export const PHOTO_GALLERY_BATCH_2 = [
  [
    '/media/1.jpeg',
    '/media/6.jpeg',
    '/media/7.jpeg',
  ],
  [
    '/media/8.jpeg',
    '/media/9.jpeg',
    '/media/10.jpeg',
  ],
  [
    '/media/13.jpeg',
    '/media/15.jpeg',
    '/media/16.jpeg',
  ]
];

