import imgExpense from '../assets/images/Expense Tracker.png';
import imgWalletTracker from '../assets/images/Wallet-Tracker.png';
import imgStay from '../assets/images/stay ease.png';
import imgCarCommerce from '../assets/images/obolocar.png';
import imgWeather from '../assets/images/weather.png';


export const projects = [
  {
    title: 'Expense Tracker',
    description: 'A personal finance dashboard that simplifies budgeting and expense tracking through desktop deployment. Built with Python, PyInstaller, and JSON storage to keep financial data organized and portable.',
    image: imgExpense,
    techStack: ['python', 'pyinstaller', 'json'],
    github: 'https://github.com/Genie-hacqman/expense-tracker',
    liveDemo: 'https://example.com',
    category: 'desktop App',
  },
  {
    title: 'StayEaseHotel website',
    description: 'A hospitality landing page that highlights hotel amenities and encourages bookings with a calm, polished design. Developed using React, TypeScript, and Tailwind for a responsive guest-facing experience.',
    image: imgStay,
    techStack: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Genie-hacqman/stay-ease',
    liveDemo: 'https://delicate-shortbread-854515.netlify.app',
    category: 'website',
  },
  {
    title: 'Obolo Automobile',
    description: 'An automotive storefront focused on presenting vehicles with polished navigation and clear browsing flows. Built with React.js, Tailwind, and Vite to deliver a fast, modern showroom experience.',
    image: imgCarCommerce,
    techStack: ['React.js', 'Tailwind', 'Vite'],
    github: 'https://github.com/Genie-hacqman/AutoMobile-showroom',
    liveDemo: 'https://example.com',
    category: 'In Progress',
  },

  {
    title: 'Weather App',
    description: 'A location-based weather dashboard providing current conditions and short-term forecasts with a clean, intuitive interface. Implemented in React and Tailwind CSS using the OpenWeatherMap API for live weather data.',
    image: imgWeather,
    techStack: ['React', 'Tailwind CSS', 'OpenWeatherMap API'],
    github: 'https://github.com/Genie-hacqman/WeatherApp',
    liveDemo: 'https://weather-app-topaz-theta-86.vercel.app/',
    category: 'website',
  },

  { 
    title: 'Wallet Tracker',
    description: 'A wallet management app that helps users monitor spending and maintain budgeting discipline. Built with React, Tailwind CSS, and shadcn-ui to deliver a polished, responsive personal finance experience.',
    image: imgWalletTracker,
    techStack: ['React', 'Tailwind CSS', 'shadcn-ui'],
    github: 'https://github.com/Genie-hacqman/wallet-Tracker-sys',
    liveDemo: 'https://example.com',
    category: 'In Progress',
  }








];
