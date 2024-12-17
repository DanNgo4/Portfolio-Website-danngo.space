import ProjectFigure from "../../../../components/project-page/ProjectFigure";

import Figure1 from "./Figure1.png";
import Figure2 from "./Figure2.png";
import Figure3 from "./Figure3.gif";

const TTTAndroidJava = () => {
    return (
        <section>
            <p className="project-text">The MainActivity class serves as the entry point of the application. It presents the user with a simple UI to input player names and start the game. The UI is defined in the activity_main.xml layout file and includes: - TextViews for displaying static text, such as the title "Tic Tac Toe" and developer's name "Dan Ngo". - EditTexts for players to enter their names. - Button to start the game, which is linked to the startGame method. The startGame method retrieves the entered player names, packs them into an Intent, and starts the GameActivity. If no names are entered, defaults ("Player A" and "Player B") are used.</p>
            <ProjectFigure 
                src={Figure1} 
                alt="Tic Tac Toe game interface on Android" 
                title="Figure 1: Starting screen (Main Activity)" 
            />

            <p className="project-text">The GameActivity class is responsible for the core functionality of the Tic Tac Toe game. It includes the following elements: - TextViews for displaying player names and indicating the current turn. - GridLayout containing nine buttons representing the Tic Tac Toe grid. - Button to exit the game and return to MainActivity. The onCreate method initialises the game by setting player names from the Intent, setting up the grid buttons, and indicating whose turn it is. The initiateGame method links the grid buttons to the corresponding array elements.</p>
            <ProjectFigure 
                src={Figure2} 
                alt="Tic Tac Toe game interface design in Android Studio" 
                title="Figure 2: The game's interface design in activity_game.xml" 
            />

            <p className="project-text">The game logic is implemented in the gridClick method, which handles button clicks on the grid. This method checks if a grid cell is empty before marking it with "X" or "O" based on the current player's turn. It then checks for a win or a draw using the checkWin method. - checkWin: This method checks all rows, columns, and diagonals for three matching symbols indicating a win. - updateTurn: Updates the turn indicator. - showMessage: Displays a Toast message announcing the game's outcome. - restartGame: Resets the game state for a new round.</p>
            <ProjectFigure 
                src={Figure3} 
                alt="Tic Tac Toe game running on Android Studio's emulator" 
                title="Figure 3: The game's demo on emulator" 
            />

            <p className="project-text">In summary, this project showcases an interactive Tic Tac Toe game for Android, demonstrating fundamental concepts like UI design, event handling, and inter-activity communication using Intents. The game's logic is simple yet effective, providing a basic but complete user experience.</p>
        </section>
    );
};

export default TTTAndroidJava;