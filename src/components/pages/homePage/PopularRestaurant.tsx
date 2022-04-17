import "./HomePage.scss";
import Slider from "react-slick";
import PopularItem from "./PopularItem";

const PopularRestaurant = ({ data }:any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 1.39} },
    ]
  };
  return (
    <div className="slider-div">
      <Slider {...settings}>
        {data &&
          data.map((restaurant:any) => {
            if(restaurant.isPopular === true)
            return <PopularItem restaurant={restaurant} key={restaurant} />;
          })}
      </Slider>
    </div>
  );
};

export default PopularRestaurant;
