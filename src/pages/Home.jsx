import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import "../css/global.css"
import "../css/style.css"
import { ShowCaseSection } from '../components/home/ShowcaseSection'
import { Logos } from '../components/home/BrandLogos/LogosSection'
import FeaturesSection from '../components/home/Features/FeaturesSection'
import AboutCompanySection from '../components/home/AboutCompanySection'
import ServicesSection from '../components/home/Services/ServicesSection'
import ChooseUsSection from '../components/home/ChooseUs/ChooseUsSection'
import ProjectSection from '../components/home/Project/ProjectSection'
import TeamSection from '../components/home/Team/TeamSection'
import ArticleNewsSection from '../components/home/Article/Article-NewsSection'
import NewsletterSection from '../components/NewsletterSection'

export const Home = () => {
    return (
            <div>
            <Header />
            <ShowCaseSection />
            <Logos />
            <FeaturesSection />
            <AboutCompanySection />
            <ServicesSection />
            <ChooseUsSection />
            <ProjectSection />
            <TeamSection />
            <ArticleNewsSection />
            <NewsletterSection />
            <Footer />
        </div>
    )
}

export default Home