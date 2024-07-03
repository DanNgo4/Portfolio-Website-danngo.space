const DBDesign = () => {
    return (
        <section>
            <p className="project-text">In the first part, I have created a relational database named “Classes,” inspired by the timetable at Swinburne University of Technology. The database contains seven entities, each storing various information about class sessions that a student might have. These entities are:</p>

            <p className="project-text">Convener: Stores personal information about a unit convener.</p>

            <p className="project-text">Tutor: Stores personal information about a tutor.</p>

            <p className="project-text">Student: Stores personal information about a student.</p>

            <p className="project-text">Room: Stores information about a teaching room at the university.</p>

            <p className="project-text">Unit: Child table of Convener, storing information about a unit at the university.</p>

            <p className="project-text">Class: Child table of Unit, Room, and Tutor entities, containing information about a particular class at the university.</p>

            <p className="project-text">Sessions: The weakest entity in the database, a child table of Class and Student tables, storing the enrollment of students into classes at the university.</p>

            <p className="project-text">The relationships between the entities are as follows:</p>

            <p className="project-text">Convener – Unit: One convener can manage multiple units (1 to Many). Each unit is managed by one convener (1 to 1).</p>

            <p className="project-text">Unit, Room, Tutor – Class: One unit, room, or tutor can be associated with multiple classes (1 to Many). Each class is associated with one unit, room, and tutor (1 to 1).</p>

            <p className="project-text">Class, Student – Sessions: One class or student can be associated with multiple sessions (1 to Many). Each session is associated with one class and one student (1 to 1).</p>

            <p className="project-text">The database design follows normalisation principles (Up to 3NF) to ensure data integrity and reduce redundancy. It was populated with data, and various queries were were written using JOIN and GROUP operations to retrieve specific information from the database:</p>

            <p className="project-text">Query 1: Retrieves detailed information about class sessions with at least one student attending.</p>

            <p className="project-text">Query 2: Retrieves tutors who have classes on Monday.</p>

            <p className="project-text">Query 3: Retrieves all classes ordered by the number of attending students.</p>

            <p className="project-text">Query 4: Retrieves the number of students enrolled in classes of each unit.</p>

            <p className="project-text">Query 5: Retrieves the number of students that each tutor is teaching every week.</p>

            <p className="project-text">In the second part, I used the custom database called “Classes”, which I implemented in the first part of my project. The aim is to migrate this database to a MongoDB database and compare the differences in data storage between the two DBMSs.</p>

            <p className="project-text">In terms of Data Migration, MySQL as a table-based system, organises data into structured tables, facilitating efficient data querying and searching. Creating entities and inserting data in MySQL requires adherence to strict rules regarding primary keys, foreign keys, and data integrity, ensuring a well-defined relational structure. Meanwhile MongoDB is a document-based non-relational DBMS, which provides greater flexibility in handling different types of data, such as unstructured or semi-structured data. Unlike MySQL, MongoDB does not impose strict ordering for creating tables and inserting data. Objects are stored in documents within collections, allowing for a more flexible and dynamic data model.</p>

            <p className="project-text">About Data Storage, Each individual record in MongoDB is stored as a document. These documents, which can contain embedded objects, belong to specific collections. The hierarchical structure of a MongoDB document can be more complex than a row in a MySQL table, allowing for nested data structures. In MySQL, records are stored as rows or tuples in structured tables. All records within a table adhere to the same schema, making data querying straightforward. MySQL's relational model ensures that data is organised in a consistent and predictable manner.</p>

            <p className="project-text">Finally, comparing the data query performance of MySQL and MongoDB can be challenging due to their fundamentally different approaches to data organisation and querying. MySQL is Known for executing high-performance JOIN operations across multiple well-indexed tables, MySQL is efficient at handling complex queries involving multiple tables. While MongoDB supports similar functionality through the $lookup operation, its design philosophy typically minimises the need for joins. By organising data in a hierarchical model and embedding related data within a single document, MongoDB often reduces the necessity for cross-document joins, focusing instead on the flexibility and ease of accessing nested data.</p>

            <p className="project-text">To conclude, I have briefly compared MySQL, a relational database, with MongoDB, a non-relational database, using a database initially designed in MySQL. MongoDB offers greater flexibility in data storage, making it suitable for handling a variety of data types. However, this flexibility may come at the expense of some security and data integrity features inherent to the structured SQL databases like MySQL. The choice between these two powerful DBMSs depends on specific user requirements, organisational needs, and scenarios, highlighting their unique strengths in storing, sorting, and presenting data for software development.</p>
        </section>
    );
};

export default DBDesign;