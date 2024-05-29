import { Img } from "components/Img"
import { Text } from "components/Text"
import { RatingBar } from "components/RatingBar"
import { Heading } from "components/Heading"
import { Button } from "components/Button"
import React from "react"

export default function ProductListing(){
    return (
        <div className="flex flex-1 flex-col items-start gap-[23px] md:self-stretch">
            <Text as="p" className="!font-medium !text-black-900">
                34 Results
            </Text>
            <div className="grid grid-cols-3 gap-10 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <a href="#" target="_blank">
                    <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_219x293.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        </div>
                        <Button  color="deep_orange_A700" className="w-full font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                    </div>
                </a>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_1.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                       Smart Washer - Wi-Fi Connectivity, Auto-Dosing Technology, Steam Clean.
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        </div>
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_2.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technology, Stainless Steel
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_2.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technology, Stainless Steel
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_2.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technology, Stainless Steel
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_2.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technology, Stainless Steel
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_2.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technology, Stainless Steel
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_2.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technology, Stainless Steel
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                        <Img src="images/img_image_3_2.png" alt="product image" className="h-[219px] object-cover"/>
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-2">
                            <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
                                        Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technology, Stainless Steel
                            </Text>
                            <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">

                                        <RatingBar value={1} isEditable={true} size = {18} className = "flex flex-1 justify-between"/>

                                        <Text as="p" className="!text-black-900">
                                            3(122)
                                        </Text>

                                    </div>
                            </div>
                            <div className="flex flex-col items-start gap-[9px]">
                                    
                                    <div className="flex flex-wrap gap-[7px]">
                                        <Text size="xl" as="p" className="!text-gray-700">
                                            MRP
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
                        <Button   className="w-full border border-solid border-black-900_02 font-inter font-bold sm:px-5" >
                             Add to Basket
                        </Button>
                </div>
            </div>
            <div className="flex w-[31%] items-center gap-5 self-end md:w-full">
                <div className="flex items-center gap-1">
                    <Img src="images/img_arrow_left.svg" alt="previous icon" className="h-[24px] w-[24px]"/>
                    <Text size="md" as="p">
                        Previous
                    </Text>
                </div>
                <div className="flex flex-1 items-center justify-between gap-5">
                    <Text size="md" as="p">
                        1
                    </Text>
                    <Button color="gray_300_04" size="lg" className="min-w-[45px] rounded-[10px] border  border-solid border-black-900_02 font-medium">
                        2
                    </Button>
                    <Text size="md" as="p">
                        3
                    </Text>
                    <Text size="md" as="p">
                        4
                    </Text>

                </div>
                <div className="flex items-center gap-1">
                    <Text size="md" as="p">
                        Next
                    </Text>
                    <Img src="images/img_arrow_right.svg" alt="next icon" className="h-[24px] w-[24px]" />

                </div>

            </div>

        </div>
    )
}