import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';

function App() {

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Main></Main>
      <SecondSection ></SecondSection>
      <ThirdSection></ThirdSection>
    </div>
  )
}

export default App
