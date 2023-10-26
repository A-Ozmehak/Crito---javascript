import team1 from "../../../assets/Team1.png"
import team2 from "../../../assets/Team2.png"
import team3 from "../../../assets/Team3.png"
import team4 from "../../../assets/Team4.png"
import customer1 from "../../../assets/customer1.png"
import customer2 from "../../../assets/customer2.png"
import customer3 from "../../../assets/customer3.png"
import stars from "../../../assets/Stars.svg"
import Button from "../../Generics/Button"
import TeamMembers from "./TeamMembers"
import Testimonial from "./Testimonial"

const TeamSection = () => {
    const team = [
        {img: team1, alt: "image of Kristine Palmer the chef operation officer", name: "Kristine Palmer", position: "Chef Operation Officer"},
        {img: team2, alt: "image of Mark Aubri a senior consultant", name: "Mark Aubri", position: "Senior Consultant"},
        {img: team3, alt: "image of Kimberly Hansen a senior consultant", name: "Kimberly Hansen", position: "Senior Consultant"},
        {img: team4, alt: "image of Justin Willoman a senior tech consultant", name: "Justin Willoman", position: "Senior Tech Consultant"}
    ]

    const customerQuote = [
        {
            starsImg: stars,
            alt: "five starts",
            quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate`,
            customerImg: customer1,
            customerImgAlt: "image of Cassandra Warren the business manager at Dorfus",
            customerName: "Cassandra Warren",
            customerPosition: "Business Manager, Dorfus"
        },
        {
            starsImg: stars,
            alt: "five starts",
            quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate`,
            customerImg: customer2,
            customerImgAlt: "image of Amanda Tulling a senior developer at Square",
            customerName: "Amanda Tulling",
            customerPosition: "Senior Developer, Square"
        },
        {
            starsImg: stars,
            alt: "five starts",
            quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate`,
            customerImg: customer3,
            customerImgAlt: "image of Jack McDogglas the key account manager at Gobona",
            customerName: "Jack McDogglas",
            customerPosition: "Key Account Manager, Gobona"
        }
    ]

    return (
        <section className="team-section">
            <div className="container">
                <div className="section-title">
                    <div className="title">                    
                        <p>Meet our team</p>
                        <h2>Experience Team Members</h2>
                    </div>
                    <div className="btn">
                        <Button color="yellow" text="Browse Team" url="/team" />
                    </div>
                </div>
                <div className="team-members">
                    {
                        team.map((member, index) => {
                            return (
                                <TeamMembers key={index} img={member.img} alt={member.alt} name={member.name} position={member.position} />
                            )
                        })
                    }
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
                      
                      {
                            customerQuote.map((quote, index) => {
                                return (
                                    <Testimonial key={index} starsImg={quote.starsImg} alt={quote.alt} quote={quote.quote} customerImg={quote.customerImg} customerImgAlt={quote.customerImgAlt} customerName={quote.customerName} customerPosition={quote.customerPosition} />
                                )
                            })
                      }
                      
                        
                    </div>
                    <div className="btn">
                        <Button color="black" text="All Reviews" url="/reviews" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection