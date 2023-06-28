import './App.css';
import { BannerCard } from './components/BannerCard/BannerCard';

function App() {
  return (
    <div className="App">
      <BannerCard heading={"Online Booking"} backgroundColor={'red'}/>
      <BannerCard heading={"Doctors Timetable"} backgroundColor={'blue'}/>
    </div>
  );
}

export default App;
