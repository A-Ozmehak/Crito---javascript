import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Contact from './pages/Contact';
import { ArticleProvider } from './contexts/ArticleContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
      <ArticleProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<PageNotFound />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ArticleProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
