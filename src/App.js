import Navbar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Galery from "./components/galery/Galery";
import Testimonials from "./components/testimonials/Testimonials";
import FooterGalery from "./components/footer/FooterGalery";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar/>
        <Hero/>
      </header>
      <main className="app-main">
        <Galery/>
        <Testimonials/>
      </main>
      <footer className="app-footer">
        <FooterGalery/>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
