import resume from "../media/others/DanNgoResume.pdf";

const Resume = () => (
    <iframe
        src={resume}
        loading="lazy"
        title="Dan Ngo Resume"
        className="w-full max-w-[90vw] md:max-w-[80vw] h-[124vh] mx-auto my-10 md:my-0"
    />
);

export default Resume;