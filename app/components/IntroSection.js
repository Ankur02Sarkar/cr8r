import React from "react"

const IntroSection = () => {
    return (
        <section>
            <div className="home-container" id="home">
                <div className="flex justify-center items-center">
                    <div className="profile-glow"></div>
                    <div className="profile-container">
                        <img src="/assets/cr8r-logo.png" alt='CR8R' />
                    </div>
                </div>
                <div
                    className="home-text"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    <h1>CR8R</h1>
                    <p>Web developer, Game designer and UI/UX enthusiast who loves to create breathtaking experiences</p>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;