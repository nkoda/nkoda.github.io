import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Section, SectionHeading, GlassCard, Tag } from '../ui/primitives';
import { palette } from '../../theme';
import { caseStudies } from '../../data';

import img_datapipeline from '../../assets/data_pipeline.drawio.svg';
import img_atlas from '../../assets/atlas.png';
import img_twitterReporterApi from '../../assets/twitter_reporter_api.png';
import img_jupyter from '../../assets/jupyter.webp';
import img_eit from '../../assets/EIT_project.jpg';

const projects = [
  {
    title: 'Financial Data Pipeline',
    period: 'May 2023',
    image: img_datapipeline,
    contain: true,
    blurb:
      'End-to-end pipeline predicting equity trading volume from historical data. A LightGBM regression model is served via a Flask API, containerized with Docker, and orchestrated as an Airflow workflow — with thread-pooled ingestion cutting execution time by 47%.',
    tech: ['Apache Airflow', 'LightGBM', 'Flask', 'Docker', 'Python'],
    featured: true,
  },
  {
    title: 'Twitter Reporter',
    period: 'Dec 2022',
    image: img_twitterReporterApi,
    blurb:
      'Pairs live Twitter trend data with the OpenAI API to generate summarized sentiment reports on trending topics. Built on a Node.js / Express REST API with MongoDB persistence.',
    tech: ['Node.js', 'Express', 'OpenAI API', 'MongoDB'],
  },
  {
    title: 'Project Atlas',
    period: 'Mar 2023',
    image: img_atlas,
    blurb:
      'A project-catalog web app with an Express.js REST API and a React single-page client. Endpoints documented with Swagger; both services containerized with Docker.',
    tech: ['React', 'Express', 'Swagger', 'Docker'],
  },
  {
    title: 'Real-time Hand Gesture Recognition',
    period: 'Aug 2021',
    image: img_eit,
    blurb:
      'A low-cost device that classifies muscle contractions in real time with ML clustering to make robotic prosthetics more accessible. Streams electrode data from a microcontroller over UART for classification in Python and C.',
    tech: ['Python', 'C', 'Scikit-learn', 'UART'],
  },
  {
    title: 'Investment Outcome Predictor',
    period: 'Apr 2022',
    image: img_jupyter,
    blurb:
      'A machine-learning pipeline predicting investment outcomes from Canadian census data using Ridge regression for feature selection and KNN, built test-driven with a GitHub Actions CI/CD pipeline publishing to PyPI.',
    tech: ['Python', 'Scikit-learn', 'GitHub Actions', 'Docker'],
  },
];

const SubLabel = ({ children }) => (
  <Typography
    className="mono"
    sx={{
      color: palette.accent,
      fontSize: 12.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 1.2,
      mb: 2.5,
      mt: 1,
      '&::after': {
        content: '""',
        flex: 1,
        height: '1px',
        background: palette.border,
      },
    }}
  >
    {children}
  </Typography>
);

const TitleRow = ({ title, period, size = '1.2rem' }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 1, mb: 1.2 }}>
    <Typography variant="h5" sx={{ color: palette.textPrimary, fontSize: size }}>
      {title}
    </Typography>
    {period && (
      <Typography className="mono" sx={{ color: palette.textMuted, fontSize: 12, whiteSpace: 'nowrap' }}>
        {period}
      </Typography>
    )}
  </Box>
);

// Company work — visual hero is a band of headline metrics (no proprietary screenshots).
const CaseStudyCard = ({ study }) => (
  <GlassCard sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1.5,
        p: { xs: 2.5, md: 3 },
        background:
          'linear-gradient(135deg, rgba(200,130,90,0.10), rgba(20,14,16,0.2)), #1B1316',
        borderBottom: `1px solid ${palette.border}`,
        backgroundImage:
          'linear-gradient(rgba(200,130,90,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,130,90,0.05) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
      }}
    >
      {study.metrics.map((m) => (
        <Box key={m.label} sx={{ flex: '1 1 0', minWidth: 0, textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              color: palette.accent,
              fontSize: { xs: '1.15rem', md: '1.35rem' },
              lineHeight: 1.15,
              wordBreak: 'break-word',
            }}
          >
            {m.value}
          </Typography>
          <Typography sx={{ color: palette.textMuted, fontSize: 11.5, mt: 0.6, lineHeight: 1.3 }}>
            {m.label}
          </Typography>
        </Box>
      ))}
    </Box>
    <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Typography
        className="mono"
        sx={{ color: palette.accentSoft, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 1 }}
      >
        {study.company} · Case Study
      </Typography>
      <TitleRow title={study.title} size="1.3rem" />
      <Typography sx={{ color: palette.textSecondary, fontSize: 14.5, lineHeight: 1.65, flexGrow: 1 }}>
        {study.blurb}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 2.2 }}>
        {study.tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </Box>
    </Box>
  </GlassCard>
);

const ProjectImage = ({ project, aspectRatio }) => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      aspectRatio,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #2A1F22 0%, #17100F 100%)',
      borderBottom: `1px solid ${palette.border}`,
    }}
  >
    <Box
      className="proj-img"
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${project.image})`,
        backgroundSize: project.contain ? 'contain' : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'transform 0.5s ease',
      }}
    />
  </Box>
);

const FeaturedProject = ({ project }) => (
  <GlassCard sx={{ overflow: 'hidden', '&:hover .proj-img': { transform: 'scale(1.03)' } }}>
    <ProjectImage project={project} aspectRatio={{ xs: '16 / 9', md: '32 / 9' }} />
    <Box sx={{ p: { xs: 3, md: 4 } }}>
      <TitleRow title={project.title} period={project.period} size="1.6rem" />
      <Typography sx={{ color: palette.textSecondary, fontSize: 15, lineHeight: 1.7, maxWidth: 760 }}>
        {project.blurb}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9, mt: 2.5 }}>
        {project.tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </Box>
    </Box>
  </GlassCard>
);

const ProjectCard = ({ project }) => (
  <GlassCard
    sx={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      '&:hover .proj-img': { transform: 'scale(1.06)' },
    }}
  >
    <ProjectImage project={project} aspectRatio="16 / 9" />
    <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <TitleRow title={project.title} period={project.period} />
      <Typography
        sx={{
          color: palette.textSecondary,
          fontSize: 14.5,
          lineHeight: 1.6,
          flexGrow: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {project.blurb}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 2.2 }}>
        {project.tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </Box>
    </Box>
  </GlassCard>
);

const ProjectsSection = React.forwardRef((props, ref) => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" ref={ref}>
      <SectionHeading eyebrow="04 / Selected Work" title="Selected Work" />

      <SubLabel>Professional · Responsive Ads</SubLabel>
      <Grid container spacing={2.5}>
        {caseStudies.map((study) => (
          <Grid item xs={12} md={6} key={study.title}>
            <CaseStudyCard study={study} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <SubLabel>Personal Projects</SubLabel>
      </Box>
      {featured && (
        <Box sx={{ mb: 2.5 }}>
          <FeaturedProject project={featured} />
        </Box>
      )}
      <Grid container spacing={2.5}>
        {rest.map((project) => (
          <Grid item xs={12} sm={6} key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography sx={{ color: palette.textSecondary, fontSize: 15, mb: 1.5 }}>
          More on GitHub
        </Typography>
        <IconButton
          href="https://github.com/nkoda"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          sx={{
            color: palette.textSecondary,
            border: `1px solid ${palette.border}`,
            borderRadius: '12px',
            px: 2,
            '&:hover': { color: palette.accent, borderColor: palette.accent },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Section>
  );
});

export default ProjectsSection;
