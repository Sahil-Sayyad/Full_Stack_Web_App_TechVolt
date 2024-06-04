
import { Button } from "components/Button";
import { Heading } from "components/Heading";
import HomepageHeader from "components/HomepageHeader";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { productData, productData2 } from "utils";


export default function ProductDetailsPage(){
    return(
        <>
         <div className="flex w-full flex-col items-center bh-white-A700">

            <div className="self-stretch">

                {/** main header section */}
                <HomepageHeader
                 productdetailstext="Shop"
                 arrowright="images/img_arrow_right_gray_700.svg"
                 shopTwo="Product Details"/>

                 {/* Product Title and price section */}
                 <div className="flex justify-center border-b border-solid border-gray-200  bg-gray-300_04 py-6 sm:py-5">
                    <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                        <Heading size="2xl" as="h1" className="w-[48%] leading-9 md:w-full">
                            7kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
                        </Heading>
                        <div className="flex items-center gap-4 md:flex-col">
                            <div className="flex flex-col items-end gap-2">
                                <Heading size="lg" as="h2">
                                    ₹26490.00
                                </Heading>
                                <div className="flex gap-[7px] self-start sm:flex-col">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Text as="p" className="!text-gray-700">
                                            MRP (Inclusive of all taxes)
                                        </Text>
                                        <Text as="p" className="!text-gray-700 line-through">
                                            ₹40990.00
                                        </Text>

                                    </div>
                                    <Text as="p" className="!font-medium !text-teal-400">
                                            Save ₹14500.00
                                    </Text>

                                </div>

                            </div>
                            <a href="">
                                <Button color="deep_orange_A700" className="min-w-[175px] font-mono font-bold sm:px-5">
                                    Add to Basket
                                </Button>
                            </a>

                        </div>

                    </div>

                 </div>
            </div>
            {/* Product specification section */}
            <div className="mt-10 flex flex-col gap-10 self-stretch">
                {/* Product images and details section */}
                <div className="flex flex-col items-center">
                    <div className="container-xs flex items-start gap-10 md:flex-col md:p-5">
                        <div className="flex w-full flex-col gap-4">
                            <Img src="images/img_image_3.png" alt="main image" className="h-[656px] object-cover"/>
                            <div className="flex gap-5 md:flex-col" >

                                {[...Array(4)].map((d,index) => (
                                    <Img 
                                    key={"imageList" + index}
                                    src="images/img_image_3_149x149.png"
                                    alt="thumbnail image"
                                    className="h-[149px] w-[23%] rounded-md object-cover md:w-full"/>
                                ))}

                            </div>

                        </div>
                        <div className="flex w-full flex-col gap-[42px]">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-6 md:flex-col">
                                    <Heading size="2xl" as="h2" className="w-[92%] leading-9 md:w-full">
                                        7kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
                                    </Heading>
                                    <a href="">
                                        <Button size="2xl" className="w-[52px] !rounded-[26px] border border-solid border-gray-400_01">
                                            <Img src="images/img_favorite.svg"/>
                                        </Button>
                                    </a>

                                </div>
                                <Text as="p" className="leading-6">
                                    <>
                                    No Cost EMI start from ₹ 7065.42 / month.
                                    <br/>
                                    Auto Dispenser
                                    <br/>
                                    AI Wash
                                    <br/>
                                    AI EcoBubble
                                    </>
                                </Text>

                            </div>
                            <div className="flex flex-col items-start gap-3.5">
                                <Heading size="xl" as="h3">
                                    Choose body color
                                </Heading>
                                <Heading size="xs" as="h4" className="!text-black-900_02">
                                    <span className="text-black-900_02">Colour :&nbsp;</span>
                                    <span className="font-normal text-black-900_02">Black Caviar</span>
                                </Heading>
                                <div className="flex gap-4 self-stretch">
                                    <div className="w-[7%] rounded-[24px] border border-solid border-black-900 p-0.5">
                                        <div className="h-[44px] w-[44px] rounded-[22px] border border-solid border-blue-gray-100 bg-black-900_02"/>
                                    </div>
                                    <Img src="images/img_inbox.svg" alt="inbox icon" className="h-[48px] w-[48px]"/>

                                </div>

                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <Heading size="xl" as="h5">
                                    Choose washer/dryer capacity
                                </Heading>
                                <div className="flex gap-4 self-stretch md:flex-col">
                                    <Button 
                                        color="gray_300_04"
                                        className="w-full border border-solid border-black-900_02 font-semibold sm:px-5">
                                      11.0kg        
                                    </Button> 
                                    <Button 
                                        className="w-full border border-solid border-black-900_02 font-semibold sm:px-5">
                                      11.0kg        
                                    </Button>
                                    <Button 
                                        className="w-full border border-solid border-black-900_02 font-semibold sm:px-5">
                                      8.0kg        
                                    </Button>

                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <Heading size="xl" as="h6">
                                    Choose door/lid colour
                                </Heading>
                                <div className="flex gap-4">
                                    <Button
                                        color="gray_300_04"
                                        className="min-w-[210px] border border-solid border-black-900_02 font-semibold sm:px-5">
                                        Black
                                    </Button>
                                    <Button
                                        className="min-w-[210px] border border-solid border-black-900_02 font-semibold sm:px-5">
                                        Blue
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-3.5">
                                <Heading size="xl" as="h5">
                                    Delivery Details
                                </Heading>
                                <div className="flex items-center gap-4 self-stretch md:flex-col">
                                    <Input
                                        color="black_900_02"
                                        size = "xs"
                                        variant = "outline"
                                        shape="square"
                                        type="number"
                                        name="Pincode Input"
                                        placeholder={`Enter PinCode`}
                                        className = "flex-grow self-end sm:pr-5 font-medium"/>
                                        <Button 
                                            color="black_900_02"
                                            size="lg"
                                            className="min-w-[164px] rounded-[11px] border border-solid border-black-900_02 font-medium text-white-A700 sm:px-5">
                                                Apply
                                            </Button>
                                </div>

                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <Heading size="xl" as="h5">
                                    Offers
                                </Heading>
                                <div className="flex flex-col gap-4 self-stretch">
                                    <div className="flex flex-1 items-center justify-evenly gap-5 rounded-md border border-solid border-gray-500 pb-[13px] pt-[15px] sm:flex-col">
                                        <Img src="images/img_bag.svg" alt="offer icon" className="h-[40px] w-[40px] sm:w-full"/>
                                        <div className="flex flex-col items-start gap-[5px]">
                                            <Text as="p" className="!font-medium">
                                                No Cost EMI starts from ₹7065.42 / month.
                                            </Text>
                                            <Text as="p" className="!font-medium">
                                                Standard EMI starts from ₹2569.79 / month.
                                            </Text>
                                            <Text as="p" className="!font-medium">
                                                EMI also avialable on Debit cards
                                            </Text>
                                            <a href="#">
                                            <Text as="p" className="!font-medium underline">
                                                Learn more
                                            </Text>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-evenly gap-5 rounded-md border border-solid border-gray-500 pb-[13px] pt-[15px] sm:flex-col">
                                        <Img src="images/img_bag.svg" alt="offer icon" className="h-[40px] w-[40px] sm:w-full"/>
                                        <div className="flex flex-col items-start gap-[5px]">
                                            <Text as="p" className="!font-medium">
                                                Instant Bank Discount.
                                            </Text>
                                            <Text as="p" className="!font-medium !text-gray-700">
                                                <span className="font-normal text-gray-700">Get&nbsp;</span>
                                                <span className="text-black-900_02">20%</span>
                                                <span className="font-normal text-gray-700">&nbsp;Instant Discount up to to&nbsp;</span>
                                                <span className="text-black-900_02">₹12000</span>
                                                <span className="font-normal text-gray-700">&nbsp;on Leading Banks Cards EMI</span>
                                            </Text>
                                            <a href="#">
                                                <Text as="p" className="!font-medium underline">
                                                    Learn more
                                                </Text>
                                            </a>

                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-evenly gap-5 rounded-md border border-solid border-gray-500 pb-[13px] pt-[15px] sm:flex-col">
                                        <Img src="images/img_bag.svg" alt="offer icon" className="h-[40px] w-[40px] sm:w-full"/>
                                        <div className="flex flex-col items-start gap-[5px]">
                                            <Text as="p" className="!font-medium">
                                                Instant Bank Discount.
                                            </Text>
                                            <Text as="p" className="!font-medium !text-gray-700">
                                                <span className="font-normal text-gray-700">Get&nbsp;</span>
                                                <span className="text-black-900_02">20%</span>
                                                <span className="font-normal text-gray-700">&nbsp;Instant Discount up to to&nbsp;</span>
                                                <span className="text-black-900_02">₹12000</span>
                                                <span className="font-normal text-gray-700">&nbsp;on Leading Banks Cards EMI</span>
                                            </Text>
                                            <a href="#">
                                                <Text as="p" className="!font-medium underline">
                                                    Learn more
                                                </Text>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-px bg-gray-300_03" />
                            <div className="flex flex-col items-start gap-3.5">
                                <div className="flex items-center gap-2.5">
                                    <Text size="xl" as="p" className="!font-medium">
                                        Manufacturer&#39;s Information
                                    </Text>
                                    <Img src="images/img_frame.svg" alt="manufacturer icon" className="h-[24px] w-[24px] self-end"/>
                                </div>
                                <div className="flex flex-col items-start gap-[5px] self-stretch">
                                    <Text size="xl" as="p" className="!font-medium">
                                        Cancellation & Replacement Policy
                                    </Text>
                                    <div className="flex flex-col">
                                        <Text size="xs" as="p" className=" !text-gray-700">
                                            <span className="text-gray-700">
                                             Cancel order up to 60 mins. from order confirmation.&nbsp;
                                            </span>
                                            <a href="#" className="text-deep_orange-A700 underline">
                                                Know more
                                            </a>
                                            <span className="text-deep_orange-A700">.</span>
                                        </Text>
                                        <Text size="xs" as="p" className="flex !text-gray-700">
                                            <span className="text-gray-700">
                                                Replacement if found damaged/defective on delivery .&nbsp;
                                            </span>
                                            <a href="#" className="text-deep_orange-A700 underline"> 
                                                Know more
                                            </a>
                                            <span className="text-deep_-orange-A700">.</span>
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-[7px]">
                                    <Text size="xl" as="p" className="!font-medium">
                                        Warranty Policy
                                    </Text>
                                    <Text size="xs" as="p" className=" !text-gray-700">
                                            <span className="text-gray-700">
                                             2 Years comprehensive Warranty on product, 20 Years Warranty on Digital Inverter Motor.&nbsp;
                                            </span>
                                            <a href="#" className="text-deep_orange-A700 underline">
                                                Know more
                                            </a>
                                            <span className="text-deep_orange-A700">.</span>
                                    </Text>
                                </div>
                                <a href="#">
                                    <Text as="p" className="!font-medium underline">
                                        Learn more
                                    </Text>
                                </a>
                            </div>
                            <div className="flex flex-col gap-[39px] rounded-[11px] border border-solid border-black-900_02 bg-gray-100 p-6 sm:p-5">
                                <div className="flex flex-col items-start gap-5">
                                    <div className="flex flex-col gap-[7px] self-stretch">
                                        <Heading size="lg" as="h5" className="leading-[30px]">
                                            7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
                                        </Heading>
                                        <div className="flex items-start gap-4">
                                            <Text as="p" className="!text-gray-700">
                                                Black Caviar
                                            </Text>
                                            <div className="h-[20px] w-px bg-black-900"/>
                                            <Text as="p" className="!text-gray-700">
                                                11.0 kg
                                            </Text>
                                            <div className="h-[20px] w-px bg-black-900"/>
                                            <Text as="p" className="!text-gray-700">
                                                Black
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="h-px w-full self-stretch bg-gray-400_01"/>
                                    <div className="flex flex-col items-start gap-2">
                                        <Heading size="2xl" as="h4" className="!text-black-900_02">
                                            ₹26490.00
                                        </Heading>
                                        <div className="flex gap-[7px] self-start sm:flex-col">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <Text as="p" className="!text-gray-700">
                                                    MRP (Inclusive of all taxes)
                                                </Text>
                                                <Text as="p" className="!text-gray-700 line-through">
                                                    ₹40990.00
                                                </Text>

                                            </div>
                                            <Text as="p" className="!font-medium !text-teal-400">
                                                    Save ₹14500.00
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-10 md:flex-col">
                                    <div className="flex w-[30%] flex-wrap items-center justify-between gap-5 rounded-[24px] border border-solid border-gray-400_01 bg-white-A700 px-5 pb-[13px] pt-3.5 md:w-full">
                                        <Img src="images/img_arrow_down.svg" alt="decrease quantity" className="h-[20px] w-[20px]"/>
                                        <Heading as="h6" className="!text-black-900_02">
                                            1
                                        </Heading>
                                        <Img src="images/img_plus.svg" alt="increase quantity" className="h-[20px] w-[20px]"/>
                                    </div>
                                    <Button color="deep_orange_A700" size="3xl" className="min-w-[404px] !rounded-[15px] font-poppins font-bold sm:px-5">
                                        Add to Basket
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[39px]">
                    <div className="h-px bg-gray-300_03"/>
                    <div>
                        
                    </div>

                </div>

            </div>

         </div>
        </>
    )
}