import { Link } from "react-router-dom";
import ProjectFigure from "../../../../components/project-page/ProjectFigure";

import Figure1 from "./Figure1.gif";
import Figure2 from "./Figure2.gif";
import Figure3 from "./Figure3.gif";
import Figure4 from "./Figure4.png";
import Figure5 from "./Figure5.png";

const PortfolioWebsite = () => {
    return (
        <section>
            <p className="project-text">The Home Page welcomes visitors with a warm greeting and an introduction to myself. It features sections showcasing my journey in tech, insights from my studies, and my software projects. Visitors can explore highlighted projects, learn more about my background through an "About Me" section, and are invited to provide feedback or connect with me on social media. The design is responsive and visually engaging, making it easy for users to navigate and explore my work.</p>
            <ProjectFigure 
                src={Figure1} 
                alt="danngo.space's Home Page" 
                title={<>
                    Figure 1: <Link to="/" className="hyperlink">danngo.space's Home Page</Link>
                </>} 
            />

            <p className="project-text">About Page provides a detailed narrative of my personal and professional journey. It begins with my origins in Hanoi, Vietnam, where my fascination with technology started at a young age. It then follows my academic journey to Melbourne, Australia, where I am currently pursuing a Computer Science degree at Swinburne University of Technology. Visitors are also encouraged to connect with me through various social media platforms, with direct links provided for ease of access.</p>
            <ProjectFigure
                src={Figure2}
                alt="danngo.space's About Page"
                title={<>
                    Figure 2: <Link to="/about" className="hyperlink">danngo.space's About Page</Link>
                </>}
            />

            <p className="project-text">The Portfolio Page of my website showcases a gallery of my projects, highlighting various university, personal, and team projects I have worked on. It features a sorting functionality that allows visitors to filter projects by date, type, and status. Each project is presented with a brief description and is accessible via clickable links for more detailed information and its GitHub repository. The page also includes a section dedicated to my resume, providing a comprehensive overview of my academic and professional achievements.</p>
            <ProjectFigure
                src={Figure3}
                alt="danngo.space's Portfolio Page"
                title={<>
                    Figure 3: <Link to="/portfolio" className="hyperlink">danngo.space's Portfolio</Link>
                </>}
            />

            <p className="project-text">The Log In/Sign Up pages allow my website's visitors to interact using <Link to="https://firebase.google.com/docs/auth" target="_blank" className="hyperlink">Firebase Auth API</Link>. Once logged in, user would be able to upvote or comment on any of my <Link to="/portfolio" className="hyperlink">projects</Link></p>
            <ProjectFigure
                src={Figure4}
                alt="danngo.space's Project Page before logging in"
                title={<>
                    Figure 4: Before loggin in
                </>}
            />
            <ProjectFigure
                src={Figure5}
                alt="danngo.space's Project Page after logging in"
                title={<>
                    Figure 5: After logging in
                </>}
            />
        </section>
    )
};

export default PortfolioWebsite;