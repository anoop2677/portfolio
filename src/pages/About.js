import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { 
  Typography, 
  Box, 
  Divider,
  Link as MuiLink
} from '@mui/material';

import Main from '../layouts/Main';
import { PageHeader, PageContainer } from '../components/common';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => {
  const [markdown, setMarkdown] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load the markdown file from the public directory
    fetch(`${process.env.PUBLIC_URL}/about.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch markdown');
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text);
        setCount(text.split(/\s+/)
          .map((s) => s.replace(/\W/g, ''))
          .filter((s) => s.length).length);
      })
      .catch((error) => console.error('Error fetching markdown:', error));
  }, []);

  return (
    <Main
      title="About"
      description="Learn about Anoop Kumar"
    >
      <PageContainer id="about">
        <PageHeader 
          title="About Me" 
          path="/about" 
          subtitle={`(in about ${count} words)`}
        />
        <Box sx={{ typography: 'body1' }}>
          <ReactMarkdown
            children={markdown}
            components={{
              a: LinkRenderer,
              h1: (props) => <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, fontWeight: 'bold' }} {...props} />,
              h2: (props) => <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3, fontWeight: 'bold' }} {...props} />,
              p: (props) => <Typography variant="body1" paragraph {...props} />,
              ul: (props) => <Box component="ul" sx={{ pl: 2, mb: 2 }} {...props} />,
              li: (props) => <Box component="li" sx={{ mb: 1 }} {...props} />
            }}
            skipHtml={false}
          />
        </Box>
      </PageContainer>
    </Main>
  );
};

export default About;
