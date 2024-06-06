import resume from "../images/DanNgoResume.pdf";

const MyDocument = () => (
    <iframe
        id="Resume"
        src={resume}
        width="80%"
        height="1125rem"
        loading="lazy"
        title="Dan Ngo Resume"
        style={{
            marginLeft: "10vw",
            marginBottom: "5rem"
        }}
    />
);

export default MyDocument;