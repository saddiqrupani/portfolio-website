import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Personal Portfolio",
        description: "A personal portfolio website to showcase my projects and skills.",
        image: "/projects/portfolio.png",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://saddiqrupani.com",
        githubUrl: "https://github.com/saddiqrupani/portfolio-website"
    },
    {
        id: 2,
        title: "NBA Predictor",
        description: "A script that predicts NBA game outcomes using machine learning.",
        image: "/projects/basketball.svg",
        tags: ["Python", "Pandas", "Numpy"],
        demoUrl: "https://github.com/saddiqrupani/NBA-Match-Predictor",
        githubUrl: "https://github.com/saddiqrupani/NBA-Match-Predictor"
    },
    {
        id: 3,
        title: "WanderSync",
        description: "An all in one travel planning app to help you organize and manage your trips seamlessly.",
        image: "/projects/wander.png",
        tags: ["Java", "Android Studio", "Firebase"],
        demoUrl: "https://github.com/NathanZheng02/CS2340-C_FAC_Team-9",
        githubUrl: "https://github.com/NathanZheng02/CS2340-C_FAC_Team-9"
    },
    {
        id: 4,
        title: "To-Do List",
        description: "A to-do list application built with React.",
        image: "/projects/todo.png",
        tags: ["React", "JavaScript", "CSS"],
        demoUrl: "https://to-do-gamma-sage.vercel.app/",
        githubUrl: "https://github.com/saddiqrupani/ToDo"
    }
];

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills and expertise.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((projects, key) => (
                    <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                        
                        <div className="h-48 overflow-hidden">
                            <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projects.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                        <h3 className="text-xl font-semibold mb-1">
                            {projects.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {projects.description}
                        </p>
                        <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={projects.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"> <ExternalLink size={20}/></a>
                                    <a href={projects.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"> <Github size={20}/></a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/saddiqrupani" target="_blank">
                    Check Out My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
};