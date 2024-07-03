const DataScienceKnime = () => {
    return (
        <section>
            <p className="project-text">Key lessons: cleaning the dataset based on provided instructions,  dividing the dataset into training and test sets, building and evaluating Naïve Bayes and Random Forrest models.</p>

            <p className="project-text">In the data cleaning phase, I worked with 100,000 entries of \"dirty data\" with the goal of cleaning it for modeling purposes. Using various KNIME nodes such as File Reader, Column Filter, Missing Value, Rule-based Row Filter, String Manipulation, String To Number, Math Formula, Cell Splitter, Numeric Binner, and Feature Selection Loop Start (1:1), nearly 20,000 entries were filtered out, and the remaining data was properly manipulated into the desired formats.</p>

            <p className="project-text">In the predicting phase, Naïve Bayes and Random Forest predictive models were built to predict the \"Credit_Score\" class of the dataset and were compared to each other.</p>

            <p className="project-text">In summary, this Data Science project demonstrates the process of transforming raw data into actionable insights through data cleaning, modeling, and evaluation, thereby enhancing predictive modeling skills.</p>
        </section>
    );
};

export default DataScienceKnime;