import PortfolioWebsite from "./ProjectsContent/PortfolioWebsite/PortfolioWebsite";
import MealPlanner from "./ProjectsContent/MealPlanner/MealPlanner";
import TTTAndroidJava from "./ProjectsContent/TTTAndroidJava/TTTAndroidJava";
import DataScienceKnime from "./ProjectsContent/DataScienceKnime/DataScienceKnime";
import DBDesign from "./ProjectsContent/DBDesign/DBDesign";
import CSharpOOP from "./ProjectsContent/CSharpOOP/CSharpOOP";
import RubyMusicPlayer from "./ProjectsContent/RubyMusicPlayer/RubyMusicPlayer";
import WebBackEnd from "./ProjectsContent/WebsiteBackEnd/WebsiteBackEnd";
import WebFrontEnd from "./ProjectsContent/WebsiteFrontEnd/WebsiteFrontEnd";

const PROJECT_TYPE = ["University Project", "Personal Project", "Team Project"];
const CURRENT_DATE = new Date().toJSON().slice(0, 10);

const Projects = [
    
    {
        id: "meal-planner",
        title: "Meal Planner",
        type: PROJECT_TYPE[2],
        finished: false,
        date: CURRENT_DATE,
        introduction: "A team project developing a web application that allows users to choose a dish’s recipe with multiple types of information such as nutritional values, diet planning, recipe’s price based on location, etc",
        content: <MealPlanner />,
        url: "https://github.com/Renji-and-frens/meal-planner-frontend",
        featured: true,
    },

    {
        id: "portfolio-website",
        title: "Portfolio Website",
        type: PROJECT_TYPE[1],
        finished: false,
        date: CURRENT_DATE,
        introduction: "A full-stack MERN application serves as my portfolio website with basic functionalities such as Log In/Sign Up, like & comment for my project articles, etc.",
        content: <PortfolioWebsite />,
        url: "https://github.com/DanNgo4/Portfolio-Website-danngo.space",
        featured: true,
    },

    {
        id: "java-android-tic-tac-toe",
        title: "Tic Tac Toe Android Game in Java",
        type: PROJECT_TYPE[1],
        finished: true,
        date: "2024-06-25",
        introduction: "An Android-based Tic Tac Toe game application consisting of two main activities: MainActivity and GameActivity.",
        content: <TTTAndroidJava />,
        url: "https://github.com/DanNgo4/Java-Android-TicTacToe",
        featured: true
    },

    
    {
        id: "data-science-project-in-knime",
        title: "Data Cleaning and Analytics in Knime",
        type: PROJECT_TYPE[0],
        finished: true,
        date: "2024-05-10",
        introduction: "A project involves cleaning and preparing a dataset of 100,000 entries, and building Naïve Bayes and Random Forest models in KNIME for prediction.",
        content: <DataScienceKnime />,
        url: "https://github.com/DanNgo4/Data-Cleaning-and-Analytics-in-Knime",
        featured: false
    },

    {
        id: "sql-nosql-db-design",
        title: "SQL + NoSQL Database Design",
        type: PROJECT_TYPE[0],
        finished: true,
        date: "2023-11-06",
        introduction: "A project where I design a MySQL database in the first half, then migrate it to MongoDB in the second half to conduct some researches.",
        content: <DBDesign />,
        url: "https://github.com/DanNgo4/SQL-NoSQL-Database-Design",
        featured: false,
    },

    {
        id: "c-sharp-oop-game",
        title: "OOP Game in C#",
        type: PROJECT_TYPE[0],
        finished: true,
        date: "2023-11-05",
        introduction: "A simple game I created with C# and SplashKit library, using Object-Oriented Programming design principles.",
        content: <CSharpOOP />,
        url: "https://github.com/DanNgo4/C-Sharp-OOP-Game",
        featured: false,
    },

    {
        id: "ruby-music-player",
        title: "Ruby Music Player",
        type: PROJECT_TYPE[0],
        finished: true,
        date: "2023-06-04",
        introduction: "A simple music player developed using Ruby and the Gosu library. It provides a graphical user interface (GUI) for users to browse albums, select tracks, and control playback.",
        content: <RubyMusicPlayer />,
        url: "https://github.com/DanNgo4/Ruby-Music-Player",
        featured: false,
    },

    {
        id: "website-design-back-end",
        title: "Website Design (BackEnd)",
        type: PROJECT_TYPE[0],
        finished: true,
        date: "2023-06-01",
        introduction: "Second part extending the first uni project (Website Design (FrontEnd)). Our team with 4 members this time used PHP and MySQL database to implement the existing interface's backend.",
        content: <WebBackEnd />,
        url: "https://github.com/DanNgo4/Website-Designing-Part-2-Back-End",
        featured: false,
    },

    {
        id: "website-design-front-end",
        title: "Website Design (FrontEnd)",
        type: PROJECT_TYPE[0],
        finished: true,
        date: "2023-04-17",
        introduction: "This is a team project consists of 5 college students designing a website's Front End (using HTML and CSS only) for an imaginary tech company.",
        content: <WebFrontEnd />,
        url: "https://github.com/DanNgo4/Website-Designing-Part-1-Front-End",
        featured: false,
    },
];

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    
    return `${day < 10 ? '0' + day : day}-${date.toLocaleString("default", { month: "short" })}-${date.getFullYear()}`;
};

for (let p of Projects) {
    if (p.finished) {
        p.info = `Finished date: ${formatDate(p.date)}`;
    } else {
        p.info = "Status: In Progress";
    }
}

export default Projects;