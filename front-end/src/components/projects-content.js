const Projects = [
    {
        name: "portfolio-website",
        title: "Portfolio Website",
        content: [
            "My developing portfolio website using React.js and Tailwind CSS for FrontEnd so far, soon to start deploying Back End, Database and Mobile version.",
        ],
        url: "https://github.com/DanNgo4/Portfolio-Website-danngo.space",
        featured: false,
    },

    {
        name: "meal-planner",
        title: "Meal Planner",
        content: [
            "A team project developing a web application that allows users to choose a dish’s recipe with multiple types of information such as nutritional values, diet planning, recipe’s price based on location, etc"
        ],
        url: "https://github.com/DanNgo4/meal-planner-frontend",
        featured: true,
    },

    {
        name: "java-android-tic-tac-toe",
        title: "Tic Tac Toe Android Game in Java",
        content: [
            "An Android-based Tic Tac Toe game application consisting of two main activities: MainActivity and GameActivity.",
            "The MainActivity class serves as the entry point of the application. It presents the user with a simple UI to input player names and start the game. The UI is defined in the activity_main.xml layout file and includes: - TextViews for displaying static text, such as the title 'Tic Tac Toe' and developer's name 'Dan Ngo'. - EditTexts for players to enter their names. - Button to start the game, which is linked to the startGame method. The startGame method retrieves the entered player names, packs them into an Intent, and starts the GameActivity. If no names are entered, defaults ('Player A' and 'Player B') are used.",
            "The GameActivity class is responsible for the core functionality of the Tic Tac Toe game. It includes the following elements: - TextViews for displaying player names and indicating the current turn. - GridLayout containing nine buttons representing the Tic Tac Toe grid. - Button to exit the game and return to MainActivity. The onCreate method initializes the game by setting player names from the Intent, setting up the grid buttons, and indicating whose turn it is. The initiateGame method links the grid buttons to the corresponding array elements.",
            "The game logic is implemented in the gridClick method, which handles button clicks on the grid. This method checks if a grid cell is empty before marking it with 'X' or 'O' based on the current player's turn. It then checks for a win or a draw using the checkWin method. - checkWin: This method checks all rows, columns, and diagonals for three matching symbols indicating a win. - updateTurn: Updates the turn indicator. - showMessage: Displays a Toast message announcing the game's outcome. - restartGame: Resets the game state for a new round.",
            "In summary, this project showcases an interactive Tic Tac Toe game for Android, demonstrating fundamental concepts like UI design, event handling, and inter-activity communication using Intents. The game's logic is simple yet effective, providing a basic but complete user experience.",
        ],
        url: "https://github.com/DanNgo4/Java-Android-TicTacToe",
        featured: true
    },

    {
        name: "data-science-project-in-knime",
        title: "Data Cleaning and Analytics in Knime",
        content: [
            "A project involves cleaning and preparing a dataset of 100,000 entries, and building Naïve Bayes and Random Forest models in KNIME for prediction.",
        ],
        url: "https://github.com/DanNgo4/Data-Cleaning-and-Analytics-in-Knime",
        featured: true
    },

    {
        name: "c-sharp-oop-game",
        title: "OOP Game in C#",
        content: [
            "A simple game I created with C# and SplashKit library, using Object-Oriented Programming design principles.",
            
        ],
        url: "https://github.com/DanNgo4/C-Sharp-OOP-Game",
        featured: false,
    },

    {
        name: "sql-nosql-db-design",
        title: "SQL + NoSQL Database Design",
        content: [
            "A project where I design a MySQL database in the first half, then migrate it to MongoDB in the second half to conduct some researches."
        ],
        url: "https://github.com/DanNgo4/SQL-NoSQL-Database-Design",
        featured: false,
    },

    {
        name: "website-design-front-end",
        title: "Website Design (FrontEnd)",
        content: [
            "This is a team project consists of 5 college students designing a website's Front End (using HTML and CSS only) for an imaginary tech company."
        ],
        url: "https://github.com/DanNgo4/Website-Designing-Part-1-Front-End",
        featured: false,
    },

    {
        name: "website-design-back-end",
        title: "Website Design (BackEnd)",
        content: [
            "Second part extending the first uni project (Website Design (FrontEnd)). Our team with 4 members this time used PHP and MySQL database to implement the existing interface's backend."
        ],
        url: "https://github.com/DanNgo4/Website-Designing-Part-2-Back-End",
        featured: false,
    },

    {
        name: "ruby-music-player",
        title: "Ruby Music Player",
        content: [
            "A simple music player developed using Ruby and the Gosu library. It provides a graphical user interface (GUI) for users to browse albums, select tracks, and control playback."
        ],
        url: "https://github.com/DanNgo4/Ruby-Music-Player",
        featured: false,
    },
];

export default Projects;