import './App.css';
import Navbar from './Navbar';
import ChapterCard from './ChapterCard';
import chapters from './chapters.json';
import Carousel from './Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <ChapterCard chapters={chapters} />
    </div>
  );
}

export default App;
