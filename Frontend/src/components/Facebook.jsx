import React from 'react'
import list from "/public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
const Facebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const filteredData = list.filter((data) => data.category === "Free");
    // console.log(filteredData);
    return (
        <div className='md:px-20 px-4'>
            <div>
                <h1 className='font-bold text-2xl'>
                    Free Offered Courses
                </h1>
                <p>"Unlock your potential with our free courses! Whether you're looking to enhance your skills, explore a new passion, or kickstart your career, our diverse range of courses is designed to help you succeed. Learn anytime, anywhere—absolutely free!"</p>
            </div>
            {/*card slider */}
            <div className="mt-5">
                <Slider {...settings}>
                  {filteredData.map((item)=>(
                    <Cards item={item} key={item.id}/>
                  ))}
                </Slider>
            </div>
        </div>
    )
}

export default Facebook
