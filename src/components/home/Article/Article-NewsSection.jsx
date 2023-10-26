import news1 from "../../../assets/news1.png"
import news2 from "../../../assets/news2.png"
import news3 from "../../../assets/news3.png"
import Button from '../../Generics/Button';
import Articles from "./Articles";

export const ArticleNewsSection = () => {
    const article = [
        {img: news1, alt: "a smiling woman sitting and looking at someone", spanText: "Business", title: "How To Use Digitalization In The Classroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: news2, alt: "the intro text for chat gpt", spanText: "Business", title: "How To Implement Chat GPT In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img: news3, alt: "a phone and two books about css and javascript lying on a desk", spanText: "Business", title: "The Guide To Support Modern CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
    ]
    return (
        <section className="news-section">
            <div className="container">
                <div className="section-title">
                    <div>
                        <p>Article & News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                        <div className="btn">
                            <Button color="transparent" text="View Articles" url="/news" />
                        </div>
                </div>
                <div className="content-container">
                
                    {
                        article.map((article, index) => {
                            return (
                                <Articles key={index} img={article.img} alt={article.alt} spanText={article.spanText} title={article.title} description={article.description} />
                            )
                        })
                    }

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