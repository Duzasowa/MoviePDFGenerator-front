# Getting Started

## Available Scripts

In the project directory, you can run:

### `npm run start:local`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

For correct operation, it is necessary to have the “MoviePDFGenerator-back” server running on port 5000

## Project Structure

### `index.tsx`

The main entry point of the application, rendering the root component.

### `App.tsx`

The main application component setting up routing and layout.

### Pages

- `Home.tsx`: The homepage displaying a welcome message and link to the movies list.
- `MoviesList.tsx`: Displays a list of popular movies and generates a PDF.
- `MovieDetail.tsx`: Displays detailed information about a specific movie and generates a PDF.

### Components

- `Navbar.tsx`: The navigation bar component.
- `Footer.tsx`: The footer component.

## Configuration

To run the project, you need to create a `.env.local` file with the following environment variables:

- `REACT_APP_SERVER_URL`: The URL of the server-side application.

## Example Usage

1. **View the homepage**: Open [http://localhost:3000](http://localhost:3000) to see the welcome page.
2. **Fetch and display popular movies**: Navigate to `/movies` to view a list of popular movies and a generated PDF.
3. **View detailed movie information**: Click on a movie from the list to see detailed information and a generated PDF.
