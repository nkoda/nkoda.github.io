// Resume / portfolio content — single source of truth.

// Resume is hosted in the repo at public/resume.pdf and served at /resume.pdf.
// To update it, replace public/resume.pdf and redeploy.
export const RESUME_URL = `${process.env.PUBLIC_URL}/resume.pdf`;

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
      'Architected and led development of a production RAG pipeline on AWS Bedrock and Qdrant, automating structured JSON layout generation across 400K+ ad-creative embeddings.',
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
      'Led a platform-wide serverless cost-and-reliability overhaul across the analytics and image pipelines — error tracking & auto-recovery, an EC2→Lambda@Edge migration, and an in-house image-optimization service (API Gateway, Cognito, Lambda, S3).',
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

// Company work, shown as metric-driven case studies at the top of "Selected Work".
export const caseStudies = [
  {
    company: 'Responsive Ads',
    title: 'Production RAG Layout Pipeline',
    metrics: [
      { value: '400K+', label: 'creative embeddings' },
      { value: 'P@1 · MRR', label: 'retrieval benchmarks' },
    ],
    blurb:
      "Architected and led the team's first production RAG pipeline on AWS Bedrock and Qdrant, using Cohere Embed V4 semantic retrieval across 400K+ ad-creative embeddings to automate structured JSON layout generation — and established the retrieval evaluation benchmarks (P@1, MRR) it ships against.",
    tech: ['AWS Bedrock', 'Qdrant', 'Cohere Embed V4', 'RAG', 'Python'],
  },
  {
    company: 'Responsive Ads',
    title: 'Serverless Cost & Reliability Overhaul',
    metrics: [
      { value: '−86%', label: 'support tickets' },
      { value: '−$7.5K/mo', label: 'infra cost' },
      { value: '−98%', label: 'image-service cost' },
    ],
    blurb:
      'Led a platform-wide error tracking and auto-recovery system and re-architected analytics and image services onto serverless (Lambda@Edge, API Gateway, Cognito, S3) — cutting support tickets 86%, infrastructure cost ~$7,500/mo, and image-processing cost 98% while improving uptime and latency.',
    tech: ['Lambda@Edge', 'API Gateway', 'Cognito', 'S3', 'CloudWatch'],
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
