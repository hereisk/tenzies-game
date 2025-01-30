# Tenzies Game

Tenzies is a simple and fun dice game built using React. The goal of the game is to roll the dice until all of them have the same value. Players can "hold" dice to prevent them from being re-rolled.

## Features
- Roll dice to get matching values
- Click on dice to "hold" their value
- Confetti animation upon winning
- Accessible for screen readers
- Fully responsive UI

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/tenzies-game.git
   ```
2. Navigate to the project directory:
   ```sh
   cd tenzies-game
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
Tenzies-Game/
│-- src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Die.jsx
│   ├── index.css
│   ├── main.jsx
│-- package.json
│-- README.md
```

## How to Play
1. Click the **Roll** button to roll all dice.
2. Click on a die to hold its value.
3. Continue rolling until all dice have the same value.
4. When all dice match, you win! 🎉
5. Click **New Game** to start again.

## Technologies Used
- React.js
- JavaScript (ES6+)
- CSS3
- nanoid (for unique IDs)
- react-confetti (for winning animation)

## Accessibility
- Uses ARIA attributes for screen readers
- Focus shifts to the "New Game" button after winning
- Keyboard navigation friendly

## License
This project is licensed under the MIT License.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements
Inspired by the **Tenzies** dice game and built for learning React fundamentals.