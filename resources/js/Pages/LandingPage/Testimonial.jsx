import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonial = ({testimonials}) => {
  const settings = {
		infinite: testimonials?.length > 1,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

  return (
    <>
        <div className="py-4 lg:py-12 d_container">
            <div className={`grid lg:gap-8 ${testimonials.length > 0 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {testimonials.length > 0 && 
                    <div className="overflow-hidden lg:max-h-[3800px] h-auto mb-8">
                        <Slider {...settings}>
                            {
                            testimonials.map(testimonial => 
                                <div className="items-center justify-center" key={testimonial.id}>
                                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto my-8">
                                        <img className="w-full h-full object-cover object-center" src={`/storage/${testimonial.profile}`} alt={testimonial.username} />
                                    </div>
                                    <p className="text-center font-semibold text-d_gray mb-2 tracking-wider"><em>{testimonial.username}</em></p>
                                    <p className="max-w-[80%] text-d_gray tracking-wide mx-auto text-justify"><em>{testimonial.message}</em></p>
                                </div>
                            )
                            }
                        </Slider>
                    </div>
                }
                {/* <div className="col-span-2 relative overflow-hidden min-h-[280px] max-h-[380px] mb-8">
                    <div className="w-full h-full">
                        <Link href={null}>
                            <img className="w-full h-full object-cover object-center rounded-md" src={`/storage/${promotion[0].thumbnail}`} alt="happy-new-year" />
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Testimonial