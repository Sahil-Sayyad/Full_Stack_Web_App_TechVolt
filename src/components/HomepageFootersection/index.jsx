import { Img } from "components/Img";
import { Text } from "components/Text";
import React from "react";

export default function HomepageFootersection(){
    return (
        <footer className="mt-20 flex items-center justify-center self-stretch broder border-solid border-gray-400 bg-gray-300_04 pb-[38px] pt-[37px] sm:py-5">
            <div className="container-xs flex justify-center md:p-5">
                <div className="flex w-full flex-col items-center">
                    <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                        <div className="flex w-[32%] flex-col gap-[37px] md:w-full">
                            <Img src="images/img_footer_logo.png" alt="footer logo" className="h-[50px] w-[223px] object-contain"/>
                            <div className="flex flex-col gap-[18px]">
                                <Text as="p" className="leading-[26px]">
                                    TechVolt: Unleashing Innovation, Redefining Convenience - Your Ultimate Destination for Seamless
                                    Tech Exploration and Empowerment.
                                </Text>

                            </div>
                        </div>

                    </div>

                </div>

                             
            </div>
        </footer>
    )
}