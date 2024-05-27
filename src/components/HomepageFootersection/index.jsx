import { Heading } from "components/Heading";
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
                                <div className="flex items-center gap-2.5 self-stretch">
                                    <Img src="images/img_lock_black_900_02.svg" alt="security icon" className="h-[24px] w-[24px] self-start"/>
                                    <Text as="p" className="self-end">
                                        TechVolt@gamil.com
                                    </Text>

                                </div>

                            </div>
                        </div>
                        <div className="flex w-[31%] items-start justify-between gap-5 md:w-full sm:flex-col">
                            <div className="flex flex-col gap-3">
                                    <Heading as="h6" className="!text-black-900_02">
                                        Sitemap
                                    </Heading>
                                    <ul className="flex flex-col gap-[13px]">
                                        <li>
                                            <a href="#">
                                                <Text as="p">Product</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p">Services</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p">Article</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p">About Us</Text>
                                            </a>
                                        </li>


                                    </ul>
                           
                            </div>
                            <div className="flex flex-col items-start gap-3">
                                <Heading as="h6" className="!text-black-900_02">
                                    Information
                                </Heading>
                                <ul className="flex flex-col items-start gap-[13px]">
                                <li>
                                        <a href="#">
                                            <Text as="p">Privacy Policy</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text as="p">Terms & Conditions</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text as="p">Contact</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text as="p">FAQs</Text>
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        
                     </div>

                
                <div className="flex w-[19%] flex-col items-start gap-3.5 md:w-full">

                        <Heading as="h6" className="!text-black-900_02">
                            Connect with Us
                        </Heading>

                
                        <div className="flex w-[52%] justify-between gap-5  md:w-full">
                            <Img src="images/img_bx_bxl_instagram_alt.svg" alt="instagram icon" className="h-[24px] w-[24px]"/>
                            <Img src="images/img_akar_icons_twitter_fill.svg" alt="twitter icon" className="h-[24px] w-[24px]"/>
                            <Img src="images/img_akar_icons_linkedin_fill.svg" alt="linkedin icon" className="h-[24px] w-[24px]"/>
                        </div>

                    </div>

                </div>
                <div className="mt-[60px] h-px w-full text-center self-stretch bg-gray-400_01"></div>
                        <Text as="p" className="mt-[50px] !text-black-900_cc">
                            @ Copyright 2024 TechVolt. All rights reserved
                        </Text>
            </div>                  
        </div>
    </footer>
    )
}