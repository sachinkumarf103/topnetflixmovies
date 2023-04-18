import './App.css';
import Card from './Card';
import SerData from './SerData';
import Footer from './Footer';

function ncard(val) {
  return (
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sername={val.sername}
      link={val.links}
    />
  );
}

function App() {
  return (
    <>
      <h1 className='header'>Top Movies on Netflix</h1>
      <div className='cards'>
        {SerData.map(ncard)}
      </div>
      <Footer/>
    </>
  );
}

export default App;
