import ProjectFigure from "../../../../components/project-page/ProjectFigure";

import Figure1 from "./Figure1.png";
import Figure2 from "./Figure2.png";

const DBDesign = () => {
    return (
        <section>
            <p className="project-text mb-2"><span className="font-semibold">In the first part,</span> I have created a relational database named “Classes,” inspired by the timetable at Swinburne University of Technology. The database contains seven entities, each storing various information about class sessions that a student might have. These entities are:</p>
            <ol className="list-decimal">
                <li>Convener: Stores personal information about a unit convener.</li>
                <li>Tutor: Stores personal information about a tutor.</li>
                <li>Student: Stores personal information about a student.</li>
                <li>Room: Stores information about a teaching room at the university.</li>
                <li>Unit: Child table of Convener, storing information about a unit at the university.</li>
                <li>Class: Child table of Unit, Room, and Tutor entities, containing information about a particular class at the university.</li>
                <li>Sessions: The weakest entity in the database, a child table of Class and Student tables, storing the enrollment of students into classes at the university.</li>
            </ol>
            <ProjectFigure src={Figure1} alt="A SQL database in UML diagram" title="Figure 1: UML entity diagram" />

            <p className="project-text mb-0">The relationships between the entities are as follows:</p>
            <ol className="list-decimal">
                <li>Convener – Unit: One convener can manage multiple units (1 to Many). Each unit is managed by one convener (1 to 1).</li>
                <li>Unit, Room, Tutor – Class: One unit, room, or tutor can be associated with multiple classes (1 to Many). Each class is associated with one unit, room, and tutor (1 to 1).</li>
                <li>Class, Student – Sessions: One class or student can be associated with multiple sessions (1 to Many). Each session is associated with one class and one student (1 to 1).</li>
            </ol>

            <p className="project-text mb-0">The database design follows normalisation principles (Up to 3NF) to ensure data integrity and reduce redundancy. It was populated with data, and various queries were were written using JOIN and GROUP operations to retrieve specific information from the database:</p>
            <ol className="list-decimal">
                <li>Query 1: Retrieves detailed information about class sessions with at least one student attending.</li>
                <li>Query 2: Retrieves tutors who have classes on Monday.</li>
                <li>Query 3: Retrieves all classes ordered by the number of attending students.</li>
                <li>Query 4: Retrieves the number of students enrolled in classes of each unit.</li>
                <li>Query 5: Retrieves the number of students that each tutor is teaching every week.</li>
            </ol>

            <p className="project-text"><span className="font-semibold">In the second part,</span> I used the custom database called “Classes”, which I implemented in the first part of my project. The aim is to migrate this database to a MongoDB database and compare the differences in data storage between the two DBMSs.</p>

            <p className="project-text">In terms of Data Migration, MySQL as a table-based system, organises data into structured tables, facilitating efficient data querying and searching. Creating entities and inserting data in MySQL requires adherence to strict rules regarding primary keys, foreign keys, and data integrity, ensuring a well-defined relational structure. Meanwhile MongoDB is a document-based non-relational DBMS, which provides greater flexibility in handling different types of data, such as unstructured or semi-structured data. Unlike MySQL, MongoDB does not impose strict ordering for creating tables and inserting data. Objects are stored in documents within collections, allowing for a more flexible and dynamic data model.</p>

            <p className="project-text">About Data Storage, Each individual record in MongoDB is stored as a document. These documents, which can contain embedded objects, belong to specific collections. The hierarchical structure of a MongoDB document can be more complex than a row in a MySQL table, allowing for nested data structures. In MySQL, records are stored as rows or tuples in structured tables. All records within a table adhere to the same schema, making data querying straightforward. MySQL's relational model ensures that data is organised in a consistent and predictable manner.</p>
            <ProjectFigure src={Figure2} alt="A JSON object representing a table" title="Figure 2: Example of an entity in JSON format" />

            <p className="project-text">Finally, comparing the data query performance of MySQL and MongoDB can be challenging due to their fundamentally different approaches to data organisation and querying. MySQL is Known for executing high-performance JOIN operations across multiple well-indexed tables, MySQL is efficient at handling complex queries involving multiple tables. While MongoDB supports similar functionality through the $lookup operation, its design philosophy typically minimises the need for joins. By organising data in a hierarchical model and embedding related data within a single document, MongoDB often reduces the necessity for cross-document joins, focusing instead on the flexibility and ease of accessing nested data.</p>

            <p className="project-text">To conclude, I have briefly compared MySQL, a relational database, with MongoDB, a non-relational database, using a database initially designed in MySQL. MongoDB offers greater flexibility in data storage, making it suitable for handling a variety of data types. However, this flexibility may come at the expense of some security and data integrity features inherent to the structured SQL databases like MySQL. The choice between these two powerful DBMSs depends on specific user requirements, organisational needs, and scenarios, highlighting their unique strengths in storing, sorting, and presenting data for software development.</p>
        </section>
    );
};

export default DBDesign;