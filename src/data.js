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
      'Architected and led development of a production RAG pipeline on AWS Bedrock and Qdrant, leveraging Cohere Embed V4 semantic retrieval across 400K+ ad-creative embeddings to automate structured JSON layout generation; established retrieval benchmarks (P@1, MRR).',
      'Manage a team executing a Lambda backend modernization with blue-green deployments, a structured error framework, and enhanced CloudWatch observability to improve deployment safety and system reliability.',
      'Built backend data infrastructure for a 55TB Redshift warehouse, 3TB S3 data lake, and 700GB MongoDB dataset, enabling scalable analytics and ML/AI training.',
      'Enabled a UBC Masters of Data Science capstone team by architecting isolated cloud environments (IAM, S3, MongoDB, GCP), building custom Python tooling for data access, and guiding data cleaning, validation, and normalization.',
      'Identified cost and performance inefficiencies from billing and Zendesk analytics, then implemented automated management scripts (S3 lifecycle policies, GCP Compute Engine cron jobs, Lambda schedulers) that reduced storage footprint by 42% and improved stability.',
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
      'Led development of a platform-wide error tracking and auto-recovery system, reducing monthly engineering support tickets by 86% and improving reliability and response time during critical failures.',
      'Analyzed Zendesk support data to design automated error-recovery workflows with self-healing capabilities, preventing cascading failures during rapid product scaling and reducing MTTR by 74%.',
      'Architected the migration of analytics tracking from EC2 to Lambda@Edge, cutting monthly infrastructure costs by ~$7,500 (65%) and improving response latency by 9%.',
      'Built an in-house event-driven image optimization service (API Gateway, Cognito, Lambda, S3) to replace an unreliable third-party API, cutting monthly costs from $5K to $100 while improving uptime.',
    ],
    tech: ['Lambda@Edge', 'API Gateway', 'Cognito', 'S3', 'CloudWatch'],
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
    title: 'Analytics on Lambda@Edge',
    metrics: [
      { value: '−$7.5K/mo', label: 'infra cost (−65%)' },
      { value: '+9%', label: 'faster response' },
    ],
    blurb:
      "Migrated the platform's analytics tracking from EC2 to Lambda@Edge — pushing tracking out to the network edge to improve global presence and response latency while cutting infrastructure cost by ~$7,500/mo (65%).",
    tech: ['Lambda@Edge', 'CloudFront', 'S3', 'CloudWatch', 'Python'],
  },
  {
    company: 'Responsive Ads',
    title: 'Serverless Reliability Overhaul',
    metrics: [
      { value: 'Blue-green', label: 'zero-downtime deploys' },
      { value: 'Real-time', label: 'developer alerting' },
    ],
    blurb:
      'Leading a re-architecture of our serverless backend to handle the large-scale usage patterns that began breaking as user capacity grew — introducing blue-green deployments, a structured error framework, and deeper CloudWatch observability so developers are alerted to issues the moment they happen.',
    tech: ['AWS Lambda', 'Blue-Green Deploys', 'CloudWatch', 'Structured Errors'],
  },
  {
    company: 'Responsive Ads',
    title: 'Self-Healing Provisioning Service',
    metrics: [
      { value: '−98%', label: 'service cost' },
      { value: '−86%', label: 'support tickets' },
    ],
    blurb:
      "Built an internal, event-driven service with self-healing auto-recovery that provisions and proxies external services, replacing an unreliable third-party dependency — cutting that workload's cost 98%, improving reliability, and reducing engineering support tickets 86%.",
    tech: ['API Gateway', 'Cognito', 'Lambda', 'S3'],
  },
];

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      'AWS Lambda',
      'Lambda@Edge',
      'ECS',
      'Fargate',
      'S3',
      'API Gateway',
      'Cognito',
      'IAM',
      'Route 53',
      'CloudWatch',
      'GCP Compute Engine',
      'GCP Cloud Armor',
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
      'Retrieval Eval',
      'Model Deployment',
      'LightGBM',
    ],
  },
  {
    title: 'Data Engineering',
    items: ['ETL Pipelines', 'Airflow', 'Redshift', 'MongoDB', 'S3 Data Lakes', 'Data Modeling'],
  },
  {
    title: 'Data Wrangling',
    items: [
      'Data Cleaning',
      'Missing-Data Imputation',
      'Normalization',
      'Transformation',
      'Analysis',
    ],
  },
  {
    title: 'Tools & DevOps',
    items: ['Docker', 'Git', 'GitHub Actions', 'CircleCI', 'Linux', 'Internal Tooling'],
  },
  {
    title: 'Leadership & Collaboration',
    items: [
      'Team Management',
      'Internal Team Coordination',
      'External Partner Coordination',
      'Tech & Non-Tech Comms',
      'Mentorship',
    ],
  },
];
