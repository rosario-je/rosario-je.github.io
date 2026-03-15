import heroImage from '../assets/jose_picture.jpeg'
import colabFeed from '../assets/colab/CoLab_Feed_page.jpg'
import colabProject from '../assets/colab/CoLab_Project_page.jpg'
import colabRequests from '../assets/colab/requests.jpg'
import storytellingA from '../assets/placeholders/storytelling.svg'
import storytellingB from '../assets/placeholders/storytelling-alt.svg'
import meAndDog from '../assets/me/me_and_dog.jpeg'
import meCanoeing from '../assets/me/me_canoeing.jpeg'
import meAndMother from '../assets/me/me_and_mother.jpeg'
import meSnowboarding from '../assets/me/me_snowboarding.jpeg'

export const profile = {
  name: 'Jose Eduardo',
  location: 'Toronto, Ontario, Canada',
  title: 'Full Stack Developer',
  tagline:
    'Full-Stack Developer passionate about creating strong, scalable and beautiful applications',
  altTagline:
    'I build clean, responsive web apps with React — and I love turning messy problems into smooth user experiences.',
  heroImage,
  heroImageAlt: 'Jose Eduardo portrait',
  aboutGallery: [
    { src: meAndDog, alt: 'Me and my doggo' },
    { src: meAndMother, alt: 'On a walk with my mom!' },
    { src: meCanoeing, alt: 'Conoeing!!' },
    { src: meSnowboarding, alt: 'Me snowboarding for the first time!' },
  ],
  heroHighlights: [
    'React-first frontend developer',
    'Product-minded UI/UX focus',
    'Full-stack project experience',
  ],
  about:
    'Hello! I’m a full-stack software developer based in Toronto, Canada. I’ve been drawn to building things for as long as I can remember, influenced early on by family members working in tech and engineering.\n\nBefore transitioning into software, I worked as an architectural technologist, collaborating with engineers to design and document buildings. Creativity and problem-solving have always been central to my background — from taking art lessons with my grandmother, an artist, to developing an appreciation for construction and structure through my grandfather, a civil engineer. Architecture became the natural intersection of those worlds.\n\nAfter graduating and working in the field, I realized I wanted to create solutions people could interact with and enjoy in the digital space. Encouraged by family and friends in tech, I began learning to code in 2022. Since then, I’ve been focused on sharpening and learning skills, and building thoughtful, reliable software that turns ideas into real, usable products.',
  email: 'jose.payampsrosario@outlook.com',
  links: {
    github: 'https://github.com/rosario-je',
    linkedin: 'https://www.linkedin.com/in/joseeduardopayamps/',
  },
  sections: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  projects: [
    {
      slug: 'colab',
      title: 'CoLab Collaborative Platform',
      role: 'Full-stack Developer',
      description:
        'Colab is a collaborative platform that allows developers to create, join, and manage programming projects. Users can discover projects, collaborate with team members, and effectively manage project details.',
      featureList: [
        'Create project posts with a title, description, member limit, and key links.',
        'Browse and search a live project feed, including search by technology.',
        'Request to join projects with owner approvals and team messaging.',
        'Live chat for project members to collaborate in real time.',
      ],
      images: [colabFeed, colabProject, colabRequests],
      highlights: [],
      stack: [
        'React',
        'TailwindCSS',
        'DaisyUI',
        'Express',
        'PostgreSQL',
        'Supabase',
        'JWT',
        'Socket.IO',
      ],
      links: {
        github: 'https://github.com/rosario-je/CoLab',
      },
    },
    {
      slug: 'plot-twist',
      title: 'Plot Twist',
      role: 'Full-stack Developer',
      description:
        'Plot Twist is a web application where users can co-create stories. Unleash your creativity and embark on unexpected narrative journeys with others!',
      images: [storytellingA, storytellingB],
      featureList: [
        'User authentication and session management for secure access.',
        'Story listing and discovery feed on the homepage.',
        'Contribution system for adding narrative twists to ongoing stories.',
        'Story creation flow for authenticated users to start new collaborations.',
        'Story completion lifecycle and collective creation flow.',
      ],
      stack: [
        'JavaScript',
        'EJS',
        'SCSS',
        'jQuery',
        'NodeJS',
        'ExpressJS',
        'PostgreSQL',
        'Git',
      ],
      links: {
        github: 'https://github.com/rosario-je/Plot-Twist',
      },
    },
  ],
  skills: {
    groups: [
      {
        title: 'Frontend & UI',
        items: [
          { name: 'React', deviconClass: 'devicon-react-original' },
          { name: 'JavaScript', deviconClass: 'devicon-javascript-plain' },
          { name: 'HTML5', deviconClass: 'devicon-html5-plain' },
          { name: 'CSS3', deviconClass: 'devicon-css3-plain' },
          { name: 'Tailwind', deviconClass: 'devicon-tailwindcss-plain' },
        ],
      },
      {
        title: 'Backend & Databases',
        items: [
          { name: 'Node.js', deviconClass: 'devicon-nodejs-plain' },
          { name: 'Python', deviconClass: 'devicon-python-plain' },
          { name: 'REST APIs' },
        ],
      },
      {
        title: 'Cloud',
        items: [
          { name: 'AWS', deviconClass: 'devicon-amazonwebservices-plain' },
          { name: 'Serverless' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { name: 'Git', deviconClass: 'devicon-git-plain' },
          { name: 'GitHub', deviconClass: 'devicon-github-original' },
        ],
      },
    ],
  },
}
