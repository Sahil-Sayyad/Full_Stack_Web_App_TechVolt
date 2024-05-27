import { Button } from "components/Button";
import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { Text } from "components/Text";
import React from "react";

export default function HomepageSupportsection(){
    return (
        <div className="container-xs mt-[72px] flex flex-col gap-[46px] md:p-5">
            <div className="flex flex-col items-start gap-1">
                <Heading size="6xl" as="h2">
                    Need Help?
                </Heading>
                <Text size="2xl" as="p" className="tracking-[1.40px]">
                    We're here to provide all the help you need.
                </Text>

            </div>
            <div className="grid grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1">

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                 Product <br/>
                                 Registration
                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                                Registering your product will help you get faster support.
                            </Text>

                        </div>
                        <Img src="images/img_icon.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                    <Button color="deep_orange_A700" size="lg" rightIcon={<Img src="images/img_frame_white_a700.svg" alt="frame" className="h-[24px] w-[24px]"/>} className="min-w-[200px] gap-2.5 rounded-[11px] font-inter font-medium sm:px-5">
                        Learn More
                    </Button>

                </div>

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                 Product <br/>
                                 Support
                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                                Find manual, trobleshoot and warranty of your TechVolt product.
                            </Text>

                        </div>
                        <Img src="images/img_icon_black_900_02.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                    <Button  size="lg" rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]"/>} 
                    className="min-w-[200px] gap-2.5 rounded-[11px] border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                        Learn More
                    </Button>

                </div>

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                 Order  <br/>
                                 Support
                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                            Track your order and check order FAQ.
                            </Text>

                        </div>
                        <Img src="images/img_icon_black_900_02_48x48.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                    <Button  size="lg" rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]"/>} className="min-w-[169px] gap-2.5 rounded-[11px] border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                        Learn More
                    </Button>

                </div>

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                 Repair <br/>
                                 request

                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                            Request repair service conveniently online.
                            </Text>

                        </div>
                        <Img src="images/img_icon_48x48.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                    <Button  size="lg" rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]"/>} className="min-w-[200px] gap-2.5 rounded-[11px] border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                        Learn More
                    </Button>

                </div>

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                Quick help

                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                            Get instant help on shopping.
                            </Text>

                        </div>
                        <Img src="images/img_icon_1.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                    <Button  size="lg" rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]"/>} className="min-w-[200px] gap-2.5 rounded-[11px] border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                        Learn More
                    </Button>


                </div>

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                WhatsApp
                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                            Talk to our customer service via WhatsApp
                            </Text>

                        </div>
                        <Img src="images/img_volume.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                     <Button  size="lg" rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]"/>} className="min-w-[200px] gap-2.5 rounded-[11px] border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                        Learn More
                    </Button>


                </div>

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                Email us

                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                                Send an Email to TechVolt Customer Service
                            </Text>

                        </div>
                        <Img src="images/img_icon_2.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                    <Button  size="lg" rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]"/>} className="min-w-[200px] gap-2.5 rounded-[11px] border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                        Learn More
                    </Button>

                </div>

                <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
                    <div className="flex items-start gap-3 self-stretch">
                        <div className="flex flex-1 flex-col gap-2.5">
                            <Text size="5xl" as="p" className="w-[81%] leading-[42px] !text-black-900 md:w-full">
                                <>
                                Call us
                                </>
                            </Text>
                            <Text as="p" className="leading-6 !text-gray-700">
                                Speak directly with our support representatives.
                            </Text>

                        </div>
                        <Img src="images/img_icon_3.svg" alt="product image" className="h-[48px] w-[48px]"/>

                    </div>
                    <Button  size="lg" rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[30px] w-[24px]"/>} className="min-w-[200px] gap-2.5 rounded-[11px] border border-solid border-black-900_02 font-inter font-medium sm:px-5 content-start">
                        Learn More
                    </Button>

                </div>



            </div>

        </div>
    )
}