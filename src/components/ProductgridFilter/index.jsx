import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { CheckBox } from "components/CheckBox";
import ProductListing from "components/ProductListing";
import React from "react";
import {
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    Accordion,
    AccordionItem,
} from "react-accessible-accordion";
import HomepageFootersection from "components/HomepageFootersection";

export default function ProdcutgridFiltersection(){
    return (
        <div className="flex justify-center">
            <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:p-5">
                <div className="flex w-[18%] flex-col items-start gap-3.5 pt-[7px] md:w-full">
                    <Heading size="md" as="h1" className="!font-bold">
                        Filters
                    </Heading>
                    <Accordion preExpanded={[0]} className="flex flex-col gap-3  self-stretch">
                        {[...Array(4)].map((_,i)=>(
                            <AccordionItem uuid={i} key={`Expandable List${i}`}>
                                <div className="flex flex-1 flex-col items-start gap-3">
                                    <AccordionItemHeading className="w-full">

                                    <AccordionItemButton>
                                        <AccordionItemState>
                                            {(props) => (
                                                <>
                                                    <div className="flex flex-wrap justify-between gap-5 self-stretch border-t border-solid border-gray-400_01 pb-[11px] pt-3">
                                                        <Text as="p" className="!font-medium    !text-black-900">
                                                            Brands
                                                        </Text>
                                                        {props?.expanded?(
                                                            <Img src="images/img_arrow_up_black_900_02.svg" alt="expand icon" className="h-[24px] w-[24px]"/>
                                                        ):(
                                                            <Img src="images/img_arrow_up_black_900_02.svg" alt="collapse icon" className="h-[24px] w-[24px] self-start"/>

                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </AccordionItemState>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="flex w-[50%] flex-col items-start gap-[19px] md:w-full">
                                        <div className="flex flex-col gap-[18px] self-stretch">
                                            <CheckBox name="LG Checkbox" label="LG" id="LGCheckbox" className="gap-4 text-base text-gray-700 "/>
                                            <CheckBox name="Samsung Checkbox" label="Samsung" id="Sams  ungCheckbox" className="gap-4 p-px text-base text-gray-700 "/>
                                            <CheckBox name="Panasonic Checkbox" label="Panasonic" id="PanasonicCheckbox" className="gap-4 text-base text-gray-700 "/>
                                            <CheckBox name="Whirlpool Checkbox" label="Whirlpool" id="WhirlpoolCheckbox" className="gap-4 text-base text-gray-700 "/>


                                        </div>
                                        <a href="#">
                                            <Text as="p" className="!text-black-900 underline">
                                                See all
                                            </Text>
                                        </a>

                                    </div>
                                </AccordionItemPanel>

                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
                {/* Product listing section */}
                <ProductListing/>
                
            </div>

        </div>
    )
}