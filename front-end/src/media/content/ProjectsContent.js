const Projects = [
    {
        name: "portfolio-website",
        title: "Portfolio Website",
        content: [
            "My developing portfolio website using React.js and Tailwind CSS for FrontEnd so far, soon to start deploying Back End, and Database.",

            "The Home Page welcomes visitors with a warm greeting and an introduction to myself. It features sections showcasing my journey in tech, insights from my studies, and my software projects. Visitors can explore highlighted projects, learn more about my background through an \"About Me\" section, and are invited to provide feedback or connect with me on social media. The design is responsive and visually engaging, making it easy for users to navigate and explore my work.",

            "The About Page provides a detailed narrative of my personal and professional journey. It begins with my origins in Hanoi, Vietnam, where my fascination with technology started at a young age. It then follows my academic journey to Melbourne, Australia, where I am currently pursuing a Computer Science degree at Swinburne University of Technology. Visitors are also encouraged to connect with me through various social media platforms, with direct links provided for ease of access.",

            "The Portfolio Page of my website showcases a gallery of my projects, highlighting various university, personal, and team projects I have worked on. Each project is presented with a brief description and is accessible via clickable links for more detailed information and its GitHub repository. The page also includes a section dedicated to my resume, providing a comprehensive overview of my academic and professional achievements.",
            /* The page features a sorting functionality that allows visitors to filter projects by date, type, and status. */

            "The Feedback Page invites visitors to share their thoughts and opinions on the site. Although the form is currently for display purposes only, it includes fields for personal details and feedback, such as first name, last name, email, age, comments, and a rating. Visitors are encouraged to contact me through social media platforms for feedback. The page demonstrates a structured and user-friendly interface, showcasing my attention to detail and commitment to enhancing user interaction."
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
            "The MainActivity class serves as the entry point of the application. It presents the user with a simple UI to input player names and start the game. The UI is defined in the activity_main.xml layout file and includes: - TextViews for displaying static text, such as the title \"Tic Tac Toe\" and developer's name \"Dan Ngo\". - EditTexts for players to enter their names. - Button to start the game, which is linked to the startGame method. The startGame method retrieves the entered player names, packs them into an Intent, and starts the GameActivity. If no names are entered, defaults (\"Player A\" and \"Player B\") are used.",
            "The GameActivity class is responsible for the core functionality of the Tic Tac Toe game. It includes the following elements: - TextViews for displaying player names and indicating the current turn. - GridLayout containing nine buttons representing the Tic Tac Toe grid. - Button to exit the game and return to MainActivity. The onCreate method initialises the game by setting player names from the Intent, setting up the grid buttons, and indicating whose turn it is. The initiateGame method links the grid buttons to the corresponding array elements.",
            "The game logic is implemented in the gridClick method, which handles button clicks on the grid. This method checks if a grid cell is empty before marking it with \"X\" or \"O\" based on the current player's turn. It then checks for a win or a draw using the checkWin method. - checkWin: This method checks all rows, columns, and diagonals for three matching symbols indicating a win. - updateTurn: Updates the turn indicator. - showMessage: Displays a Toast message announcing the game's outcome. - restartGame: Resets the game state for a new round.",
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

            "Key lessons: cleaning the dataset based on provided instructions,  dividing the dataset into training and test sets, building and evaluating Naïve Bayes and Random Forrest models.",

            "In the data cleaning phase, I worked with 100,000 entries of \"dirty data\" with the goal of cleaning it for modeling purposes. Using various KNIME nodes such as File Reader, Column Filter, Missing Value, Rule-based Row Filter, String Manipulation, String To Number, Math Formula, Cell Splitter, Numeric Binner, and Feature Selection Loop Start (1:1), nearly 20,000 entries were filtered out, and the remaining data was properly manipulated into the desired formats.",

            "In the predicting phase, Naïve Bayes and Random Forest predictive models were built to predict the \"Credit_Score\" class of the dataset and were compared to each other.",

            "In summary, this Data Science project demonstrates the process of transforming raw data into actionable insights through data cleaning, modeling, and evaluation, thereby enhancing predictive modeling skills."
        ],
        url: "https://github.com/DanNgo4/Data-Cleaning-and-Analytics-in-Knime",
        featured: true
    },

    {
        name: "c-sharp-oop-game",
        title: "OOP Game in C#",
        content: [
            "A simple game I created with C# and SplashKit library, using Object-Oriented Programming design principles.",

            "The game's called ”Half Super Mario”, where there’s a hero (player) fighting with enemies, bugs and rescuing a princess. When the game is started, it will prompt the player to enter the player’s name, this is for storing the player’s record when the game is over",

            "A player (Hero) has some atributes such as HP, Armour, Score, can move forward, backward and jump. Hero also has a Weapon (either a Sword or a Bow), by default it is a Sword.",

            "A Bug or an Enemy is automatically spawned from the right side of the screen, moving towards the player. An Enemy has a Staff as its Weapon and can automatically spawn Fireballs to atack the player. If Hero is hit by a Bug, it loses 10 HP or 10 Armour if it has Armour, this value is 15 if the Hero is hit by a Fireball. The Fireball/Bug will disappear if it hits the Hero, the player will not earn any points from hiding a Bug that makes it disappear. Hero can use its Weapon to destroy these obstacles. Sword can destroy Bugs and Fireballs with 1 hit, but it needs to hit an Enemy twice to kill it. When an Enemy dies, all Fireballs that it has launched will disappear as well. The player will earn 5 points when killed a Bug and 10 points when killed an Enemy. Hero having Bow as its Weapon can launch Arrows to atack the opponents. An Arrow can kill a Bug, but it will be destroyed if hit by a Fireball. Unlike a Sword, an Arrow can kill an Enemy by 1 hit.",

            "When the player’s Score hits 100, a Princess trapped in a Cage will appear, meaning the player’s mission now is to destroy the Cage and rescue the Princess. The Cage can only be hit by a Sword and Hero has to hit it 10 times to rescue the Princess. When the Princess is rescued, it will follow the Hero to enter the Final Round of the game, which is player has to achieve 300 points to win the game. A Princess also has a Weapon, which is a Wand that can randomly launch Spells for the Hero.",

            "When the player wins or loses (HP <= 0), the game will pause, prompt a message as above, along with the 5 most recent scores of the game including the current one, containing the players’ name and score. These records are stored in a text file by the program.",

            "In summary, this game was designed to implement the 4 basic principles of Object Oriented Programming paradigm, with heavy concentrations on Inheritance and Polymorphism."
        ],
        url: "https://github.com/DanNgo4/C-Sharp-OOP-Game",
        featured: false,
    },

    {
        name: "sql-nosql-db-design",
        title: "SQL + NoSQL Database Design",
        content: [
            "A project where I design a MySQL database in the first half, then migrate it to MongoDB in the second half to conduct some researches.",

            "In the first part, I have created a relational database named “Classes,” inspired by the timetable at Swinburne University of Technology. The database contains seven entities, each storing various information about class sessions that a student might have. These entities are:",
            "Convener: Stores personal information about a unit convener.",
            "Tutor: Stores personal information about a tutor.",
            "Student: Stores personal information about a student.",
            "Room: Stores information about a teaching room at the university.",
            "Unit: Child table of Convener, storing information about a unit at the university.",
            "Class: Child table of Unit, Room, and Tutor entities, containing information about a particular class at the university.",
            "Sessions: The weakest entity in the database, a child table of Class and Student tables, storing the enrollment of students into classes at the university.",

            "The relationships between the entities are as follows:",
            "Convener – Unit: One convener can manage multiple units (1 to Many). Each unit is managed by one convener (1 to 1).",
            "Unit, Room, Tutor – Class: One unit, room, or tutor can be associated with multiple classes (1 to Many). Each class is associated with one unit, room, and tutor (1 to 1).",
            "Class, Student – Sessions: One class or student can be associated with multiple sessions (1 to Many). Each session is associated with one class and one student (1 to 1).",

            "The database design follows normalisation principles (Up to 3NF) to ensure data integrity and reduce redundancy. It was populated with data, and various queries were were written using JOIN and GROUP operations to retrieve specific information from the database:",
            "Query 1: Retrieves detailed information about class sessions with at least one student attending.",
            "Query 2: Retrieves tutors who have classes on Monday.",
            "Query 3: Retrieves all classes ordered by the number of attending students.",
            "Query 4: Retrieves the number of students enrolled in classes of each unit.",
            "Query 5: Retrieves the number of students that each tutor is teaching every week.",

            "In the second part, I used the custom database called “Classes”, which I implemented in the first part of my project. The aim is to migrate this database to a MongoDB database and compare the differences in data storage between the two DBMSs.",

            "In terms of Data Migration, MySQL as a table-based system, organises data into structured tables, facilitating efficient data querying and searching. Creating entities and inserting data in MySQL requires adherence to strict rules regarding primary keys, foreign keys, and data integrity, ensuring a well-defined relational structure. Meanwhile MongoDB is a document-based non-relational DBMS, which provides greater flexibility in handling different types of data, such as unstructured or semi-structured data. Unlike MySQL, MongoDB does not impose strict ordering for creating tables and inserting data. Objects are stored in documents within collections, allowing for a more flexible and dynamic data model.",

            "About Data Storage, Each individual record in MongoDB is stored as a document. These documents, which can contain embedded objects, belong to specific collections. The hierarchical structure of a MongoDB document can be more complex than a row in a MySQL table, allowing for nested data structures. In MySQL, records are stored as rows or tuples in structured tables. All records within a table adhere to the same schema, making data querying straightforward. MySQL's relational model ensures that data is organised in a consistent and predictable manner.",

            "Finally, comparing the data query performance of MySQL and MongoDB can be challenging due to their fundamentally different approaches to data organisation and querying. MySQL is Known for executing high-performance JOIN operations across multiple well-indexed tables, MySQL is efficient at handling complex queries involving multiple tables. While MongoDB supports similar functionality through the $lookup operation, its design philosophy typically minimises the need for joins. By organising data in a hierarchical model and embedding related data within a single document, MongoDB often reduces the necessity for cross-document joins, focusing instead on the flexibility and ease of accessing nested data.",

            "To conclude, I have briefly compared MySQL, a relational database, with MongoDB, a non-relational database, using a database initially designed in MySQL. MongoDB offers greater flexibility in data storage, making it suitable for handling a variety of data types. However, this flexibility may come at the expense of some security and data integrity features inherent to the structured SQL databases like MySQL. The choice between these two powerful DBMSs depends on specific user requirements, organisational needs, and scenarios, highlighting their unique strengths in storing, sorting, and presenting data for software development."
        ],
        url: "https://github.com/DanNgo4/SQL-NoSQL-Database-Design",
        featured: false,
    },

    {
        name: "website-design-front-end",
        title: "Website Design (FrontEnd)",
        content: [
            "This is a team project consists of 5 college students designing a website's Front End (using HTML and CSS only) for an imaginary tech company.",
            "For further descriptions please view the GitHub repository including the pdf report file and demonstration video"
        ],
        url: "https://github.com/DanNgo4/Website-Designing-Part-1-Front-End",
        featured: false,
    },

    {
        name: "website-design-back-end",
        title: "Website Design (BackEnd)",
        content: [
            "Second part extending the first uni project (Website Design (FrontEnd)). Our team with 4 members this time used PHP and MySQL database to implement the existing interface's backend.",
            "For further descriptions please view the GitHub repository including the pdf report file and demonstration video"
        ],
        url: "https://github.com/DanNgo4/Website-Designing-Part-2-Back-End",
        featured: false,
    },

    {
        name: "ruby-music-player",
        title: "Ruby Music Player",
        content: [
            "A simple music player developed using Ruby and the Gosu library. It provides a graphical user interface (GUI) for users to browse albums, select tracks, and control playback.",

            "Graphical User Interface (GUI): The GUI presents album artwork and track information to users. Users can interact with the interface using mouse clicks to select albums and tracks.",

            "Album Selection: Users can browse through available albums displayed on the screen. Each album is represented by its artwork, and users can click on an album to view its tracks.",

            "Track Selection and Playback: Users can select individual tracks from an album to play. Playback controls allow users to play, pause, skip to the next or previous track, and replay the current track.",

            "Volume Control: The player includes volume control functionality, allowing users to adjust the volume level of the currently playing track. Users can mute/unmute the audio and increase/decrease the volume using dedicated buttons.",

            "Dependencies: The project relies on the Gosu library, which provides a simple interface for creating 2D games and applications in Ruby.",

            "User Interface: The GUI is built using Gosu's drawing capabilities, allowing for the display of album artwork, track names, and playback controls.",

            "Album and Track Information: Album data is read from an external text file (albums.txt), which contains information such as album title, artist, release year, genre, and track names. Track information is displayed dynamically based on the selected album.",

            "Interaction Handling: User interactions, such as mouse clicks, are handled to enable album and track selection, as well as playback control. Track selection triggers the loading and playback of the chosen track.",

            "Playback Control: Playback controls, including play/pause, volume adjustment, and track navigation, are implemented to provide users with control over the music playback experience.",

            "Conclusion: This music player project demonstrates the use of Ruby and the Gosu library to create a basic graphical interface for music playback. It provides users with an intuitive way to explore albums, select tracks, and control playback, offering a simple yet functional music listening experience."
        ],
        url: "https://github.com/DanNgo4/Ruby-Music-Player",
        featured: false,
    },
];

export default Projects;