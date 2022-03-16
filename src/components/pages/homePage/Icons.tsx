import "./HomePage.scss";
import GreyCard from "../../layout/card/GreyCard";
import { icons } from "../../DummyData";

const Icons = () => {
  return (
    <GreyCard>
      <p className="sub-title"> THE MEANING OF OUR ICONS :</p>
      <div className="icons-container">
        <div>
          <img src={icons.spicy} alt="icon" className="spicy-icon" srcSet={`${icons.spicyDekstop} 800w`}></img>Spicy
        </div>
        <div>
          <img src={icons.vegiterian} alt="icon" className="veg-icon" srcSet={`${icons.vegiterianDesktop} 800w`}></img>Vegitarian
        </div>
        <div>
          <img src={icons.vegan} alt="icon" srcSet={`${icons.veganDesktop} 800w`}></img>Vegan
        </div>
      </div>
    </GreyCard>
  );
};

export default Icons;
