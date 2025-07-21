import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Chip,
  IconButton,
  Tooltip,
  CssBaseline,
} from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const skills = [
  { name: 'Java', icon: <CodeIcon /> },
  { name: 'Spring Boot', icon: <IntegrationInstructionsIcon /> },
  { name: 'JavaScript', icon: <CodeIcon /> },
  { name: 'React', icon: <CodeIcon /> },
  { name: 'PostgreSQL', icon: <StorageIcon /> },
  { name: 'Oracle', icon: <StorageIcon /> },
  { name: 'PL/SQL', icon: <StorageIcon /> },
  { name: 'Shell Script', icon: <TerminalIcon /> },
  { name: 'GWT', icon: <CodeIcon /> },
  { name: 'REST API', icon: <IntegrationInstructionsIcon /> },
];

const projects = [
  {
    title: 'Ne@tMove (Migration Phase)',
    role: 'Senior Developer / Migration Team Lead',
    duration: 'Oct 2023 - Present',
    description:
      'Migrated ERP system from Oracle to PostgreSQL, enhancing DB performance and scalability. Modernized Java backend to ensure seamless integration.',
  },
  {
    title: 'Bharathi - NMGT',
    role: 'Senior Software Developer',
    duration: 'Aug 2022 - Sep 2023',
    description:
      'Designed and developed ERP modules for grain trading using Java and PostgreSQL. Delivered 30+ data entry forms and 60+ analytical reports.',
  },
  {
    title: 'Bharathi - WASAL',
    role: 'Senior Software Developer',
    duration: 'May 2022 - Jul 2022',
    description:
      'Built server control module with real-time application management, log analysis, and database health monitoring using shell scripts and PL/SQL.',
  },
  {
    title: 'Ne@tMove',
    role: 'Software Developer',
    duration: 'Feb 2021 - Apr 2022',
    description:
      'Contributed to ERP logistics platform with 60+ forms, 100 master screens, and 90+ business reports. Focused on backend and GWT frontend development.',
  },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#f5f7fa',
                  paper: '#ffffff',
                },
              }
            : {
                background: {
                  default: '#0e0e0e',
                  paper: '#1e1e1e',
                },
              }),
        },
        typography: {
          fontFamily: 'Poppins, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        {/* Navigation */}
        <Box
          display="flex"
          justifyContent="space-around"
          p={2}
          bgcolor="background.paper"
          position="sticky"
          top={0}
          zIndex={1}
          boxShadow={3}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((text) => (
            <motion.div whileHover={{ scale: 1.1 }} key={text}>
              <Button onClick={() => scrollTo(text.toLowerCase())} sx={{ fontWeight: 600 }}>
                {text}
              </Button>
            </motion.div>
          ))}
          <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>

        {/* Hero Section */}
        <Box
          id="home"
          minHeight="90vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{
            background:
              mode === 'light'
                ? 'linear-gradient(to right, #667eea, #764ba2)'
                : 'linear-gradient(to right, #000000, #333333)',
            color: 'white',
          }}
        >
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h2" gutterBottom fontWeight={700} sx={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
              Hi, I'm Jeeva
            </Typography>
            <Typography variant="h5" mb={2} sx={{ opacity: 0.9 }}>
              Crafting Scalable Fullstack Solutions
            </Typography>
            <Typography variant="subtitle1" mb={3}>
              Java | Spring Boot | PostgreSQL | React | GWT | REST APIs
            </Typography>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="contained" size="large" onClick={() => scrollTo('projects')} sx={{ bgcolor: '#ff6f61' }}>
                Explore My Work
              </Button>
            </motion.div>
          </motion.div>
        </Box>

        {/* About Section */}
        <Container id="about" sx={{ py: 8 }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Typography variant="h4" gutterBottom fontWeight={600}>
              About Me
            </Typography>
            <Typography>
              I’m a passionate Fullstack Developer with over 4 years in ERP, backend logic, and database optimization.
              With hands-on experience in Java, Spring Boot, and PL/SQL, I enjoy translating complex business needs into
              efficient software systems. I’ve also led Oracle to PostgreSQL migrations and created 100+ screens and
              reports for logistics and trading.
            </Typography>
          </motion.div>
        </Container>

        {/* Skills Section */}
        <Container id="skills" sx={{ py: 8 }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Technical Skills
            </Typography>
            <Grid container spacing={2}>
              {skills.map((skill) => (
                <Grid item key={skill.name}>
                  <Tooltip title={skill.name} placement="top">
                    <Chip
                      icon={skill.icon}
                      label={skill.name}
                      variant="outlined"
                      sx={{
                        bgcolor: mode === 'light' ? 'white' : '#333',
                        borderColor: '#cfd8dc',
                        '&:hover': { bgcolor: '#e0f7fa' },
                      }}
                    />
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* Projects Section */}
        <Container id="projects" sx={{ py: 8 }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Featured Projects
            </Typography>
            <Grid container spacing={3}>
              {projects.map((proj, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Paper
                      elevation={6}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 3,
                        background:
                          mode === 'light'
                            ? 'linear-gradient(to bottom right, #e3f2fd, #ffffff)'
                            : 'linear-gradient(to bottom right, #1e1e1e, #2c2c2c)',
                      }}
                    >
                      <Typography variant="h6" fontWeight={600}>
                        {proj.title}
                      </Typography>
                      <Typography variant="subtitle2" color="primary.dark">
                        {proj.role}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {proj.duration}
                      </Typography>
                      <Typography mt={1}>{proj.description}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* Contact Section */}
        <Container id="contact" sx={{ py: 8 }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Get in Touch
            </Typography>
            <Typography>
              Email: <a href="mailto:justtry@gmail.com">justtry@gmail.com</a>
            </Typography>
            <Box mt={2}>
              <Button variant="outlined" startIcon={<DownloadIcon />} href="/Jeeva_Resume.pdf" download>
                Download My Resume
              </Button>
            </Box>
          </motion.div>
        </Container>

        {/* Floating Icons */}
        <Box position="fixed" bottom={20} right={20} display="flex" flexDirection="column" gap={1}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton color="primary" href="https://wa.me/91XXXXXXXXXX" target="_blank">
              <WhatsAppIcon fontSize="large" />
            </IconButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton color="primary" href="https://linkedin.com/in/yourprofile" target="_blank">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </motion.div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
