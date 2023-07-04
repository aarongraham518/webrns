import './App.css';
import { BannerCard } from './components/BannerCard/BannerCard';
import { NewsCard } from './components/NewsCard/NewsCard';
import billsImage from '../src/assets/images/bills.jpg';
import xraysImage from '../src/assets/images/xrays.jpg';
import medImage from '../src/assets/images/medtest.jpg';
import doc1 from '../src/assets/images/doc1.png';

import { TeamCard } from './components/TeamCard/TeamCard';

function App() {
  return (
    <div className="App">
      <div className="innerWrapper">
      <div className="BannerCardContainer">      
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
        backgroundColor={'darkBlue'}         
        paragraph={'Medicenter provides you a working online booking service. Just select department, pick your desired date and specify time slot.'} 
        buttonText={'READ MORE'}
      />
     </div>
      </div>
      <div className="innerWrapper">
        <NewsCard
          date={'JUL 2, 2023'}
          image={billsImage}
          heading={'New Study Links Bills To Stress'}
          paragraph='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Optio, omnis tenetur 
                vero enim est facere porro eius quae. 
                Repudiandae, enim.'
          author={'BETTY SMITH'}
          category={'GENERAL HEALTH'}
        />

        <NewsCard
          date={'JUL 7, 2023'}
          image={xraysImage}
          heading={'What Does The Doc Really See?'}
          paragraph='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Optio, omnis tenetur 
                vero enim est facere porro eius quae. 
                Repudiandae, enim.'
          author={'CRAIG JOHNSON'}
          category={'GENERAL HEALTH'}
        />

        <NewsCard
          date={'JUL 9, 2023'}
          image={medImage}
          heading={'Precision Is The Key'}
          paragraph='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Optio, omnis tenetur 
                vero enim est facere porro eius quae. 
                Repudiandae, enim.'
          author={'YANA WONG'}
          category={'GENERAL HEALTH'}
        />
      </div>
      <div className='innerWrapper'>
        <TeamCard image={doc1} name={'Maria Jones, RN'} title={}/>
      </div> 

    </div>
  );
}

export default App;
