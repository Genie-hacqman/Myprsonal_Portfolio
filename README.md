# Myprsonal_Portfolio

A modern personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. It showcases projects, services, experience, and a contact form in a polished and responsive single-page experience.

## Features

- Responsive and modern landing page design
- Smooth animations and transitions
- Project showcase with filtering
- About, experience, and services sections
- Contact form integration with EmailJS
- Dark mode support

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons
- EmailJS

## Project Structure

- src/components - Reusable UI sections and layout pieces
- src/pages - Route-based pages such as Home, About, Projects, and Contact
- src/data - Content for projects, services, experience, and skills
- src/assets - Images and other static assets
- public - Static files such as the favicon

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will open locally in your browser at the Vite URL shown in the terminal.

### 3. Build for production

```bash
npm run build
```

## Customization

You can personalize the portfolio by editing:

- content in src/data
- sections in src/components
- branding and metadata in index.html

## Contact Form

The contact form uses EmailJS to send messages directly from the site.

### Required EmailJS configuration

Create a `.env` file in the project root and add your EmailJS public key:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

The contact component already uses:

- Service ID: `service_l8s1y3p`
- Template ID: `template_il38l1s`

If the public key is invalid, the form will show a clear error message and the browser console will include the EmailJS response.

## License

This project is open for personal and educational use.
