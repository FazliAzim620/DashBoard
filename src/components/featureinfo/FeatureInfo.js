import './featureInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
const FeatureInfo=()=> {
    return (
        <>
     <div className="featured">
      <div className="featureItem">
          <span className="featureTitle">Revenue</span>
          <div className="featureMoneyContainer">
              <span className="featureMoney">$3839</span>
              <span className="MoneyRate">-23 <ArrowDownward className='featureIcon negative'/></span>
          </div>
          <span className="featureSub">Compared to Last month</span>
        </div>
        <div className="featureItem">
          <span className="featureTitle">Sale</span>
          <div className="featureMoneyContainer">
              <span className="featureMoney">$3839</span>
              <span className="MoneyRate">-23 <ArrowDownward className='featureIcon negative'/></span>
          </div>
          <span className="featureSub">Compared to Last month</span>
          </div>
          <div className="featureItem">
          <span className="featureTitle">Cost</span>
          <div className="featureMoneyContainer">
              <span className="featureMoney">$3839</span>
              <span className="MoneyRate">13 <ArrowUpward className='featureIcon '/></span>
          </div>
          <span className="featureSub">Compared to Last month</span>
      </div>
         </div>
        </>
    )
}

export default FeatureInfo;
