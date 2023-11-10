import project1 from "../../../assets/project1.png";
import project2 from "../../../assets/project2.png";
import project3 from "../../../assets/project3.png";
import project4 from "../../../assets/project4.png";
import Button from "../../Generics/Button";
import Project from "./Project";

const ProjectSection = () => {
    const projects = [
        {
            img: project1,
            alt: "project 1",
            title: "Grow your business",
            buttonText: "Read more",
        },
        {
            img: project3,
            alt: "project 3",
            title: "Why your client needs a responsive website",
            buttonText: "Read more",        
        },
        {
            img: project2,
            alt: "project 2",
            title: "Educate your employees to get better results",
            buttonText: "Read more",        
        },
        {
            img: project4,
            alt: "project 4",
            title: "Business Insights is a important piece of your business",
            buttonText: "Read more",        
        }
    ]
    return (
        <section className="project-section">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Lets Looks Our Global Projects</h2>
            </div>
            <div className="projects">
                <div className="project-and-cases">
                   
                   {
                          projects.map((project, index) => {
                            return (
                                <Project key={index} img={project.img} alt={project.alt} title={project.title} buttonText={project.buttonText} />
                            )
                          })
                   }
                    
                </div>
            </div>
            <div className="center-content">
                <Button color="black" text="All Recent Projects" url="/projects" />
            </div>
        </div>
    </section>
    )
}

export default ProjectSection;