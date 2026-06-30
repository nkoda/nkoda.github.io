import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { palette } from '../../theme';
import { RESUME_URL } from '../../data';

const taglines = [
  'Crafting your ideas into software.', // English
  'Transformez vos idées en logiciel.', // French
  '将您的想法制作成软件。', // Mandarin
  'あなたのアイデアをソフトウェアに。', // Japanese
  'Gawing software ang iyong ideya.', // Tagalog
  'Biến ý tưởng của bạn thành phần mềm.', // Vietnamese
];

const HomeSection = ({ onNavigate }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 550);
    }, 3600);
    return () => clearInterval(cycle);
  }, []);

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 1180,
        mx: 'auto',
        px: { xs: 3, sm: 5, md: 6 },
        py: { xs: 12, md: 8 },
      }}
    >
      <Typography
        className="mono"
        sx={{
          color: palette.accent,
          letterSpacing: '0.18em',
          fontSize: { xs: 13, md: 15 },
          mb: 2,
        }}
      >
        {'// backend · cloud infrastructure · production AI'}
      </Typography>

      <Typography
        variant="h1"
        sx={{
          color: palette.textPrimary,
          fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
        }}
      >
        Nikko Dumrique
      </Typography>

      <Box sx={{ height: { xs: 34, md: 46 }, mt: 1.5, mb: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: '1.15rem', md: '1.6rem' },
            fontWeight: 300,
            color: palette.accentSoft,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          {taglines[index]}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: palette.textSecondary,
          fontSize: { xs: '1rem', md: '1.12rem' },
          lineHeight: 1.75,
          maxWidth: 640,
          mt: 2,
        }}
      >
        I'm a backend engineer based in Vancouver specializing in{' '}
        <Box component="span" sx={{ color: palette.textPrimary, fontWeight: 600 }}>
          cloud infrastructure
        </Box>
        ,{' '}
        <Box component="span" sx={{ color: palette.textPrimary, fontWeight: 600 }}>
          serverless systems
        </Box>
        , and{' '}
        <Box component="span" sx={{ color: palette.textPrimary, fontWeight: 600 }}>
          production AI
        </Box>
        . I design and maintain large data schemas with automated recovery, and
        build cost-efficient AWS platforms and RAG/LLM pipelines that make a 50TB+
        analytics warehouse accessible for ML.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4.5 }}>
        <Button
          variant="contained"
          disableElevation
          onClick={() => onNavigate && onNavigate('projects')}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            fontSize: 15,
            px: 3,
            py: 1.2,
            borderRadius: '10px',
            background: palette.accent,
            color: palette.accentContrast,
            '&:hover': { background: palette.accentSoft },
          }}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          href={RESUME_URL}
          target="_blank"
          rel="noopener"
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            fontSize: 15,
            px: 3,
            py: 1.2,
            borderRadius: '10px',
            color: palette.accent,
            borderColor: palette.borderStrong,
            '&:hover': {
              borderColor: palette.accent,
              background: 'rgba(200, 130, 90, 0.1)',
            },
          }}
        >
          Resume
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, mt: 3.5 }}>
        {[
          { icon: <GitHubIcon />, href: 'https://github.com/nkoda', label: 'GitHub' },
          {
            icon: <LinkedInIcon />,
            href: 'https://www.linkedin.com/in/nikkodumrique/',
            label: 'LinkedIn',
          },
          { icon: <EmailIcon />, href: 'mailto:dumriquenikko@gmail.com', label: 'Email' },
        ].map((s) => (
          <IconButton
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener"
            aria-label={s.label}
            sx={{
              color: palette.textSecondary,
              border: `1px solid ${palette.border}`,
              borderRadius: '10px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: palette.accent,
                borderColor: palette.accent,
                transform: 'translateY(-2px)',
              },
            }}
          >
            {s.icon}
          </IconButton>
        ))}
      </Box>

      <Box
        onClick={() => onNavigate && onNavigate('about')}
        sx={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          color: palette.textMuted,
          '&:hover': { color: palette.accent },
        }}
      >
        <Typography
          className="mono"
          sx={{ fontSize: 10, letterSpacing: '0.3em', mb: 0.5 }}
        >
          SCROLL
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            animation: 'bob 1.8s ease-in-out infinite',
            '@keyframes bob': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(6px)' },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default HomeSection;
