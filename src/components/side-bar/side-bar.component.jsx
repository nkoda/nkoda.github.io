import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
// import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined'; // for "Off the Clock" — disabled
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { palette } from '../../theme';
import { RESUME_URL } from '../../data';
import Monogram from '../ui/monogram';

export const navItems = [
  { id: 'home', label: 'Home', icon: <HomeOutlinedIcon fontSize="small" /> },
  { id: 'about', label: 'About', icon: <PersonOutlineOutlinedIcon fontSize="small" /> },
  { id: 'experience', label: 'Experience', icon: <WorkOutlineOutlinedIcon fontSize="small" /> },
  { id: 'skills', label: 'Skills', icon: <CodeOutlinedIcon fontSize="small" /> },
  { id: 'projects', label: 'Projects', icon: <FolderOutlinedIcon fontSize="small" /> },
  // { id: 'life', label: 'Off the Clock', icon: <TerrainOutlinedIcon fontSize="small" /> }, // temporarily disabled
  { id: 'contact', label: 'Contact', icon: <MailOutlineIcon fontSize="small" /> },
];

const SideBar = ({ onNavigate, active }) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        px: 2.5,
        py: 3,
        background: 'rgba(20, 14, 16, 0.72)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRight: { md: `1px solid ${palette.border}` },
      }}
    >
      {/* Logo / identity */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, px: 0.5 }}>
        <Monogram size={44} />
        <Box>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              color: palette.textPrimary,
              fontSize: 20,
              lineHeight: 1.1,
            }}
          >
            Nikko Dumrique
          </Typography>
          <Typography sx={{ color: palette.textMuted, fontSize: 11.5 }}>
            Backend Software Developer
          </Typography>
        </Box>
      </Box>

      {/* Nav */}
      <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <Box
              key={item.id}
              onClick={() => onNavigate(item.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 1.5,
                py: 1.15,
                borderRadius: '10px',
                cursor: 'pointer',
                position: 'relative',
                color: isActive ? palette.accent : palette.textSecondary,
                background: isActive ? 'rgba(200, 130, 90, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: palette.accent,
                  background: 'rgba(200, 130, 90, 0.07)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 3,
                  height: isActive ? 20 : 0,
                  borderRadius: 3,
                  background: palette.accent,
                  transition: 'height 0.2s ease',
                },
              }}
            >
              {item.icon}
              <Typography sx={{ fontSize: 14.5, fontWeight: isActive ? 600 : 500 }}>
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ borderColor: palette.border, mb: 2 }} />
      <Box sx={{ display: 'flex', gap: 0.5, mb: 1.5 }}>
        {[
          { icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/nkoda', label: 'GitHub' },
          {
            icon: <LinkedInIcon fontSize="small" />,
            href: 'https://www.linkedin.com/in/nikkodumrique/',
            label: 'LinkedIn',
          },
          { icon: <MailOutlineIcon fontSize="small" />, href: 'mailto:dumriquenikko@gmail.com', label: 'Email' },
          { icon: <DescriptionOutlinedIcon fontSize="small" />, href: RESUME_URL, label: 'Resume' },
        ].map((s) => (
          <IconButton
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener"
            aria-label={s.label}
            size="small"
            sx={{
              color: palette.textMuted,
              '&:hover': { color: palette.accent },
            }}
          >
            {s.icon}
          </IconButton>
        ))}
      </Box>
      <Typography sx={{ color: palette.textMuted, fontSize: 11 }}>
        © {new Date().getFullYear()} Nikko Dumrique
      </Typography>
    </Box>
  );
};

export default SideBar;
