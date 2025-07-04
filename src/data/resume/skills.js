// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Java/Spring',
    competency: 4,
    category: ['Web Development', 'DS ALGORITHM', 'Languages'],
  },
  {
    title: 'React/Apollo Client/RTK Query',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases', 'NoSQL'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Selenium/JUnit',
    competency: 3,
    category: ['Testing'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'GoLang',
    competency: 2,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['DevOps', 'Cloud'],
  },
  {
    title: 'Terraform',
    competency: 3,
    category: ['DevOps', 'Infrastructure as Code'],
  },
  {
    title: 'Grafana',
    competency: 3,
    category: ['DevOps', 'Monitoring'],
  },
  {
    title: 'Harness/Jenkins',
    competency: 3,
    category: ['DevOps', 'CI/CD'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
