import team1 from "../../assets/Team1.png"
import team2 from "../../assets/Team2.png"
import team3 from "../../assets/Team3.png"
import team4 from "../../assets/Team4.png"
import customer1 from "../../assets/customer1.png"
import customer2 from "../../assets/customer2.png"
import customer3 from "../../assets/customer3.png"
import stars from "../../assets/Stars.svg"
import Button from "../Generics/Button"

export const TeamSection = () => {
    return (
        <section className="team-section">
            <div className="container">
                <div className="section-title">
                    <div className="title">                    
                        <p>Meet our team</p>
                        <h2>Experience Team Members</h2>
                    </div>
                    <div className="btn">
                        <Button type="yellow" text="Browse Team" url="/team" />
                    </div>
                </div>
                <div className="team-members">
                    <div className="team-member">
                        <img src={team1} alt="image of Kristine Palmer the chef operation officer" />
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div className="team-member">
                        <img src={team2} alt="image of Mark Aubri a senior consultant" />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="team-member">
                        <img src={team3} alt="image of Kimberly Hansen a senior consultant" />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="team-member">
                        <img src={team4} alt="image of Justin Willoman a senior tech consultant" />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="dots">
                    <div className="grey-dot pagination-dot"></div>
                    <div className="pagination-dot"></div>
                    <div className="grey-dot pagination-dot"></div>
                    <div className="grey-dot pagination-dot"></div>
                    <div className="grey-dot pagination-dot"></div>
                </div>

                <div className="testimonials-container">
                    <div className="section-title">
                        <p>Testimonial</p>
                        <h2>What Our Client Says</h2>
                    </div>
                    <div className="quotes">
                        <div className="client-quote">
                            <img src={stars} alt="five stars" />
                            <p className="quote">`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate`</p>
                            <div className="customer">
                                <img src={customer1} alt="image of Cassandra Warren the business manager at Dorfus" />
                                <div className="customer-info">
                                    <p className="customer-name">Cassandra Warren</p>
                                    <p className="customer-role">Business Manager, Dorfus</p>
                                </div>
                            </div>
                        </div>
                        <div className="client-quote">
                            <img src={stars} alt="five stars" />
                            <p className="quote">`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate`</p>
                            <div className="customer">
                                <img src={customer2} alt="image of Amanda Tulling a senior developer at Square" />
                                <div className="customer-info">
                                    <p className="customer-name">Amanda Tulling</p>
                                    <p className="customer-role">Senior Developer, Square</p>
                                </div>
                            </div>
                        </div>
                        <div className="client-quote">
                            <img src={stars} alt="five stars" />
                            <p className="quote">`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate`</p>
                            <div className="customer">
                                <img src={customer3} alt="image of Jack McDogglas the key account manager at Gobona" />
                                <div className="customer-info">
                                    <p className="customer-name">Jack McDogglas</p>
                                    <p className="customer-role">Key Account Manager, Gobona</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <Button type="black" text="All Reviews" url="/reviews" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection