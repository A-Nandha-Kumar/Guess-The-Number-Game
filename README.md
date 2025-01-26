# Guess the Number Game

Guess the Number Game is an interactive web-based number guessing game where users try to guess a randomly generated number between 1 and 100. The game provides feedback if the guess is too high, too low, or correct.

## Features
- **Random Number Generation**: A random number between 1 and 100 is generated at the start of the game.
- **User Input**: Players can input their guesses.
- **Feedback Mechanism**:
  - Displays "Too High" if the guess is greater than the random number.
  - Displays "Too Low" if the guess is less than the random number.
  - Displays "Correct" if the guess matches the random number.
- **Dynamic Styling**:
  - Feedback text is shown with a background color: 
    - Blue for incorrect guesses.
    - Green for correct guesses.

## Technologies Used
- **HTML**: For structuring the webpage.
- **CSS**: For styling and layout.
- **JavaScript**: For handling the game logic and interactivity.
- **Bootstrap**: For responsive design and styling.

## How to Play
1. Open the `index.html` file in a modern web browser.
2. Enter your guess (a number between 1 and 100) in the input field.
3. Click the "Check" button to submit your guess.
4. Read the feedback:
   - "Too High" means your guess is larger than the random number.
   - "Too Low" means your guess is smaller than the random number.
   - "Correct" means you've guessed the number!

## Customization
- Modify the `style.css` file to update the styles for the feedback text, input field, or button.
- Edit the `script.js` file to:
  - Change the range of the random number.
  - Add a reset button to start a new game without refreshing the page.
  - Limit the number of attempts a user can make.

## Future Enhancements
- Add a reset button for restarting the game.
- Display the number of attempts made by the user.
- Include sound effects for feedback responses.
- Add a timer to challenge players to guess the number within a certain time limit.

## Credits
- **Bootstrap**: For responsive design.
- **Google Fonts**: For typography.
- **Random Number Logic**: Handled by JavaScript.

---

Enjoy playing **Guess the Number Game**!
