# React Component Library

## Project Overview

For this assignment, I created a React component library using TypeScript. The goal was to practice building reusable components, passing data through props, and handling user interactions.

I created three components: AlertBox, UserProfileCard, and ProductDisplay. Each component has its own purpose and can be reused with different data.

## Technologies Used

- React
- TypeScript
- Vite
- CSS

## Components

### AlertBox

The AlertBox component displays messages based on the type of alert being used.

- Supports success, error, warning, and info messages.
- Accepts a message through props.
- Allows additional content using children.
- Includes an optional close button.

### UserProfileCard

The UserProfileCard component displays basic user information.

- Displays the user's name, email, and role.
- Supports an optional profile image.
- Allows the email and role to be hidden.
- Includes an optional Edit Profile button.
- Supports additional content using children.

### ProductDisplay

The ProductDisplay component displays product information.

- Displays the product name, price, and description.
- Supports an optional product image.
- Shows whether a product is in stock.
- Disables the Add to Cart button when a product is out of stock.
- Allows additional content using children.

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## What I Learned

This assignment gave me more practice working with React components and TypeScript. I'm still getting comfortable with how everything works together, especially passing props, defining interfaces, and using callback functions.

One thing I'm starting to understand is how components can be reused instead of writing the same code multiple times. I also got some practice with `useState` and how React updates the page when something changes.

I ran into a few issues with file paths, imports, and project configuration along the way. I had to go back through my files, correct the import paths, and troubleshoot build errors to get everything working properly.

I still need more practice with React and TypeScript, but working through this assignment helped me become more familiar with the structure of a React application and how the different pieces connect.

## Future Improvements

As I continue learning React and TypeScript, I'd like to come back to this project and improve it.

Some things I'd like to work on include:

- Adding more reusable components.
- Improving the styling and customization options.
- Learning how to write automated tests.
- Improving accessibility.
- Getting more comfortable creating React components from scratch.