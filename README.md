

# usecontext

A React application demonstrating the use of Context API for state management. This project showcases how to share data between components without prop drilling, using React's built-in Context API.

## Project Overview

This application allows users to input data through a form and displays the submitted entries in a visually appealing card layout. The data flows from the form component to the display component using React Context, eliminating the need for prop passing between parent and child components.

## Project Overview
https://usecontext-react.vercel.app/

Key features include:
- Form submission with name and coin values
- Real-time display of submitted entries using Context API
- Responsive UI with gradient effects and animations
- Modern card-based design for data presentation

## Key Features

- **Context API Implementation**: Uses React's Context API to manage and share state between components
- **State Management**: Efficiently handles form data and list state without prop drilling
- **Responsive Design**: Mobile-friendly layout using CSS classes
- **Modern UI Components**: Gradient borders, hover effects, and smooth transitions
- **Component Architecture**: Clean separation of concerns with dedicated form and list components

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Konete326/usecontext.git
Navigate to the project directory:
bash
cd usecontext
Install dependencies:
bash
npm install
Usage Guidelines
Start the development server:
bash
npm start
This will run the app in development mode. Open http://localhost:3000 to view it in your browser.
Build for production:
bash
npm run build
This builds the app for production to the build folder.
Run tests:
bash
npm test
Launches the test runner in interactive watch mode.
Project Structure
src/
├── App.js          # Main application component
├── context.js      # Context API setup
├── create.js       # Form component for data input
├── list.js         # Component for displaying submitted data
├── create.css      # Styles for the form component
└── ...
Deployment Details
This project is configured for deployment on Vercel with the following settings:
Framework Preset: Create React App
Build Command: npm run build
Output Directory: build
Install Command: npm install
Live demo available at: https://usecontext-react.vercel.app/
Technologies Used
React 19.2.0
Create React App (react-scripts 5.0.1)
JavaScript (ES6+)
CSS3 for styling
Learn More
You can learn more in the Create React App documentation.To learn React, check out the React documentation.

This README provides a comprehensive overview of your React Context API project, including project details, installation instructions, usage guidelines, and deployment information specific to your application.
