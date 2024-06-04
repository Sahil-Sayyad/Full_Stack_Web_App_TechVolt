import React from "react";
import HomepageTab from "components/HomepageTab";
import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { RatingBar } from "components/RatingBar";
import { Button } from "components/Button";


export default function HomepageFeaturedproducts(){
    return (
        <div className="container-xs mt-[104px] flex flex-col gap-12 md:p-5">

                    <div className="flex flex-col items-start gap-[11px]">

                        <Heading size="6xl" as="h1">
                            Picks For You
                        </Heading>

                        <HomepageTab buttonText1="Best Deal" text1="Most Popular" text2="Newest"/>

                    </div>

                    <div>
                        <div className="flex gap-10 md:flex-col">

                            <div className="flex w-full flex-col  gap-[23px] rounded-[15px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">

                                <Img src="images/img_image_6_350x386.png" alt="product image" className="h-[350px] w-full object-cover md:h-auto" />

                                <div className="flex flex-col gap-2 self-stretch">

                                    <Text size="3xl" as="p" className="leading-9 !text-black-900">
                                        5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model
                                    </Text>

                                    <div className="flex w-[36%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-3">
                                    
                                    <div className="flex flex-wrap items-start gap-1.5">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP (Incl. of all taxes)
                                        </Text>
                                        <Text size="xl" as="p" className="!text-gray-700 line-through">
                                            ₹85990
                                        </Text>
                                        <Text size="xl" as="p" >
                                            46% Off
                                        </Text>
                                    </div>
                                    <Heading size="4xl" as="h2">
                                        ₹17,800
                                    </Heading>
                                </div>
                                <div className="flex items-start gap-10">
                                    <a href="#" target="_blank">
                                        <Button  className="w-full border border-solid border-black-900_02 font-poppins font-medium sm:px-5">
                                            Learn More
                                        </Button>
                                    </a>

                                    <Button  color="deep_orange_A700" className=" font-poppins font-bold sm:px-5" >
                                        Shop Now
                                    </Button>

                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-[23px] rounded-[15px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">

                                <Img src="images/img_image_5.png" alt="product image" className="h-[350px] w-full object-cover md:h-auto"/>

                                <div className="flex flex-col gap-2 self-stretch">
                                    <Text size="3xl" as="p" className="leading-9 !text-black-900">
                                       650L, Convertible Side-by-Side Refrigerator with Smart Inverter Compressor, Smart Diagnosis
                                    </Text>
                                    <div className="flex w-[36%] items-center justify-center gap-2 md:w-full">
                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>
                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-3">

                                    <div className="flex flex-wrap gap-1.5">

                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP (Incl. of all taxes)
                                        </Text>

                                        <Text size="xl" as="p" className="!text-gray-700 line-through">
                                            ₹85990
                                        </Text>

                                        <Text size="xl" as="p" >
                                            46% Off
                                        </Text>
                                    </div>
                                    <Heading size="4xl" as="h3">
                                        ₹17,800
                                    </Heading>
                                </div>

                                <div className="flex gap-10">
                                    <a href="#" target="_blank">
                                        <Button  className="w-full border border-solid border-black-900_02  font-poppins font-medium sm:px-5">
                                            Learn More
                                        </Button>
                                    </a>
                                    <Button color="deep_orange_A700"  className="font-poppins font-bold sm:px-5">
                                        Shop Now
                                    </Button>
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-[22px] rounded-[15px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">

                                <Img src="images/img_image_3.png" alt="image three" className="h-[350px]  object-cover "/>

                                <div className="flex flex-col gap-[23px]">

                                    <div className="flex flex-col gap-2">

                                        <Text size="3xl" as="p" className="leading-9 !text-black-900">
                                            7kg Front Load Washing Machine, Inverter Direct, Middle Black
                                        </Text>

                                        <div className="flex w-[36%] items-center justify-center gap-[7px] md:w-full">

                                            <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                            <Text as="p" className="!text-black-900">
                                                3(122)
                                            </Text>

                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-3">

                                        <div className="flex flex-wrap gap-1.5">

                                            <Text size="xl" as="p" className="!text-gray-700">
                                                MRP (Incl. of all taxes)
                                            </Text>

                                            <Text size="xl" as="p" className="!text-gray-700 line-through">
                                                ₹85990
                                            </Text>

                                            <Text size="xl" as="p" >
                                                46% Off
                                            </Text>
                                        </div>

                                        <Heading size="4xl" as="h4">
                                            ₹17,800
                                        </Heading>
                                    </div>
                                </div>

                                <div className="flex items-start  gap-10">

                                    <a href="#" target="_blank">
                                        <Button  className="w-full border border-solid border-black-900_02  font-poppins font-medium sm:px-5">
                                            Learn More
                                        </Button>
                                    </a>        

                                    <Button color="deep_orange_A700" className=" font-poppins font-bold sm:px-5">
                                        Shop Now
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}