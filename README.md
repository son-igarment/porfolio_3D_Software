# Phạm Lê Ngọc Sơn - 3D Portfolio

A modern, responsive 3D portfolio website showcasing Phạm Lê Ngọc Sơn's skills, experience, and projects. This application features stunning 3D graphics, smooth animations, and an interactive user interface.

![Portfolio Preview](preview.png)

## Features

- **Interactive 3D Elements** - Engaging 3D models and animations powered by Three.js
- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI/UX** - Beautiful, intuitive interface with smooth transitions
- **Contact Form** - Functional contact form with EmailJS integration
- **Project Showcase** - Dedicated section to highlight personal projects
- **Experience Timeline** - Vertical timeline showing professional experience
- **Skills Showcase** - Interactive display of technical skills
- **Testimonials** - Section for client and colleague testimonials

## Project Structure

```
/
├── public/              # Public assets
├── src/                 # Source files
│   ├── assets/          # Images and static assets
│   │   ├── canvas/      # 3D canvas components
│   │   │   ├── Ball.jsx           # 3D balls for tech stack
│   │   │   ├── Computers.jsx      # 3D computer model
│   │   │   ├── Earth.jsx          # 3D earth model for contact section
│   │   │   ├── Stars.jsx          # Stars background
│   │   │   └── index.js           # Canvas components exports
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form with EmailJS
│   │   ├── Experience.jsx # Work experience timeline
│   │   ├── Feedbacks.jsx  # Testimonials section
│   │   ├── Hero.jsx       # Hero section with 3D elements
│   │   ├── Loader.jsx     # Loading component
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Tech.jsx       # Technologies/skills section
│   │   ├── Works.jsx      # Projects showcase
│   │   └── index.js       # Component exports
│   ├── constants/        # Constant data
│   │   └── index.js      # Project data (experience, projects, etc.)
│   ├── hoc/              # Higher-order components
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   ├── main.jsx          # Entry point
│   └── styles.js         # Shared styles
├── .gitignore           # Git ignore file
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── postcss.config.cjs   # PostCSS configuration
├── tailwind.config.cjs  # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React.js** - Frontend library for building user interfaces
- **Three.js** - 3D graphics library for creating and animating 3D models
- **Framer Motion** - Animation library for React
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email sending service for the contact form
- **React Router** - Routing library for React
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Vite** - Modern frontend build tool

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio_3D_Software.git
cd portfolio_3D_Software
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables for EmailJS
Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

## Customization

### Personal Information
Edit the content in `src/constants/index.js` to update:
- Navigation links
- Services offered
- Technical skills
- Work experience
- Testimonials
- Projects

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Each component file
- Tailwind configuration: `tailwind.config.cjs`

### 3D Models
Custom 3D models can be added or modified in the `src/components/canvas` directory.

## Deployment

This project can be deployed to any static site hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS Amplify

## Credits

- 3D Models: [SketchFab](https://sketchfab.com/)
- Icons: Various sources credited in the code
- Images: Various sources credited in the code

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Phạm Lê Ngọc Sơn - [phamlengocsonemail@example.com](mailto:phamlengocsonemail@example.com)

Project Link: [https://github.com/yourusername/portfolio_3D_Software](https://github.com/yourusername/portfolio_3D_Software) 