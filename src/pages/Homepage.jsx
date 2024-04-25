import { Home } from '../components/Home'
import { Features } from '../components/Features';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Homepage = () => {
  return (
    <>
      <div className="App">
        <Navigation />
        <Home />
        <Features />
        <Footer />
      </div>
    </>
  );
};
