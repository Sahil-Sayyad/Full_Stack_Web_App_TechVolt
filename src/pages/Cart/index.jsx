import { Button } from "components/Button";
import { Heading } from "components/Heading";
import HomepageFootersection from "components/HomepageFootersection";
import HomepageHeader from "components/HomepageHeader";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";

export default function CartPage() {
    return (
        <>
            <div className="flex w-full flex-col gap-[39px] bg-white-A700">
                {/*Header Section */}
                <HomepageHeader arrowright="images/img_arrow_right_gray_700.svg" shopTwo="Shopping Cart" />

                <div className="flex flex-col items-center gap-[39px]">

                    <Img className="container-xs h-[96px] md:h-auto md:p-5" src="images/img_stepper.svg" alt="step indicator" />

                    {/* Product details section */}
                    <div className="flex justify-center self-stretch">
                        <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:p-5">
                            <div className="flex flex-1 items-start gap-10 md:flex-col md:self-stretch">
                                <Img src="images/img_image_3_149x149.png" alt="product image" className="h-[94px] w-[10%] rounded-md object-cover md:w-full" />
                                <div className="flex flex-1 flex-col items-end gap-6 md:self-stretch">
                                    <div className="flex flex-col gap-[23px] self-stretch">
                                        <div className="flex items-start justify-between gap-5 md:flex-col">
                                            <div className="flex flex-1 flex-col gap-4 md:self-stretch">
                                                <div className="flex flex-col items-start gap-[9px]">
                                                    <Heading as="h1" className="w-full leading-6">
                                                        7kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
                                                    </Heading>
                                                    <Text size="xs" as="p" className="!font-medium !text-gray-700">
                                                        Fulfilement By: TechVolt India Electronics Pvt. Ltd.
                                                    </Text>

                                                </div>
                                                <div className="flex flex-col items-start gap-1.5">
                                                    <Text size="xs" as="p" className="!font-medium">
                                                        Free Delivery: By Wed, Apr 24th
                                                    </Text>
                                                    <Text size="xs" as="p" className="!font-medium">
                                                        Installation & Demo: By Thu, Apr 25th
                                                    </Text>

                                                </div>

                                            </div>
                                            <div className="flex flex-col items-end gap-[3px]">
                                                <Heading size="md" as="h2">
                                                    ₹26490.00
                                                </Heading>
                                                <div className="flex flex-wrap gap-[7px] self-start">
                                                    <Text size="xs" as="p" className="!font-medium !text-teal-400">
                                                        Save ₹14500.00
                                                    </Text>
                                                    <Text size="xs" as="p" className="!text-gray-700 line-through">
                                                        ₹40990.00
                                                    </Text>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="h-px bg-gray-300_03" />
                                        <div className="flex flex-col items-start gap-4">
                                            <Heading size="xs" as="h3">
                                                Price Breakdown
                                            </Heading>
                                            <div className="flex flex-col gap-1 self-stretch">
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Text size="xs" as="p" className="!font-medium !text-gray-700">
                                                        Price (Inclusive of all taxes)
                                                    </Text>
                                                    <Text size="xs" as="p" className="!font-medium !text-gray-700">
                                                        ₹40990.00
                                                    </Text>

                                                </div>
                                                <div className="flex flex-wrap justify-between ga-5">
                                                    <Text size="xs" as="p" className="!font-medium !text-gray-700">
                                                        Promotional Discount(s)
                                                    </Text>
                                                    <Text size="xs" as="p" className="!font-medium !text-gray-700">
                                                        -₹14500.00
                                                    </Text>

                                                </div>
                                                <div className="flex flex-wrap justify-between ga-5">
                                                    <Text size="xs" as="p" className="!font-medium !text-gray-700">
                                                        Discount
                                                    </Text>
                                                    <Text size="xs" as="p" className="!font-medium !text-gray-700">
                                                        -₹750.00
                                                    </Text>

                                                </div>


                                            </div>

                                        </div>
                                        <div className="h-px bg-gray-300_03" />




                                    </div>

                                </div>

                            </div>
                            <div className="flex w-[39%] flex-col gap-[37px] rounded-[16px] border border-solid border-black-900_02 bg-gray-100 px-[23px] pb-6 pt-[23px] md:w-full sm:p-5">
                                <div className="flex flex-col gap-[23px]">
                                    <div className="flex justify-between gap-5">
                                        <div className="flex flex-col items-start gap-2">
                                            <Heading size="2xl" as="h4">
                                                Total
                                            </Heading>
                                            <Text as="p" className="!text-gray-700">
                                                Includes GST*
                                            </Text>

                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <Heading size="2xl" as="h4">
                                                ₹26490.00
                                            </Heading>
                                            <div className="flex flex-wrap gap-[7px] self-start">
                                                <Text as="p" className="!text-gray-700 line-through">
                                                    ₹40990.00
                                                </Text>

                                                <Text as="p" className="!font-medium !text-teal-400">
                                                    Save ₹14500.00
                                                </Text>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="h-px bg-gray-400_01" />
                                    <Input
                                        size="lg"
                                        name="Coupon Code Field"
                                        placeholder={`Apply coupon code`}
                                        prefix={<Img src="images/img_fi_11370591.svg" alt="fi_11370591" className="h-[30px] w-[30px]" />}
                                        className="gap-2 rounded-md border border-black-900_02 font-light p-3" />
                                    <Heading as="h6">Price Breakup</Heading>

                                    <div className="flex flex-col gap-1.5 self-stretch">
                                        <div className="flex flex-wrap justify-between gap-5">
                                            <Text as="p" className="!text-gray-700">
                                                Price (Inclusive of all taxes)
                                            </Text>
                                            <Heading as="h6">₹40990.00</Heading>

                                        </div>
                                        <div className="flex flex-wrap justify-between gap-5">
                                            <Text as="p" className="!text-gray-700">
                                                Discount
                                            </Text>
                                            <Heading as="h6" className="!text-teal-400">
                                                -₹14500.00
                                            </Heading>

                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-5">
                                            <Text as="p" className="!text-gray-700">
                                                Shipping Charges
                                            </Text>
                                            <Heading as="h6">₹40.00</Heading>

                                        </div>

                                    </div>


                                </div>

                                <Button
                                    color="deep_orange_A700"
                                    size="3xl"
                                    className="w-full !rounded-[11px] font-bold sm:px-5">
                                    Next
                                </Button>
                            </div>


                        </div>

                    </div>

                </div>

               {/**Footer Section */}
               <HomepageFootersection/>

            </div>
        </>
    )
}