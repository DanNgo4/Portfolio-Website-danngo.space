const FeedbackPage = () => (
    <>
        <section class="FeedbackSection0">
        <h1>Your Say!</h1>
        <p>aldbbgasbsdg;abbsdgb</p><br />
        </section>

        <main>
            <article class="FormArticle0">
                <h2>Form Name</h2>
                <form id="feedback" method="POST">
                    <fieldset>
                        <legend>Personal Details</legend>

                        <p><label for="first">First Name<span class="ast">*</span></label>
                            <input type="text" id="first" required="required" />
                        </p>

                        <p><label for="last">Last Name<span class="ast">*</span></label>
                            <input type="text" id="last" required="required" />
                        </p>

                        <p><label for="email">Email</label>
                            <input type="email" id="email" />
                        </p>

                        <p><label for="age">Age<span class="ast">*</span></label>
                            <input type="number" id="age" required="required" />
                        </p>

                        <p><label for="nation">Nationality<span class="ast">*</span></label>
                            <input type="text" id="nation" required="required" />
                        </p>
                    </fieldset>
                    <br />
                    
                    <fieldset>
                    <legend>Your Feedback</legend>
                        <div class="comment">
                            <label for="comment">Comment</label>
                            <textarea rows="10" cols="60" id="comment" placeholder="Tell me what you think about my website!" />
                        </div>

                        <p><label for="rating">Rating<span class="ast">*</span></label>
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

                    <div class="submit">
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                    </div>
                </form>
            </article>
        </main>
    </>
);

export default FeedbackPage;