import { BsArrowUpRight } from "react-icons/bs"
import news1 from "../../assets/news1.png"
import news2 from "../../assets/news2.png"
import news3 from "../../assets/news3.png"

export const ArticleNewsSection = () => {
    return (
        <section className="news-section">
        <div className="container">
            <div className="section-title">
                <div>
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                    <div className="btn">
                        <a className="btn-transparent">Browse Articles<BsArrowUpRight className="icon-left"/></a>
                    </div>
            </div>
            <div className="content-container">
                <div className="news-content">
                    <img src={news1} alt="a smiling woman sitting and looking at someone" />
                    <span>Business</span>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
                <div className="news-content">
                    <img src={news2} alt="the intro text for chat gpt" />
                    <span>Business</span>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
                <div className="news-content">
                    <img src={news3} alt="a phone and two books about css and javascript lying on a desk" />
                    <span>Business</span>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
            </div>
            <div className="dots">
                <div className="pagination-dot"></div>
                <div className="grey-dot pagination-dot"></div>
                <div className="grey-dot pagination-dot"></div>
                <div className="grey-dot pagination-dot"></div>
                <div className="grey-dot pagination-dot"></div>
            </div>
        </div>
    </section>
    )
}

export default ArticleNewsSection