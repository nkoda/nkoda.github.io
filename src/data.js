// Resume / portfolio content — single source of truth.

export const RESUME_URL =
  'https://drive.google.com/file/d/1MRkU9bS6or3agbHDOE1lTJFUx7JpWkVY/view?usp=sharing';

export const stats = [
  { value: '50TB+', label: 'Data under management' },
  { value: '400K+', label: 'AI embeddings in production' },
  { value: '86%', label: 'Support tickets eliminated' },
  { value: '$7.5K/mo', label: 'Infra cost cut' },
];

export const experience = [
  {
    role: 'Senior Software Developer',
    team: 'Data Infrastructure & Analytics',
    company: 'Responsive Ads',
    location: 'Vancouver, BC',
    period: 'Jan 2024 — Present',
    current: true,
    points: [
      'Architected and led a production RAG pipeline on AWS Bedrock and Qdrant, using Cohere Embed V4 semantic retrieval across 400K+ ad-creative embeddings to automate structured JSON layout generation; established retrieval benchmarks (P@1, MRR).',
      'Managing a team executing a Lambda backend modernization — blue-green deployments, a structured error framework, modern coding patterns, and enhanced CloudWatch observability to improve deployment safety and reliability.',
      'Built backend data infrastructure supporting a 55TB Redshift warehouse, 3TB S3 data lake, and 700GB MongoDB dataset; onboarded a UBC Masters of Data Science capstone team by architecting isolated cloud environments (IAM, S3, MongoDB, GCP) and custom Python tooling libraries.',
    ],
    tech: ['AWS Bedrock', 'Qdrant', 'Cohere Embed V4', 'Lambda', 'Redshift', 'MongoDB', 'GCP'],
  },
  {
    role: 'Backend Software Developer',
    team: 'Data Infrastructure & Analytics',
    company: 'Responsive Ads',
    location: 'Vancouver, BC',
    period: 'Sept 2023 — Jan 2024',
    points: [
      'Led development of a platform-wide error tracking and auto-recovery system, reducing monthly engineering support tickets by 86% and improving reliability during critical failures.',
      'Migrated analytics tracking from EC2 to Lambda@Edge, cutting monthly infrastructure costs by ~$7,500 (65%) and improving response latency by 9%.',
      'Designed an event-driven image optimization service using API Gateway, Cognito (P2P auth), Lambda, and S3 to replace an unreliable third-party API, reducing monthly costs by 98% while improving uptime.',
      'Engineered custom Python libraries that cut experimental iteration cycles from 45 minutes to under 5.',
    ],
    tech: ['Lambda@Edge', 'API Gateway', 'Cognito', 'S3', 'Python', 'CloudWatch'],
  },
  {
    role: 'Software Developer (Full Stack)',
    team: '',
    company: 'Emerging Media Labs',
    location: 'Vancouver, BC',
    period: 'May 2020 — Aug 2021',
    points: [
      'Developed an automated ETL pipeline supporting multiple data formats (XML, JSON, CSV) with validation and quality checks, reducing processing time by 82%.',
      'Designed a SQL database and accompanying Python scripts for OLTP workloads, improving first-byte latency by 33%.',
    ],
    tech: ['Python', 'SQL', 'ETL', 'JavaScript', 'C#'],
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'NoSQL / MongoDB'],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      'AWS Lambda',
      'Lambda@Edge',
      'S3',
      'API Gateway',
      'Cognito',
      'CloudWatch',
      'GCP',
      'Serverless',
    ],
  },
  {
    title: 'AI / ML',
    items: [
      'RAG Pipelines',
      'AWS Bedrock',
      'Qdrant',
      'Cohere Embed V4',
      'Retrieval Eval (P@1, MRR)',
      'Flask / Gunicorn',
      'LightGBM',
    ],
  },
  {
    title: 'Data Engineering',
    items: ['ETL Pipelines', 'Airflow', 'Redshift', 'S3 Data Lakes', 'Data Modeling'],
  },
  {
    title: 'Systems',
    items: [
      'Observability',
      'Error Tracking & Auto-Recovery',
      'Performance Optimization',
      'Cost Optimization',
      'System Design',
    ],
  },
];
