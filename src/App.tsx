// import './App.css';
import { BannerCard } from './components/BannerCard/BannerCard';
import { NewsCard } from './components/NewsCard/NewsCard';
import billsImage from '../src/assets/images/bills.jpg';
import xraysImage from '../src/assets/images/xrays.jpg';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
