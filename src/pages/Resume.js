import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stack, 
  Button,
  Link as MuiLink,
  Box,
  Paper,
  Typography,
  Divider,
  useTheme
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecommendIcon from '@mui/icons-material/Recommend';

import Main from '../layouts/Main';
import { PageHeader, PageContainer } from '../components/common';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Summary from '../components/Resume/Summary';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import summary from '../data/resume/summary';
import { skills, categories } from '../data/resume/skills';

/**
 * Resume sections configuration
 * Each section object can have the following properties:
 * - id: Unique identifier for the section (used for navigation)
 * - label: Display text for the section
 * - icon: Material UI icon component
 * - color: Custom color for the section
 * - description: Short description of the section
 * - count: Number of items in the section (optional)
 * - featured: Whether this section should be highlighted (optional)
 */
const sections = [
  { 
    id: 'summary', 
    label: 'Summary', 
    icon: <DescriptionIcon fontSize="small" />,
    color: '#3498db', // Blue
    description: 'Professional overview and key skills',
    featured: true
  },
  { 
    id: 'experience', 
    label: 'Experience', 
    icon: <WorkIcon fontSize="small" />,
    color: '#2ecc71', // Green
    description: 'Work history and achievements',
    count: positions.length
  },
  { 
    id: 'education', 
    label: 'Education', 
    icon: <SchoolIcon fontSize="small" />,
    color: '#9b59b6', // Purple
    description: 'Academic background',
    count: degrees.length
  },
  { 
    id: 'skills', 
    label: 'Skills', 
    icon: <CodeIcon fontSize="small" />,
    color: '#e74c3c', // Red
    description: 'Technical and professional competencies',
    count: Object.keys(categories).length
  },
  { 
    id: 'courses', 
    label: 'Courses', 
    icon: <MenuBookIcon fontSize="small" />,
    color: '#f39c12', // Orange
    description: 'Additional training and certifications',
    count: courses.length
  },
  { 
    id: 'references', 
    label: 'References', 
    icon: <RecommendIcon fontSize="small" />,
    color: '#1abc9c', // Turquoise
    description: 'Professional recommendations'
  },
];

/**
 * Resume component - The resume page of the application
 * 
 * @returns {React.ReactElement} The Resume component
 */
const Resume = () => {
  const theme = useTheme();

  const sectionButtons = (
    <Paper 
      elevation={1} 
      sx={{ 
        p: 1.5, 
        mb: 3, 
        borderRadius: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #3498db, #2ecc71, #9b59b6, #e74c3c, #f39c12, #1abc9c)',
          borderRadius: '2px 2px 0 0'
        }
      }}
    >
      <Typography 
        variant="subtitle1" 
        sx={{ 
          mb: 1, 
          fontWeight: 600, 
          color: 'text.primary',
          textAlign: 'center',
          fontSize: '0.9rem'
        }}
      >
        Jump to Section
      </Typography>
      <Divider sx={{ mb: 1.5 }} />
      <Box 
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 0.75
        }}
      >
        {sections.map((section) => {
          // Create a custom color with transparency for the button background
          const bgColor = `${section.color}15`; // 15% opacity
          const borderColor = `${section.color}40`; // 40% opacity
          const hoverBgColor = `${section.color}25`; // 25% opacity

          return (
            <Button
              key={section.id}
              component={MuiLink}
              href={`#${section.id}`}
              variant={section.featured ? "contained" : "outlined"}
              size="small"
              startIcon={section.icon}
              title={section.description}
              sx={{ 
                m: 0.25,
                px: 1,
                py: 0.5,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.85rem',
                borderRadius: 1.5,
                backgroundColor: section.featured ? section.color : 'transparent',
                borderColor: section.featured ? section.color : borderColor,
                color: section.featured ? 'white' : section.color,
                boxShadow: section.featured ? `0 2px 4px ${bgColor}` : 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: section.featured ? section.color : bgColor,
                  borderColor: section.color,
                  transform: 'translateY(-1px)',
                  boxShadow: `0 3px 6px ${bgColor}`,
                }
              }}
            >
              {section.label}
              {section.count !== undefined && (
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: 0.5,
                    minWidth: '18px',
                    height: '18px',
                    borderRadius: '9px',
                    backgroundColor: section.featured ? 'rgba(255,255,255,0.3)' : `${section.color}20`,
                    color: section.featured ? 'white' : section.color,
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    lineHeight: 1,
                    padding: '0 4px'
                  }}
                >
                  {section.count}
                </Box>
              )}
            </Button>
          );
        })}
      </Box>
    </Paper>
  );

  return (
    <Main
      title="Resume"
      description="Anoop Kumar's Resume."
    >
      <PageContainer id="resume">
        <PageHeader 
          title={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DescriptionIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="h4" component="span" fontWeight="bold">
                Resume
              </Typography>
            </Box>
          }
          path="/resume" 
        />

        {sectionButtons}

        <Box sx={{ 
          position: 'relative'
        }}>
          {/* Pass the section color to each component */}
          <Summary 
            data={summary} 
            color={sections.find(s => s.id === 'summary')?.color} 
          />
          <Experience 
            data={positions} 
            color={sections.find(s => s.id === 'experience')?.color} 
          />
          <Education 
            data={degrees} 
            color={sections.find(s => s.id === 'education')?.color} 
          />
          <Skills 
            skills={skills} 
            categories={categories} 
            color={sections.find(s => s.id === 'skills')?.color} 
          />
          <Courses 
            data={courses} 
            color={sections.find(s => s.id === 'courses')?.color} 
          />
          <References 
            color={sections.find(s => s.id === 'references')?.color} 
          />
        </Box>
      </PageContainer>
    </Main>
  );
};

export default Resume;
