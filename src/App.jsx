import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import HireMePage from "./pages/HireMePage";
import ErrorPage from "./pages/ErrorPage";
import FaqPage from "./pages/FaqPage";
import Footer from "./components/Footer";
import ShootingResultsMainPage from "./pages/shooting/ShootingResultsMainPage";
import ResultNotDeclared from './pages/shooting/ResultNotDeclared'
import DeclaredResult from "./pages/shooting/DeclaredResult";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hire-me" element={<HireMePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/shooting-results" element={<ShootingResultsMainPage />} />
        <Route path="/shooting-results/:event/:region/:gender/:age" element={<DeclaredResult />} />
        <Route path="/shooting-results/result-not-declared" element={<ResultNotDeclared />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
