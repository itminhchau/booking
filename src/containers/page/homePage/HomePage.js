import React from "react";
import Slider from "react-slick";
import { image } from "../../../assets/images"
import InputSearch from "../../../components/search/InputSearch"
import { arrayImageVaction } from "../../../mockdata/data";

const HomePage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className=" w-full relative ">
            <div className="z-10 w-[54.99%] h-full bg-white  rounded-tr-[60px] absolute">
                <div className="w-[680px] mx-[32px] ">
                    {/* input search */}
                    <InputSearch />
                    {/*  */}
                    <div className="content  mt-8">
                        <div className="flex items-center justify-between">
                            <span>Popular Placer For Vactions</span>
                            <span className=" text-blue-600"><a href="#">See All</a></span>
                        </div>
                        <Slider {...settings} className="mt-[14px]">
                            {arrayImageVaction.map((item, index) => {
                                return (
                                    <div className="relative">
                                        <img src={item.image} alt="" className="w-[215px] h-[207px] " />
                                        <span className=" text-white absolute bottom-0 left-[10px] z-10">{item.title}</span>
                                    </div>
                                )
                            })}
                        </Slider>
                        {/* fly  */}
                        <div className=" mt-8">
                            <div className="flex items-center justify-between">
                                <span>Best Deals on Flight Booking</span>
                                <span className=" text-blue-600"><a href="#">See All</a></span>

                            </div>
                            <div className="flex items-center justify-between gap-2 mt-3">
                                <div><img src={image.imgfly1} alt="" /></div>
                                <div> <img src={image.imgfly2} alt="" /></div>
                            </div>
                        </div>
                        {/* placer */}

                        <div className=" mt-8 ">
                            <div className="flex items-center justify-between">
                                <span>The best place to be near you</span>
                                <span className=" text-blue-600"><a href="#">See All</a></span>

                            </div>
                            <div className="grid grid-rows-2 grid-cols-3 gap-3 mt-3 ">
                                <div className="relative"> <img src={image.imgplace2} alt="" />
                                    <span className=" text-white absolute bottom-0 left-[10px] z-10">tiltl placer</span>
                                </div>
                                <div className="relative"><img src={image.imgplace3} alt="" />
                                    <span className=" text-white absolute bottom-0 left-[10px] z-10">tiltl placer</span>
                                </div>
                                <div className="relative"> <img src={image.imgplace4} alt="" />
                                    <span className=" text-white absolute bottom-0 left-[10px] z-10">tiltl placer</span>
                                </div>
                                <div className="relative"><img src={image.imgplace3} alt="" />
                                    <span className=" text-white absolute bottom-0 left-[10px] z-10">tiltl placer</span>
                                </div>
                                <div className="relative"> <img src={image.imgplace4} alt="" />
                                    <span className=" text-white absolute bottom-0 left-[10px] z-10">tiltl placer</span>
                                </div>
                                <div className="relative"> <img src={image.imgplace4} alt="" />
                                    <span className=" text-white absolute bottom-0 left-[10px] z-10">tiltl placer</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-[1] w-[50%] bg-home-img bg-cover bg-no-repeat h-[1080px] absolute top-0 right-0 rounded-bl-[21%]">
                <div className="w-full h-full bg-[#2D3DDF] absolute top-0 left-0 opacity-50 rounded-bl-[21%] ">
                    <div className=" absolute top-[105px] right-[43px] w-[336px] h-[112px] border-2 border-white flex items-center p-[16px] ">
                        <img src={image.iconUser} alt="" className=" w-[60px] h-[60px] rounded-[50px] bg-black" />
                        <div className="mx-[8px] text-white flex flex-col">
                            <span>Jane Done</span>
                            <span>text text text</span>
                        </div>

                    </div>
                    <div className=" w-[546px] h-[468px] absolute bottom-[105px] left-[105px] bg-red-300">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage