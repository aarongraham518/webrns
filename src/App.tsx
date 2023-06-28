// import './App.css';
import { BannerCard } from './components/BannerCard/BannerCard';

function App() {
  return (
    <div className="App">
      <BannerCard 
        heading={"Online Booking"} 
        backgroundColor={'lightBlue'} 
        paragraph={'Medicenter provides you a working online booking service. Just select department, pick your desired date and specify time slot.'} 
        buttonText={'READ MORE'}         
       />
      <BannerCard 
        heading={"Doctors Timetable"} 
        backgroundColor={'midBlue'}         
        paragraph={'Medicenter provides you a working online booking service. Just select department, pick your desired date and specify time slot.'} 
        buttonText={'READ MORE'}
      />
      <BannerCard 
        heading={"Opening Hours"} 
        backgroundColor={'midBlue'}         
        paragraph={'Medicenter provides you a working online booking service. Just select department, pick your desired date and specify time slot.'} 
        buttonText={'READ MORE'}
      />
    </div>
  );
}

export default App;
