# Tic-Tac-Toe Game


This is a simple implementation of a Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3x3 grid, aiming to achieve three marks in a row, column, or diagonal.

### Usage

To use the Tic-Tac-Toe game:

1. Open the HTML file (`index.html`) in a web browser.
2. The game board will be displayed, consisting of a 3x3 grid of clickable boxes.
3. Click on any empty box to mark it with either "O" or "X", alternating between players.
4. The game automatically detects when a player has won or if the game ends in a draw.
5. Use the "New Game" button to start a new game, or the "Reset" button to clear the current game and start over.

### Files

- **index.html**: Contains the structure of the Tic-Tac-Toe game.
- **styles.css**: Defines the styles and layout for the game elements.
- **script.js**: Implements the game logic and functionality using JavaScript.

### JavaScript Functions

- **resetGame()**: Resets the game board and winner display to start a new game.
- **handlePlayerMove(box)**: Handles a player's move by marking the clicked box with their symbol ("O" or "X").
- **checkWinner()**: Checks if any player has won the game by matching three marks in a row, column, or diagonal.
- **checkDraw()**: Checks if the game ends in a draw by verifying if all boxes are filled.
- **displayWinner(winnerName)**: Displays the winner or "Draw" message on the screen and disables further clicks on the boxes.

### CSS Styles

The CSS file (`styles.css`) defines the visual appearance of the game elements, including the grid layout, box styling, button styling, and responsive design for different screen sizes.

### Cloning the Repository

To clone this repository to your local machine, use the following command in your terminal or command prompt:

```
git clone https://github.com/inaveed-git/Tic-Tac-Toe-Game.git
```

Once cloned, you can navigate to the directory and open the `index.html` file in your web browser to play the game.

### Enjoy playing Tic-Tac-Toe!

Feel free to explore and modify the code to customize the game according to your preferences or add additional features. Have fun playing Tic-Tac-Toe with your friends!