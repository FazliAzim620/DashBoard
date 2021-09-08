import FeatureInfo from '../../featureinfo/FeatureInfo';
import './Home.css';
import Chart from '../../chart/Chart';
import {UserData} from '../../UserData';
import LargeWidget from '../../homeWidget/LargeWidget/LargeWidget';
import SmallWidget from '../../homeWidget/Smallwidget/SmallWidget';
const Home=()=> {
    return (
        <>
         <div className="home">
         <FeatureInfo/>
         <Chart data={UserData} title='User Analytics' grid datakey='Active User'/>
       <div className="homeWidget">
           <SmallWidget/>
           <LargeWidget/>
       </div>
         </div>
        </>
    )
}

export default Home;
