import { Heading } from "components/Heading";
import HomepageHeader from "components/HomepageHeader";
import { Img } from "components/Img";
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
                                        <div className="h-px bg-gray-300_03"/>
                                        <div className="flex flex-col items-start gap-4">
                                            <Heading size="xs" as="h3">
                                                Price Breakdown
                                            </Heading>

                                        </div>


                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}