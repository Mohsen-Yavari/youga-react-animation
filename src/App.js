import Hero from './components/Hero';
import Cards from './components/Cards';

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Cards />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
