import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Section, SectionHeading, GlassCard, Tag } from '../ui/primitives';
import { palette } from '../../theme';

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
      'A project-catalog web app with an Express.js REST API and a React single-page client. Endpoints documented with Swagger; both services containerized with Docker for consistent deployment.',
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

const ProjectCard = ({ project }) => (
  <GlassCard sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <Box
      sx={{
        height: 150,
        background: `linear-gradient(180deg, rgba(20,14,16,0) 40%, rgba(20,14,16,0.88) 100%), url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: `1px solid ${palette.border}`,
      }}
    />
    <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 1,
          mb: 1,
        }}
      >
        <Typography variant="h6" sx={{ color: palette.textPrimary, fontSize: '1.15rem' }}>
          {project.title}
        </Typography>
        <Typography className="mono" sx={{ color: palette.textMuted, fontSize: 12 }}>
          {project.period}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: palette.textSecondary,
          fontSize: 14.5,
          lineHeight: 1.6,
          flexGrow: 1,
        }}
      >
        {project.blurb}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 2.5 }}>
        {project.tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </Box>
    </Box>
  </GlassCard>
);

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <Section id="projects" ref={ref}>
      <SectionHeading eyebrow="04 / Selected Work" title="Projects" />
      <Grid container spacing={2.5}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={project.featured ? 6 : 4} key={project.title}>
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
