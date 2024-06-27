import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const FeedbackPage = () => {
    useEffect(() => {
        document.title = "Tell me what you think!";
    }, []);

    return (
        <main className="mx-4">
            <section className="text-center my-10">
                <h1 className="font-bold text-4xl">Heading</h1>
                <p>The form is currently only for display purposes. I haven't set up a database for it yet, so I'll see you later! ;&#41;</p>
                <p>For now if you have any feedbacks on my website please feel free to contact me through <HashLink to="/about#Social" className="underline text-blue-500">social media</HashLink> platforms.</p>    
            </section>
        
            <article>
                <h2 className="font-bold text-2xl text-center">Form Name</h2>
                <form id="feedback" method="POST" className="FormArticle0 grid grid-row-3 justify-center">
                    <fieldset className="feedback-fieldset">
                        <legend className="text-left">Personal Details</legend>

                        <p className="grid grid-cols-3">
                            <label htmlFor="first">
                                First Name<span className="text-red-500">*</span>
                            </label>
                            <input type="text" id="first" required className="feedback-input-box"/>
                        </p>

                        <p className="mt-5 grid grid-cols-3">
                            <label htmlFor="last" >
                                Last Name<span className="text-red-500">*</span>
                            </label>
                            <input type="text" id="last" required className="feedback-input-box"/>
                        </p>

                        <p className="mt-5 grid grid-cols-3">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" className="feedback-input-box"/>
                        </p>

                        <p className="mt-5 grid grid-cols-3">
                            <label htmlFor="age">
                                Age<span className="text-red-500">*</span>
                            </label>
                            <input type="number" id="age" required className="feedback-input-box"/>
                        </p>
                    </fieldset>
                    <br />

                    <fieldset className="feedback-fieldset">
                        <legend>Your Feedback</legend>

                        <section className="comment grid grid-cols-3">
                            <label htmlFor="comment">Comment</label>
                            <textarea rows="8" cols="50" id="comment" placeholder="Tell me what you think about my website!" className="col-span-2 mb-10 border border-solid rounded border-black p-2"/>
                        </section>

                        <p className="grid grid-cols-3">
                            <label htmlFor="rating">
                                Rating<span className="text-red-500">*</span>
                            </label>
                            <select id="rating" required size="1" className="border boder-solid rounded border-black">
                                <option value="" defaultValue disabled>Rate my Website!</option>
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </p>
                    </fieldset>

                    <section className="submit text-center">
                        <input type="submit" value="Submit" className="feedback-action-btn"/>
                        <input type="reset" value="Reset" className="feedback-action-btn"/>
                    </section>
                </form>
            </article>
        </main>
    );
};

export default FeedbackPage;