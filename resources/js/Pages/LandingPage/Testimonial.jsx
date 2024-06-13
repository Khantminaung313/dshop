import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
  const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

  return (
    <>
        <div className="py-4 lg:py-12 d_container">
            <div className='grid lg:grid-cols-3 lg:gap-8'>
                <div className="overflow-hidden lg:max-h-[3800px] h-auto mb-8">
                    <Slider {...settings}>
                        <div className="grid items-center justify-center">
                            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto my-8">
                                <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600" alt="customer_img" />
                            </div>
                            <p className="max-w-[80%] text-d_gray tracking-wide mx-auto text-justify"><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur eaque excepturi totam praesentium asperiores rem dolore dolor est illo sit voluptas, delectus nihil mollitia.</em></p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto my-8">
                                <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="customer_img" />
                            </div>
                            <p className="max-w-[80%] text-d_gray tracking-wide mx-auto text-justify"><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur eaque excepturi totam praesentium asperiores rem dolore dolor est illo sit voluptas, delectus nihil mollitia.</em></p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto my-8">
                                <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="customer_img" />
                            </div>
                            <p className="max-w-[80%] text-d_gray tracking-wide mx-auto text-justify"><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur eaque excepturi totam praesentium asperiores rem dolore dolor est illo sit voluptas, delectus nihil mollitia.</em></p>
                        </div>
                    </Slider>
                </div>
                <div className="col-span-2 relative overflow-hidden min-h-[280px] max-h-[380px] mb-8">
                    <div className="w-full h-full">
                        <img className="w-full h-full object-cover object-center rounded-md" src="https://images.pexels.com/photos/7319306/pexels-photo-7319306.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="happy-new-year" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-d_black/20 p-8 rounded-lg flex justify-center items-center">
                        <div className="w-full sm:max-w-[80%]">
                        <h5 className="text-red-600 text-2xl xl:text-4xl font-bold mb-2 sm:mb-4"><em>Up to 50%</em></h5>
                        <h3 className="text-white text-2xl xl:text-4xl font-extrabold mb-2 sm:mb-6"><strong>Happy New Year Promotion</strong> </h3>
                        <p className="text-white text-xs sm:text-base tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt mollitia cupiditate aliquam nesciunt culpa officiis assumenda, quibusdam blanditiis iure iusto.</p>
                        <button className="px-2 py-1 lg:px-4 lg:py-2 bg-orange-400 hover:bg-d_gray rounded-md text-xs lg:text-base text-white mt-2"><Link to="/products">Shop Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial