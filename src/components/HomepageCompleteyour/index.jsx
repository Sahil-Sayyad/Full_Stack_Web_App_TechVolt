import React from "react"
import { Text } from "components/Text"
import { Img } from "components/Img"

export default function HomepageCompleteyour({
    image="images/img_image_7_318x421.png",
    text1="Complete you space",
    text2 ="TechVolt Object Colletion",
    ...props
}){
    return (
        <div {...props} className={`${props.className}flex flex-col w-full gap-6`}>
            <Img src={image} alt="featured image" className="h-[318px] w-full rounded-[20px] object-cover md:h-auto"/>
            <div className="flex flex-col items-start gap-1.5">
                <Text size="4xl" as="p" className="!text-black-900">
                    {text1}
                </Text>
                <Text size="xl" as="p" className="!text-black-700">
                    {text2}
                </Text>
            </div>

        </div>
    )
}