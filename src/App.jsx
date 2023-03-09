import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';
import { Testimonial } from './components/Testimonial';

function App() {

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Main></Main>
      <SecondSection ></SecondSection>
      <ThirdSection></ThirdSection>
      <Testimonial></Testimonial>
    </div>
  )
}

export default App
