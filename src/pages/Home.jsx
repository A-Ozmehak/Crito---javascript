import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowCaseSection from '../components/Home/ShowcaseSection'
import Logos from '../components/Home/BrandLogos/LogosSection'
import FeaturesSection from '../components/Home/Features/FeaturesSection'
import AboutCompanySection from '../components/Home/AboutCompanySection'
import ServicesSection from '../components/Home/Services/ServicesSection'
import ChooseUsSection from '../components/Home/ChooseUs/ChooseUsSection'
import ProjectSection from '../components/Home/Project/ProjectSection'
import TeamSection from '../components/Home/Team/TeamSection'
import ArticleNewsSection from '../components/Home/Article/Article-NewsSection'
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