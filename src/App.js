import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Cards />
      <Facts />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
