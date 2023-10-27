class Game {
    constructor() {
        this.canvas = document.getElementById('game2Canvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.gameActive = true;

        // Define the shapes (example rectangles here)

        // Initialize click counts for Player 1 and Player 2
        this.player1ClickCount = 0;
        this.player2ClickCount = 0;

        // Get references to the count elements
        this.count1Element = document.getElementById('count1');
        this.count2Element = document.getElementById('count2');

        // Start game loop
        this.update();

        // Get references to the popup and its content
        this.popup = document.getElementById('popup');
        /*this.popupContent = document.getElementById('popup-content');*/
        this.winnerElement = document.getElementById('winner');

        // Handle keyboard input
        document.addEventListener('keydown', (e) => this.handleInput(e));

        // Add event listener to "END GAME" button
        const endButton = document.getElementById('end');
        endButton.addEventListener('click', () => this.endGame());
    }

    // Function to update the game
    update() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the rectangles

        // Implement your game logic here

        // Update the click count display
        this.updateClickCountDisplay();

        // Request the next frame
        requestAnimationFrame(() => this.update());
    }

    // Handle keyboard input
    handleInput(e) {
        // Handle keyboard input here
        if (this.gameActive) {
            if (e.key === 'f') {
                // Increment Player 1's click count when 'f' is pressed
                this.player1ClickCount++;
            } else if (e.key === 'j') {
                // Increment Player 2's click count when 'j' is pressed
                this.player2ClickCount++;
            }
        }
    }

    // Function to update the display of click counts
    updateClickCountDisplay() {
        this.count1Element.textContent = `Player 1 Click Count: ${this.player1ClickCount}`;
        this.count2Element.textContent = `Player 2 Click Count: ${this.player2ClickCount}`;
    }

    // Function to end the game
    endGame() {
        this.gameActive = false;

        // Determine the winner based on click counts
        let winner;
        if (this.player1ClickCount > this.player2ClickCount) {
            winner = 'Player 1';
        } else if (this.player2ClickCount > this.player1ClickCount) {
            winner = 'Player 2';
        } else {
            winner = 'No one'; // Handle a tie if needed
        }

        // Show the popup with the winner
        this.winnerElement.textContent = winner;
        this.popup.style.display = 'block';

        // Close the popup after 10 seconds
        setTimeout(() => {
            this.popup.style.display = 'none';
        }, 7000);
    }
}

// Create a new instance of the Game class
const game = new Game();
