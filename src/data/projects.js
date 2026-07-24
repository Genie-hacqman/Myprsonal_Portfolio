// Data list of project items used by the projects section.

import imgExpense from '../assets/images/Expense Tracker.png';
import imgGeneric from '../assets/images/image.jpeg';
import imgStay from '../assets/images/stay ease.png';
import imgCarCommerce from '../assets/images/obolocar.png';

// Portfolio projects used throughout the site for the showcase and filtering views.
export const projects = [
  {
    title: 'Expense Tracker',
    description: 'A personal finance dashboard designed to make budgeting feel less stressful and more understandable.',
    image: imgExpense,
    techStack: ['python', 'pyinstaller', 'json'],
    github: 'https://github.com',
    liveDemo: 'https://example.com',
    category: 'App',
  },
  {
    title: 'StayEaseHotel website',
    description: 'A warm, modern hospitality landing page crafted with calm visuals and smooth storytelling.',
    image: imgStay,
    techStack: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com',
    liveDemo: 'https://delicate-shortbread-854515.netlify.app',
    category: 'website',
  },
  {
    title: 'Obolo Automobile',
    description: 'A project I’m currently building, focused on creating a polished automotive storefront experience with clarity, elegance, and easy browsing.',
    image: imgCarCommerce,
    techStack: ['React.js', 'Tailwind', 'Vite'],
    github: 'https://github.com',
    liveDemo: 'https://example.com',
    category: 'In Progress',
  },

];
