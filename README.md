# Wylo Responsive Web Application

This project is a responsive web application developed using ReactJS. It allows users to create and edit posts with image uploads using the imgbb API. The application uses Redux for state management and includes theme toggling functionality.

## Setup and Installation

1. Ensure you have Node.js installed.
2. Clone the repository:
   
        git clone https://github.com/Bharani0012/post-app

Navigate to the project directory:

    cd wylo-responsive-web-app

Install dependencies:

    npm install

Start the development server:


    npm start

Components
PostItem Component

This component handles the display of each post on the screen. It includes an option to edit the post.
PostsDisplay Component

This is the main component that displays all the posts. It retrieves and shows a list of post items.
CreatePost Component

This component includes a form for creating new posts. It handles input fields for post details such as title and content.
State Management

The application uses Redux for state management. There are two slices:

    Post Slice: Manages the posts' data across the application.
    Theme Slice: Manages the theme toggling functionality.

Form Handling

    Form inputs are validated before allowing users to submit.

API Interaction

    fetch is used to interact with the imgbb API for image uploads.
    API responses are handled and the state is updated accordingly.

Editing Posts

The logic for editing a post includes showing the current post's data in the form and saving the changes.
Deployment

The application can be deployed using platforms like Heroku or Netlify. Ensure the backend API (if any) is accessible to the frontend.
Technologies Used

    ReactJS
    Redux
    react-icons
    Bootstrap
    imgbb API
