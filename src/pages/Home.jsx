import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ShowCaseSection from '../components/HomePageComponents/ShowcaseSection';
import Logos from '../components/HomePageComponents/BrandLogos/LogosSection';
import FeaturesSection from '../components/HomePageComponents/Features/FeaturesSection';
import AboutCompanySection from '../components/HomePageComponents/AboutCompanySection';
import ServicesSection from '../components/HomePageComponents/Services/ServicesSection';
import ChooseUsSection from '../components/HomePageComponents/ChooseUs/ChooseUsSection';
import ProjectSection from '../components/HomePageComponents/Project/ProjectSection';
import TeamSection from '../components/HomePageComponents/Team/TeamSection';
import ArticleNewsSection from '../components/Article-NewsSection/Article-NewsSection';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';

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

export default Home;