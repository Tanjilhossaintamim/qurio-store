# Qorio Store

## Description

This project is a modern web application that provides user authentication and enables users to add products to their shopping cart. The backend and frontend leverage various technologies and packages to create a seamless and secure user experience.

## Features

### User Authentication

- **Account Creation**: Users can register by creating a new account with a secure password. This feature allows new users to establish an identity within the system.
  
- **Login**: Existing users can securely log in, and passwords are hashed using bcrypt for enhanced security. This feature ensures that only authorized users can access their accounts.

- **JWT Integration**: JSON Web Tokens (JWT) are employed for authentication, ensuring secure and stateless user sessions. This feature helps in maintaining user sessions without the need for server-side storage.

### Shopping Cart Functionality

- **Product Addition**: Authenticated users can easily add products to their shopping cart. This feature provides a seamless way for users to collect items for purchase.

- **Persistent Cart Storage**: The cart data is securely stored and associated with the respective user, ensuring a seamless shopping experience. Even if users log out or revisit the site, their shopping cart items are retained.

## Backend Packages

- **bcrypt**: For secure password hashing.
- **cookie-parser**: Middleware to parse cookies.
- **cors**: Middleware for handling Cross-Origin Resource Sharing.
- **dotenv**: Module to load environment variables from a .env file.
- **express**: Web framework for Node.js.
- **http-errors**: Utility to create HTTP errors.
- **jsonwebtoken**: For generating and verifying JSON Web Tokens (JWT).
- **mongoose**: MongoDB object modeling for Node.js.
- **nodemailer**: Module for sending emails.

## Frontend Packages

- **@material-tailwind/react**: Provides Material Design components for a visually appealing and consistent UI.
- **@reduxjs/toolkit**: Offers a set of utilities for Redux, simplifying state management in React applications.
- **classnames**: A utility for conditionally joining class names together.
- **localforage**: Enables easy storage of key-value pairs in a client-side database.
- **match-sorter**: A package for sorting and filtering lists.
- **react**: The core library for building user interfaces in React applications.
- **react-dom**: React's package for working with the DOM.
- **react-helmet-async**: A library for dynamically changing the document head.
- **react-hook-form**: A library for managing forms and form state in React.
- **react-hot-toast**: A lightweight and customizable toast library for React applications.
- **react-icons**: A collection of SVG icons as React components.
- **react-lazy-load-image-component**: Provides lazy loading for images to improve performance.
- **react-redux**: The official React bindings for Redux, facilitating state management in React applications.
- **react-router-dom**: A declarative way to navigate through React applications.
- **sort-by**: A utility for sorting arrays based on one or more fields.
- **sweetalert2**: A beautiful, responsive, and customizable replacement for JavaScript pop-up boxes.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Tanjilhossaintamim/qurio-store.git
