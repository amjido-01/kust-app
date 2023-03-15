import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';
import { FourthSection } from './components/FourthSection';
import { Fifth } from './components/Fifth';
import { Sixth } from './components/Sixth';
import { Feedback } from './components/Feedback';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Footer } from './components/Footer';

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Fifth />
      <Sixth />
      <Feedback />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
