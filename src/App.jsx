import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Contact from './pages/Contact';
import { ArticleProvider } from './contexts/ArticleContext';

function App() {
  return (
    <BrowserRouter>
      <ArticleProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<h1>Service</h1>} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  );
}

export default App
