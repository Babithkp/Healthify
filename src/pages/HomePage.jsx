import img1 from "../assets/sliderImg1.jpg";
import img2 from "../assets/sliderImg2.jpg";
import img3 from "../assets/sliderImg3.jpg";
import Slider from "react-slick";
function HomePage() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="w-full overflow-hidden ">
      <Slider {...settings} className="h-[90%] ">
        <img src={img1} className=" h-[35rem] w-[30rem]" />
        <img src={img2} className="h-[35rem] w-[30rem]" />
        <img src={img3} className="h-[35rem] w-[30rem]" />
      </Slider>
    </div>
  );
}

export default HomePage;
