import React from "react";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Img } from "components/Img";

export default function HomepageFantasticdeals({
    image="images/img_image_6.png",
    title = "Fantastic deals await!",
    description="Don't miss our promotions on home appliances, audio and video products",
    button="Buy now",
    ...props
}){
    return(
        <div {...props} className={`${props.className} flex flex-col items-start w-full px-5 rounded-[15px]`}>
            <Img src={image} alt="promotion image" className="h-[239px] w-full object-cover md:h-auto"/>
            <div className="flex flex-col items-start gap-[9px] self-stretch">
                <Text size="6xl" as="p" className="!text-black-900 font-inter">
                    {title}
                </Text>
                <Text as="p" className="w-full leading-6 !text-black-900 font-inter ">
                    {description}
                </Text>
            </div>
            <Button color="deep_orange_A700" className="min-w-[170px] font-inter font-medium sm:px-5 ">
                {button}
            </Button>
        </div>

    );
}