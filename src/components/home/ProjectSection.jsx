import { BsArrowUpRight } from "react-icons/bs";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

export const Project = () => {
    return (
        <section className="project-section">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Lets Looks Our Global Projects</h2>
            </div>
            <div className="projects">
                <div className="project-and-cases">
                    <a className="project" href="#">
                        <img src={project1} alt="a man reading a business newspaper" />
                        <h3 className="border-bottom">Grow your business</h3>
                        <div className="read-more">Read more<BsArrowUpRight className="icon-left"/></div>
                    </a>
                    <a className="project" href="#">
                        <img src={project3} alt="pink apple products" />
                        <h3 className="border-bottom">Why your client needs a responsive website</h3>
                        <div className="read-more">Read more<BsArrowUpRight className="icon-left"/></div>
                    </a>
                    <a className="project" href="#">
                        <img src={project2} alt="a desk with desktop materials" />
                        <h3 className="border-bottom">Educate your employees to get better results</h3>
                        <div className="read-more">Read more<BsArrowUpRight className="icon-left"/></div>
                    </a>
                    <a className="project" href="#">
                        <img src={project4} alt="a laptop with a business chart" />
                        <h3 className="border-bottom">Business Insights is a important piece of your business</h3>
                        <div className="read-more">Read more<BsArrowUpRight className="icon-left"/></div>
                    </a>
                </div>
            </div>
            <div className="center-content">
                <a className="btn-black">All Recent Projects<BsArrowUpRight className="icon-left"/></a>
            </div>
        </div>
    </section>
    )
}

export default Project