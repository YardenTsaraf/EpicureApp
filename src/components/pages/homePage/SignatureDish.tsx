import SignatureItem from "./SignatureItem";
import "./HomePage.scss";
import Slider from "react-slick";

const SignatureDish = ({ dishes }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 1.1 } },
    ],
  };
  return (
    <div className="slider-div">
      <Slider {...settings}>
        {dishes &&
          dishes.map((dish:any) => {
            return <SignatureItem dish={dish} key={dish}/>;
          })}
      </Slider>
    </div>
  );
};

export default SignatureDish;
