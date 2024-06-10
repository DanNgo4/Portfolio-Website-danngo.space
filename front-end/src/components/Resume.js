import resume from "../images/DanNgoResume.pdf";

const MyDocument = () => (
    <iframe
        id="Resume"
        src={resume}
        loading="lazy"
        title="Dan Ngo Resume"
        /* style={{
            marginLeft: "10vw",
            marginBottom: "5rem",
            width: "80vw",
            height: "124vh"
        }} */
        className="w-full max-w-[80vw] h-auto md:h-[124vh] mx-auto my-10 md:my-0"
    />
);

export default MyDocument;