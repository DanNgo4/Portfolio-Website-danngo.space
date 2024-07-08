import ProjectFigure from "../../../../components/ProjectFigure";

import Figure1 from "./Figure1.png";
import Figure2 from "./Figure2.png";
import Figure3 from "./Figure3.png";
import Figure4 from "./Figure4.png";

const DataScienceKnime = () => {
    return (
        <section>
            <p className="project-text">Key lessons: cleaning the dataset based on provided instructions,  dividing the dataset into training and test sets, building and evaluating Naïve Bayes and Random Forrest models.</p>

            <p className="project-text">In the data cleaning phase, I worked with 100,000 entries of "dirty data" with the goal of cleaning it for modeling purposes.</p>
            <ProjectFigure src={Figure1} alt={"Dirty dataset with 100,000 entries"} title={"Figure 1: Original Dataset"} />

            <p className="project-text">Using various KNIME nodes such as File Reader, Column Filter, Missing Value, Rule-based Row Filter, String Manipulation, String To Number, Math Formula, Cell Splitter, Numeric Binner, and Feature Selection Loop Start (1:1), nearly 20,000 entries were filtered out, and the remaining data was properly manipulated into the desired formats.</p>
            <ProjectFigure src={Figure2} alt={"A Knime workflow"} title={"Figure 2: Project's workflow in Knime"} className="mb-[1rem]"/>
            <ProjectFigure src={Figure3} alt={"Cleaned dataset"} title={"Figure 3: Cleaned Dataset"} />

            <p className="project-text">In the predicting phase, Naïve Bayes and Random Forest predictive models were built to predict the "Credit_Score" class of the dataset and were compared to each other.</p>
            <ProjectFigure src={Figure4} alt={"Naïve Bayes and Random Forest Models in Knime"} title={"Figure 4: Naïve Bayes and Random Forest Leaners and Predictors"}/>

            <p className="project-text">In summary, this Data Science project demonstrates the process of transforming raw data into actionable insights through data cleaning, modeling, and evaluation, thereby enhancing predictive modeling skills.</p>
        </section>
    );
};

export default DataScienceKnime;