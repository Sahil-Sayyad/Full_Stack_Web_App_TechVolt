import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { Text } from "components/Text";
import React from "react";
import { data2 } from "utils";

export default function HomepageExperiencesection(){
    return (
        <div className="mt-10 flex justify-center self-stretch pb-10 pt-[31px] sm:py-5">
            <div className="container-xs flex flex-col gap-[45px] md:p-5">
                <div className="flex flex-col items-start gap-1.5">
                    <Heading size="6xl" as="h2">
                        TechVolt Experience
                    </Heading>
                    <Text size="2xl" as="p" className="tracking-[1.40px]">
                        Tips, guides and techy deeps dives-straight from the source
                    </Text>

                </div>
                <div className="flex gap-10 md:flex-col">
                    {data2.map((d,index)=>(
                        <div key={"productList" + index} className="relative h-[576px] w-full md:h-auto">
                            <Img src={d.tvImage} alt="tv image" className="h-[576px] w-full rounded-[20px] object-cover"/>
                            <Heading size="2xl" as="h3" className="absolute bottom-[6%] left-[8%] m-auto !text-white-A700">
                                {d.tvDescription}
                            </Heading>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}