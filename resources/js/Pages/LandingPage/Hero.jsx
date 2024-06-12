import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Hero = ({ sliders }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="d_container my-4 lg:my-12">
            <Slider {...settings}>
                {sliders.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className="relative h-[650px] w-full rounded-lg overflow-hidden"
                            style={{ backgroundImage: "storage" }}
                        >
                            <div className="w-full h-full">
                              <img
                                  className="w-full h-full object-cover object-center"
                                  src={`storage/${slide.image}`}
                                  alt={slide.title}
                              />
                            </div>
                            <div className="absolute top-[50%] translate-y-[-50%] left-12">
                                <h2
                                    className="text-2xl lg:text-4xl font-bold uppercase mb-4 text-d_blue"
                                    style={{ color: slide.title_color }}
                                >
                                    {slide.title}
                                </h2>
                                <p className="text-sm lg:text-base max-w-[60vw] sm:max-w-[450px] mb-4" style={{ color: slide.intro_color }}>
                                    {slide.intro}
                                </p>
                                <Link
                                    className="text-d_white hover:underline"
                                    href={slide.link}
                                    style={{ color: slide.link_color }}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Hero;
