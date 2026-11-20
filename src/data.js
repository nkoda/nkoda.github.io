// Resume / portfolio content — single source of truth.

// Resume is hosted in the repo at public/resume.pdf and served at /resume.pdf.
// To update it, replace public/resume.pdf and redeploy.
export const RESUME_URL = `${process.env.PUBLIC_URL}/resume.pdf`;

export const stats = [
  { value: '3', label: 'Engineers on the AI team I lead' },
  { value: '$0.0044', label: 'Per AI layout in production' },
  { value: '86%', label: 'Fewer support tickets' },
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
      'Took a one-click vision-LLM layout tool (Claude, Gemini) to production in Oct 2026.',
      'Owned the release test plan: auth, parallel spend caps and state across server instances. The automated suite passes 1,858 of 1,859.',
      "Scoped a standalone layout API for one step of an enterprise customer's pipeline after joining their calls. Wrote its API contract and a Lambda container with Bedrock and fal.ai adapters. The build is in progress.",
      'Lead a 3-engineer AI team. Set the 12-month roadmap and wrote the LLM cost plan. Review and merge every PR.',
      'Traced a customer data-loss incident to soft-delete code and a 1-day S3 expiry rule. Sized the impact across 227K designs. In replay, the fix cut wrongly deleted files from 426 to 0, with 17 regression tests.',
      'Designed a provider-agnostic LLM gateway and model catalog for Bedrock and fal.ai. Per-user and per-team spend caps fail closed, and each call logs its cost. Server-side, version-pinned prompts closed a prompt-tampering hole.',
      'Directed a 190-task team eval: few-shot vision-LLM layouts beat a rule-based resize on all 7 measures, with 61% fewer errors. The shipped model costs $0.0044 per layout at 4.3 s median and 13.1 s p90 latency.',
      'Tested one model call per element against one call per layout. On one test layout, per-element took 6× the time and 7× the calls, so the team shipped the single call.',
      'Built and own a RAG search project (Qdrant hybrid search, Cohere Embed v4 and Rerank) for a 183K-design library. Directed retrieval evals (P@1, MRR) that caught a 10.5-point top-1 precision drop before release.',
    ],
    tech: ['Claude', 'Gemini', 'AWS Bedrock', 'fal.ai', 'Qdrant', 'Cohere', 'TypeScript', 'Python', 'Lambda'],
  },
  {
    role: 'Backend Software Developer',
    team: 'Data Infrastructure & Analytics',
    company: 'Responsive Ads',
    location: 'Vancouver, BC',
    period: 'Sept 2023 — Jan 2024',
    points: [
      'Diagnosed repeated client-facing production failures, then built platform-wide error tracking and auto-recovery. Monthly support tickets fell 86% and mean time to recovery fell 74%.',
      'Moved analytics tracking from EC2 to Lambda@Edge, saving ~$7.5K/month (65%) and cutting latency 9%.',
      'Replaced an unreliable third-party image API with a serverless service (API Gateway, Cognito, Lambda, S3), lowering cost from $5K to $100/month.',
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
      "Led a 7-person team's data infrastructure for a visualization product, and cut its operating costs 70% by moving production from AWS to VMware.",
      'Built an automated Python ETL pipeline with validation for XML, JSON and CSV data, cutting manual processing time 82%.',
    ],
    tech: ['Python', 'SQL', 'ETL', 'Docker', 'JavaScript', 'C#'],
  },
];

// Company work, shown as metric-driven case studies at the top of "Selected Work".
export const caseStudies = [
  {
    company: 'Responsive Ads',
    title: 'Auto Layout: One-Click AI Layouts',
    metrics: [
      { value: '7 / 7', label: 'measures beat rule-based resize' },
      { value: '$0.0044', label: 'per layout' },
    ],
    blurb:
      'Auto Layout turns one finished design into a layout for every target size in one click. A vision LLM (Claude on AWS Bedrock, Gemini on fal.ai) reads a map of the design\'s elements and returns a layout for each size, which the editor applies as one undo step. I took it from prototype to production in Oct 2026: I designed the LLM gateway behind it (fail-closed spend caps, per-call cost logs, version-pinned server-side prompts), built the pipeline that stores every run with designer edits and feedback as training data, and owned the release test plan. A team eval over 190 tasks showed few-shot layouts beat a rule-based resize on all 7 measures, with 61% fewer errors, at $0.0044 per layout and a 4.3 s median latency.',
    tech: ['Claude', 'Gemini', 'AWS Bedrock', 'fal.ai', 'TypeScript', 'Svelte', 'S3'],
  },
  {
    company: 'Responsive Ads',
    title: 'LLM Gateway & Spend Controls',
    metrics: [
      { value: 'Fail-closed', label: 'per-user & per-team caps' },
      { value: 'Every call', label: 'cost logged' },
    ],
    blurb:
      'Designed a provider-agnostic LLM gateway and model catalog for Bedrock and fal.ai. Spend caps per user and team fail closed, each call logs its cost from the AWS Price List, and server-side, version-pinned prompts closed a prompt-tampering hole.',
    tech: ['AWS Bedrock', 'fal.ai', 'Prompt Manager', 'Node.js'],
  },
  {
    company: 'Responsive Ads',
    title: 'RAG Search with Retrieval Evals',
    metrics: [
      { value: '183K', label: 'design library' },
      { value: '10.5 pt', label: 'precision drop caught' },
    ],
    blurb:
      'Built and own a RAG search project with Qdrant hybrid search, Cohere Embed v4 and Rerank for a 183K-design library. Retrieval evals (P@1, MRR) that I directed caught a 10.5-point top-1 precision drop from a model upgrade before release.',
    tech: ['Qdrant', 'Cohere Embed v4', 'Cohere Rerank', 'AWS Bedrock', 'Python'],
  },
  {
    company: 'Responsive Ads',
    title: 'Error Tracking & Edge Analytics',
    metrics: [
      { value: '−86%', label: 'support tickets' },
      { value: '−$7.5K/mo', label: 'infra cost (−65%)' },
    ],
    blurb:
      'Built platform-wide error tracking and auto-recovery after diagnosing repeated client-facing failures, cutting monthly support tickets 86% and mean time to recovery 74%. Moved analytics tracking from EC2 to Lambda@Edge, saving ~$7.5K/month and cutting latency 9%.',
    tech: ['Lambda', 'Lambda@Edge', 'CloudWatch', 'S3'],
  },
];

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
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
      'Claude & Gemini APIs',
      'AWS Bedrock',
      'LLM Gateways',
      'Spend Caps & Cost Metering',
      'RAG',
      'Qdrant Hybrid Search',
      'Cohere Embed & Rerank',
      'Retrieval Evals (P@1, MRR)',
      'Claude Code Multi-Agent Workflows',
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
