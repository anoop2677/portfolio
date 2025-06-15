/**
 * Navigation routes configuration
 * Each route object can have the following properties:
 * - label: Display text for the navigation link
 * - path: URL path for the route
 * - icon: Material UI icon name (optional)
 * - description: Short description of the page (optional)
 * - color: Custom color for the route (optional)
 * - highlight: Whether to highlight this route (optional)
 */
const routes = [
  {
    label: 'Resume',
    path: '/resume',
    icon: 'Description',
    description: 'View my professional experience',
    color: '#2ecc71',
    highlight: true,
  },
  // {
  //   label: 'Projects',
  //   path: '/projects',
  //   icon: 'Code',
  //   description: 'See my portfolio of work',
  //   color: '#e74c3c',
  // },
  {
    label: 'Stats',
    path: '/stats',
    icon: 'BarChart',
    description: 'View my personal statistics',
    color: '#9b59b6',
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: 'Email',
    description: 'Get in touch with me',
    color: '#f39c12',
  },
];

export default routes;
