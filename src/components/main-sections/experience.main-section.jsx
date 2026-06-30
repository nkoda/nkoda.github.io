import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Section, SectionHeading, GlassCard, Tag } from '../ui/primitives';
import { palette } from '../../theme';
import { experience } from '../../data';

const Dot = ({ current }) => (
  <Box
    sx={{
      position: 'absolute',
      left: { xs: -29, md: -37 },
      top: 6,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: current ? palette.accent : palette.bg,
      border: `2px solid ${palette.accent}`,
      boxShadow: current ? `0 0 0 4px ${palette.accentGlow}` : 'none',
      zIndex: 1,
    }}
  />
);

const ExperienceSection = React.forwardRef((props, ref) => {
  return (
    <Section id="experience" ref={ref}>
      <SectionHeading eyebrow="02 / Career" title="Experience" />
      <Box
        sx={{
          position: 'relative',
          pl: { xs: 3.5, md: 4.5 },
          borderLeft: `2px solid ${palette.border}`,
        }}
      >
        {experience.map((job, i) => (
          <Box key={i} sx={{ position: 'relative', mb: i === experience.length - 1 ? 0 : 4 }}>
            <Dot current={job.current} />
            <GlassCard sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 1,
                  mb: 0.5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: palette.textPrimary, fontSize: { xs: '1.15rem', md: '1.35rem' } }}
                >
                  {job.role}
                </Typography>
                <Typography
                  className="mono"
                  sx={{ color: palette.accent, fontSize: 13, whiteSpace: 'nowrap' }}
                >
                  {job.period}
                </Typography>
              </Box>
              <Typography sx={{ color: palette.accentSoft, fontWeight: 600, fontSize: 15 }}>
                {job.company}
                {job.team ? (
                  <Box component="span" sx={{ color: palette.textMuted, fontWeight: 400 }}>
                    {'  ·  '}
                    {job.team}
                  </Box>
                ) : null}
                <Box component="span" sx={{ color: palette.textMuted, fontWeight: 400 }}>
                  {'  ·  '}
                  {job.location}
                </Box>
              </Typography>

              <Box component="ul" sx={{ pl: 0, mt: 2, mb: 0, listStyle: 'none' }}>
                {job.points.map((p, j) => (
                  <Box
                    component="li"
                    key={j}
                    sx={{
                      display: 'flex',
                      gap: 1.4,
                      mb: 1.4,
                      color: palette.textSecondary,
                      fontSize: { xs: 14.5, md: 15 },
                      lineHeight: 1.65,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ color: palette.accent, mt: '2px', flexShrink: 0 }}
                    >
                      ▹
                    </Box>
                    <span>{p}</span>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2.5 }}>
                {job.tech.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </Box>
            </GlassCard>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography
          className="mono"
          sx={{
            color: palette.accent,
            fontSize: 13,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            mb: 1.5,
          }}
        >
          Education
        </Typography>
        <GlassCard sx={{ p: { xs: 2.5, md: 3 } }} hover={false}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 1,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ color: palette.textPrimary }}>
                University of British Columbia
              </Typography>
              <Typography sx={{ color: palette.textSecondary, fontSize: 15 }}>
                B.Sc. in Physics, Minor in Data Science
              </Typography>
            </Box>
            <Typography className="mono" sx={{ color: palette.accent, fontSize: 13 }}>
              Sept 2017 — May 2022
            </Typography>
          </Box>

          <Box
            sx={{ mt: 2.5, pt: 2.5, borderTop: `1px solid ${palette.border}` }}
          >
            <Typography
              className="mono"
              sx={{
                color: palette.accentSoft,
                fontSize: 11.5,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              Relevant Coursework
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9 }}>
              {[
                'Relational & Non-Relational Database Systems (querying, optimization, data modeling)',
                'Machine Learning & Data Mining',
                'Applied Machine Learning',
                'Advanced Data Analysis & Simulations',
                'Reproducible Workflows in Data Science',
                'Data Structures & Algorithms',
                'Software Construction',
              ].map((course) => (
                <Tag key={course} label={course} />
              ))}
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Section>
  );
});

export default ExperienceSection;
