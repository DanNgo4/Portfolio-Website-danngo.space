import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const FeedbackPage = () => {
    useEffect(() => {
        document.title = "Tell me what you think!";
    }, []);

    return (
        <main>
            <section class="FeedbackSection0">
                <h1>Heading</h1>
                <p>The form is currently only for display purposes. I haven't set up a database for it yet, so I'll see you later! ;&#41;</p>
                <p>For now if you have any feedbacks on my website please feel free to contact me through <HashLink to="/about#Social">social media</HashLink> platforms.</p>
                <br />
            </section>
        
            <article class="FormArticle0">
                <h2>Form Name</h2>
                <form id="feedback" method="POST">
                    <fieldset>
                        <legend>Personal Details</legend>

                        <p>
                            <label htmlFor="first">
                                First Name<span class="ast">*</span>
                            </label>
                            <input type="text" id="first" required="required" />
                        </p>

                        <p>
                            <label htmlFor="last">
                                Last Name<span class="ast">*</span>
                            </label>
                            <input type="text" id="last" required="required" />
                        </p>

                        <p>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" />
                        </p>

                        <p>
                            <label htmlFor="age">
                                Age<span class="ast">*</span>
                            </label>
                            <input type="number" id="age" required="required" />
                        </p>

                        <p>
                            <label htmlFor="nation">
                                Nationality<span class="ast">*</span>
                            </label>
                            <input type="text" id="nation" required="required" />
                        </p>
                    </fieldset>
                    <br />
                    
                    <fieldset>
                        <legend>Your Feedback</legend>

                        <section class="comment">
                            <label htmlFor="comment">Comment</label>
                            <textarea rows="10" cols="60" id="comment" placeholder="Tell me what you think about my website!" />
                        </section>

                        <p>
                            <label htmlFor="rating">
                                Rating<span class="ast">*</span>
                            </label>
                            <select id="rating" required="required" size="1">
                                <option value="" disabled selected hidden>Rate my Website!</option>
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

                    <section class="submit">
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                    </section>
                </form>
            </article>
        </main>
    );
};

export default FeedbackPage;