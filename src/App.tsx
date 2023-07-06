import './App.css';
import { BannerCard } from './components/BannerCard/BannerCard';
import { NewsCard } from './components/NewsCard/NewsCard';
import billsImage from '../src/assets/images/bills.jpg';
import xraysImage from '../src/assets/images/xrays.jpg';
import medImage from '../src/assets/images/medtest.jpg';
import doc1 from '../src/assets/images/doc1.png';
import doc2 from '../src/assets/images/doc2.png';
import doc3 from '../src/assets/images/doc3.png';
import doc4 from '../src/assets/images/doc4.png';

import { TeamCard } from './components/TeamCard/TeamCard';
import { BottomLine } from './components/BottomLine/BottomLine';
import { Consultation } from './components/Consultation/Consultation';

function App() {
  return (
    <>
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

      <div className="meetTheTeamContainer">
      {/* <BottomLine /> */}
        <div className="innerWrapper2">
          
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
      </div>

      <div className="App">
        <div className="innerAppWrapper">

          <div className='teamWrapper'>
            <BottomLine />

            <div className="teamInnerWrapper">
              <TeamCard
                image={doc1}
                name={'Maria Jones'}
                title={'Nurse'}

              />

              <TeamCard
                image={doc2}
                name={'Adel Brown'}
                title={'Pediatric'}
                backgroundColor={true}
              />

              <TeamCard
                image={doc3}
                name={'Kim Yodor'}
                title={'Travel Nurse'}
                backgroundColor={true}
              />

              <TeamCard
                image={doc4}
                name={'Maria Jones'}
                title={'Nurse Practitioner'}
                backgroundColor={true}
              />
            </div>
          </div>

          <div className="consultationContainer">
            <Consultation />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
