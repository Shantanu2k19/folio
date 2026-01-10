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
    description:
      'A smart medical platform that reads prescriptions using OCR and uses AI to explain dosages, side effects, and instructions in simple, plain English so anyone can understand them easily.',
    technologies: ['Next.js', 'Django', 'OpenCV', 'Tesseract OCR', 'LLMs'],
    link: 'https://mymedic.vercel.app/',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'MeTube',
    description:
      'A web app that keeps track of your YouTube playlists and lets you know when videos, songs, or mixes quietly disappear, so you never lose content without realizing it.',
    technologies: ['Django', 'Python', 'YouTube Data API', 'JavaScript'],
    link: 'http://shantanu2k22.pythonanywhere.com/ ',
    imageUrl: '/projects/metube.jpeg',
  },
  {
    title: 'Canteen 2.0',
    description:
      'A modern canteen management system built for a college canteen that lets students order food from anywhere while helping the canteen manage inventory, orders, and demand, with AI-based food recommendations from past orders.',
    technologies: ['Django', 'Python', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://canteen.pythonanywhere.com/ ',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400&auto=format&fit=crop',
  },
];

export const IOT_PROJECTS: Project[] = [
  {
    title: 'Raspberry Pi Home Automation (In Progress)',
    description:
      'A Jarvis-like home automation system powered by Raspberry Pi, where I built a chatbot to handle everyday commands like controlling lights and appliances, with sensors monitoring the home and AI handling more complex requests.',
    technologies: ['Raspberry Pi', 'NodeMCU', 'Python', 'MQTT', 'Rasa'],
    link: 'https://github.com/Shantanu2k19/ai_ass',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Automobile Tracker & Safety Device',
    description:
      'A vehicle tracking and safety system that detects theft or unusual movement and automatically sends alerts, live location, and emergency calls during accidents, fire, or tilt events.',
    technologies: ['Arduino', 'GPS Module', 'Accelerometer', 'SIM800L'],
    link: 'https://www.youtube.com/watch?v=TGFsjec14Uc&t=14s',
    imageUrl:
      'projects/track.png',
  },
  {
    title: 'AI Attendance System',
    description:
      'An AI-powered attendance system using cameras and face recognition to automatically mark attendance, with a web portal to view and manage records in real time.',
    technologies: ['Raspberry Pi', 'Python', 'Computer Vision'],
    link: 'https://rtai.pythonanywhere.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'LiFi Technology (Proof of Concept)',
    description:
      'A proof-of-concept project exploring how data can be transferred using light instead of radio waves, experimenting with lasers and receivers while documenting real-world limitations.',
    technologies: ['Laser', 'IR LED', 'IR Receiver', 'Arduino'],
    link: 'https://www.youtube.com/watch?v=N_McKCI6kbA&t=116s',
    imageUrl:
      'lifi.jpeg',
  },
];


export const PHOTO_GALLERY_BATCH_1 = [
  [
    '/captures/2.jpeg',
    '/captures/11.jpeg',
    '/captures/4.jpeg',
  ],
  [
    '/captures/5.jpeg',
    '/captures/3.jpeg',
    '/captures/12.jpeg',
  ],
  [
    '/captures/17.jpeg',
    '/captures/18.jpeg',
    '/captures/19.jpeg',
  ]
];

export const PHOTO_GALLERY_BATCH_2 = [
  [
    '/captures/1.jpeg',
    '/captures/6.jpeg',
    '/captures/7.jpeg',
  ],
  [
    '/captures/8.jpeg',
    '/captures/9.jpeg',
    '/captures/10.jpeg',
  ],
  [
    '/captures/13.jpeg',
    '/captures/15.jpeg',
    '/captures/16.jpeg',
  ]
];

