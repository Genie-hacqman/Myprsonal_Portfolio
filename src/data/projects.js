// Data list of project items used by the projects section.

import imgExpense from '../assets/images/Expense Tracker.png';
import imgGeneric from '../assets/images/image.jpeg';
import imgStay from '../assets/images/stay ease.png';
import imgCarCommerce from '../assets/images/obolocar.png';

export const projects = [
  {
    title: 'Expense Tracker',
    description: 'A productivity dashboard for teams to manage tasks, analytics, and collaboration from one view.',
    image: imgExpense,
    techStack: ['python', 'pyinstaller', 'json'],
    github: 'https://github.com',
    liveDemo: 'https://example.com',
    category: 'Web App',
  },
  {
    title: 'StayEaseHotel website',
    description: 'A modern landing page for a creative agency with animated storytelling and motion-rich sections.',
    image: imgStay,
    techStack: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com',
    liveDemo: 'https://delicate-shortbread-854515.netlify.app',
    category: 'Landing Page',
  },
  {
    title: 'Obolo Automobile',
    description: 'An ecommerce UI concept with dynamic filtering, product previews, and seamless mobile interactions.',
    image: imgCarCommerce,
    techStack: ['React.js', 'Tailwind', 'Vite'  ],
    github: 'https://github.com',
    liveDemo: 'https://example.com',
    category: 'Ecommerce',
  },
//   {
//     title: 'Lumen Notes',
//     description: 'A clean note-taking experience with rich text editing and a distraction-free interface.',
//     image: imgStay,
//     techStack: ['React', 'Firebase', 'Tailwind'],
//     github: 'https://github.com',
//     liveDemo: 'https://example.com',
//     category: 'Productivity',
//   },
];
