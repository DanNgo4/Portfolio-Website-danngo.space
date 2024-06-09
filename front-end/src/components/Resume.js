import resume from "../images/DanNgoResume.pdf";

const MyDocument = () => (
    <iframe
        id="Resume"
        src={resume}
        loading="lazy"
        title="Dan Ngo Resume"
        style={{
            marginLeft: "10vw",
            marginBottom: "5rem",
            width: "80vw",
            height: "124vh"
        }}
    />
);

export default MyDocument;