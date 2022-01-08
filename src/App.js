import './styles/style.scss';
import Features from './components/Features';
import Hero from './components/Hero';
import Team from './components/Team';
// import Works from './components/Works';
import Counter from './components/Counter';
import Steps from './components/Steps';
import ProjectBanner from './components/ProjectBanner';

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Team />
      {/*
      <Works />
      */}
      <Counter />
      <Steps />
      <ProjectBanner />
    </>
  );
}

export default App;
