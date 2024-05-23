import React from "react";
import HomepageHeader from "../../components/HomepageHeader";
import HomepageHerosection from "../../components/HomepageHerosection";
import HomepageFantasticdeals from "components/HomepageFantasticdeals";
import HomepageTab from "components/HomepageTab";
import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { RatingBar } from "components/RatingBar";
import { Button } from "components/Button";
const data = [
    {
        image:"images/img_image_6.png",
        title:"Fantastic deals await!",
        description:"Don't miss our promotions on home appliances, audio and video products.",
        button:"Buy now"
    },
    {
        image:"images/img_group_4.png",
        title:"Be an techvolt member",
        description:"Enjoy all the membership benefits, from special discounts to exclusive services and offers.",
        button:"Join Us",
    },
    {
        image:"images/img_image_6_239x397.png",
        title:"Gift registration",
        description:"Check out redemption procedures for promotional gifts.",
        button:"Learn More",
    },
]
export default function Homepage(){
    
    const backgroundColors = ["bg-orange-100", "bg-slate-200","bg-stone-300"]; 
    return( 
        <>
            <div className="flex w-full flex-col items-center bg-white-A700">

                {/* main header section */}
                <HomepageHeader productdetailstext="Shop" className="self-stretch"/>

                {/* hero slider section */}
                <HomepageHerosection/>

                {/* promotional section */}
                <div className="container-xs mt-20 flex gap-6 md:flex-col md:p5">
                    {data.map((d,index)=>(
                        <HomepageFantasticdeals 
                        {...d}
                        key={"productList" + index}
                        className ={`gap-[23px] py-9 md:w-full sm:py-5 ${backgroundColors[index % backgroundColors.length]}`}
                        />
                    ))}
                </div>
                
                 {/* featured products section */}
                 <div className="container-xs mt-[104px] flex flex-col gap-12 md:p-5">

                    <div className="flex flex-col items-start gap-[11px]">

                        <Heading size="6xl" as="h1">
                            Picks For You
                        </Heading>

                        <HomepageTab buttonText1="Best Deal" text1="Most Popular" text2="Newest"/>

                    </div>

                    <div>
                        <div className="flex gap-10 md:flex-col">

                            <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">

                                <Img src="images/img_image_6_350x386.png" alt="product image" className="h-[350px] w-full object-cover md:h-auto" />

                                <div className="flex flex-col gap-2 self-stretch">

                                    <Text size="3xl" as="p" className="leading-9 !text-black-900">
                                        5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model
                                    </Text>

                                    <div className="flex w-[43%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-2.5">
                                    <div className="flex flex-wrap gap-[7px]">
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
                                        <Button  className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                                            Learn More
                                        </Button>
                                    </a>

                                    <Button  color="deep_orange_A700" className=" font-inter font-bold sm:px-5" >
                                        Shop Now
                                    </Button>

                                </div>
                            </div>

                            <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">

                                <Img src="images/img_image_5.png" alt="product image" className="h-[350px] w-full object-cover md:h-auto"/>

                                <div className="flex flex-col gap-2 self-stretch">
                                    <Text size="3xl" as="p" className="leading-9 !text-black-900">
                                       650L, Convertible Side-by-Side Refrigerator with Smart Inverter Compressor, Smart Diagnosis
                                    </Text>
                                    <div className="flex w-[43%] items-center justify-center gap-2 md:w-full">
                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>
                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-2.5">
                                    <div className="flex flex-wrap gap-[7px]">
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
                                        <Button  className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                                            Learn More
                                        </Button>
                                    </a>
                                    <Button color="deep_orange_A700"  className="font-inter font-bold sm:px-5">
                                        Shop Now
                                    </Button>
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-center gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">

                                <Img src="images/img_image_3.png" alt="image three" className="h-[350px]  object-cover "/>

                                <div className="flex flex-col gap-[23px]">

                                    <div className="flex flex-col gap-2">

                                        <Text size="3xl" as="p" className="leading-9 !text-black-900">
                                            7kg Front Load Washing Machine, Inverter Direct, Middle Black
                                        </Text>

                                        <div className="flex w-[43%] items-center justify-center gap-[7px] md:w-full">

                                            <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                            <Text as="p" className="!text-black-900">
                                                3(122)
                                            </Text>

                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-2.5">

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
                                        <Button  className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5">
                                            Learn More
                                        </Button>
                                    </a>        

                                    <Button color="deep_orange_A700" className=" font-inter font-bold sm:px-5">
                                        Shop Now
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/** */}
            </div>
        </>
    )
}