# Game Seek

**Game Seek** is a comprehensive web application built using React and TypeScript that allows users to explore, search, and discover video games. The project aims to provide a smooth and responsive user experience with a modern interface, making it easy to find information about various games and dive deep into game details.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Search Functionality**: Quickly find games by title using the search bar.
- **Detailed Game Information**: View comprehensive details about each game, including description, release date, genre, platforms, screenshots, and more.
- **Filter and Sort**: Filter games by genre and platform, and sort results by relevance, popularity, release date, ratings, and more.
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices.
- **User-Friendly Interface**: Clean, intuitive UI/UX with dark mode support.
- **Game Trailers**: Watch game trailers directly within the app.
- **Genre Exploration**: Easily browse games by genre, with a convenient drawer menu on mobile devices.
- **Performance Optimized**: Implements efficient data fetching and caching for a smooth user experience.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rishi-0007/GameSeek.git
   cd GameSeek
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Add your RAWG.io API key**:

   - Navigate to the `src/services` folder.
   - Open the `api-client.ts` file.
   - Replace the placeholder API key with your own RAWG.io API key:
     ```typescript
     params: {
       key: "YOUR_RAWG.IO_API_KEY";
     }
     ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173/` to see the application in action.

## Usage

- **Search Games**: Use the search bar in the navigation to find games by name.
- **Filter by Genre and Platform**: Use the sidebar (on desktop) or the genre drawer (on mobile) to filter games by genre. Use the platform selector to filter by platform.
- **Sort Results**: Organize games using the sort selector, which includes options like relevance, popularity, release date, and ratings.
- **View Game Details**: Click on a game card to view detailed information, including description, release info, screenshots, and trailers.
- **Watch Trailers**: On the game details page, you can watch game trailers in the built-in video player.
- **Toggle Dark Mode**: Use the color mode switch in the navigation bar to toggle between light and dark modes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Chakra UI**: Component library for building accessible React applications.
- **React Query**: For efficient data fetching, caching, and state management.
- **React Router**: For handling routing within the application.
- **Axios**: Promise-based HTTP client for making API requests.
- **RAWG.io API**: Used for fetching game data, trailers, and other game-related information.

## Live Demo

You can check out the live version of Game Seek [here](https://gameseek.vercel.app/).

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, feel free to submit a pull request or open an issue in the repository.

## Contact

If you have any questions or feedback, you can reach me at:

- **GitHub**: [Rishi-0007](https://github.com/Rishi-0007)
- **Email**: rishikumarnayak9@gmail.com

---

Thank you for checking out Game Seek! We hope you enjoy exploring the world of video games through our application.
