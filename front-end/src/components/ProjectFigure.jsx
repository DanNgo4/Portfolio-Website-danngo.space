const ProjectFigure = ({src, alt, title, className}) => {
    return (
        <div className={`mb-8 flex flex-col justify-center items-center ${className}`}>
            <img 
                src={src}
                alt={alt}
                className="md:w-[80%]"
                loading="lazy" 
            />
            <h3 className="font-bold text-center">{title}</h3>
        </div>
    );
};

export default ProjectFigure;