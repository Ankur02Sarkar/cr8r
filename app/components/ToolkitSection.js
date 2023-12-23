import React from "react"

const ToolkitSection = () => {
    return (
        <section className="toolkit-container" id="toolkit">
            <h1>Our Toolkit</h1>
            <div className="toolkit-grid">
                <div className="pixel" data-aos="fade-up" ><p>Pixel Perfect Code</p></div>
                <div className="tech-apps" data-aos="fade-up" style={{ backgroundImage: `url('/assets/tech-stack.png')` }}><p>And Expanding</p></div>
                <div className="creative-apps" data-aos="fade-up" style={{ backgroundImage: `url('/assets/creative-apps.png')` }}></div>
                <div className="pallet" data-aos="fade-up"><p>Creative Pallet</p></div>
            </div>
        </section>
    );
}

export default ToolkitSection;