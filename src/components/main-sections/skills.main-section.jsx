import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Section, SectionHeading, GlassCard, Tag } from '../ui/primitives';
import { palette } from '../../theme';
import { skillGroups } from '../../data';

const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <Section id="skills" ref={ref}>
      <SectionHeading eyebrow="03 / Toolkit" title="Technical Skills" />
      <Grid container spacing={2.5}>
        {skillGroups.map((group) => (
          <Grid item xs={12} sm={6} md={4} key={group.title}>
            <GlassCard sx={{ p: { xs: 2.5, md: 3 } }}>
              <Typography
                variant="h6"
                sx={{
                  color: palette.textPrimary,
                  fontSize: '1.05rem',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '2px',
                    background: palette.accent,
                  }}
                />
                {group.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

export default SkillsSection;
