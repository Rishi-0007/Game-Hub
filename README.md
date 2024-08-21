# Game Seek

**Game Seek** is a web application built using React and TypeScript that allows users to explore and search for video games. The project aims to provide a smooth and responsive user experience with a modern interface, making it easy to find information about various games.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Search Functionality**: Quickly find games by title.
- **Game Details**: View detailed information about each game, including description, release date, genre, and more.
- **Filter and Sort**: Filter games by genre and platform, and sort results by relevance, popularity, release date, ratings, and more.
- **Responsive Design**: Fully responsive design, optimized for both desktop and mobile devices.
- **User-Friendly Interface**: Clean and intuitive UI/UX.

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

   - Navigate to the `services` folder.
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

- **Search Games**: Use the search bar to find games by name.
- **Filter by Genre and Platform**: Narrow down your search by selecting specific genres or platforms.
- **Sort Results**: Organize games by relevance, popularity, release date, ratings, and more.
- **View Game Details**: Click on a game to view more details, including description, release information, and more.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Chakra UI**: Component library for building accessible React applications.
- **RAWG.io API**: Used for fetching game data and other queries.

## Live Demo

You can check out the live version of Game Seek [here](https://gameseek.vercel.app/).

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, feel free to submit a pull request or open an issue in the repository.

## Contact

If you have any questions or feedback, you can reach me at:

- **GitHub**: [Rishi-0007](https://github.com/Rishi-0007)
- **Email**: rishikumarnayak9@gmail.com

---

This version should better reflect the features and technologies of your project!
