export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    <div className="flex justify-center">
                        <img 
                            src="/me.jpg" 
                            alt="Saddiq Rupani" 
                            className="rounded-2xl shadow-lg max-w-xs"
                        />
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Tech Student & Problem Solver
                        </h3>

                        <p className="text-muted-foreground">
                            I’m a Computer Science student at Georgia Tech who enjoys solving problems with code and building things that make an impact.
                        </p>

                        <p className="text-muted-foreground">
                            I’m currently exploring areas like automation, data analytics, and AI, and I enjoy learning new technologies along the way.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="/resume.pdf" download="Saddiq_Rupani_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};