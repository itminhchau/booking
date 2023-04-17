import { image } from "../../assets/images"
const MenuPage = () => {
    return (
        <div className="min-w-[157px] h-[1080px] bg-[#2D3DDF] rounded-tr-[39px] rounded-br-[39px] py-[43px] flex  items-center flex-col">
            <div className="icon-menu   ">
                <img src={image.iconMenu} />
            </div>
            <div className="menu h-[451px] w-[64px] mt-[200px]">
                <ul className="w-full h-full flex flex-col items-center justify-between">
                    <li>
                        <a href="#">
                            <div className="w-[68px] h-[68px] bg-white rounded-[50%] flex ">
                                <div className=" m-auto flex flex-col items-center">
                                    <img src={image.iconHome} className="w-max h-max" />
                                    <span>Home</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li><a href="#"> <div className="w-[68px] h-[68px] rounded-[50%] flex ">
                        <div className=" m-auto flex flex-col items-center">
                            <img src={image.iconSearch} className="w-max h-max" />
                            <span className="text-white">Explore</span>
                        </div>
                    </div></a></li>
                    <li><a href="#"><div className="w-[68px] h-[68px] rounded-[50%] flex ">
                        <div className=" m-auto flex flex-col items-center">
                            <img src={image.iconHeart} className="w-max h-max" />
                            <span className="text-white">Trip</span>
                        </div>
                    </div></a></li>
                    <li><a href="#"><div className="w-[68px] h-[68px] rounded-[50%] flex ">
                        <div className=" m-auto flex flex-col items-center">
                            <img src={image.iconUser} className="w-max h-max" />
                            <span className="text-white">Profile</span>
                        </div>
                    </div></a></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuPage