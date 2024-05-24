import React from "react";
import HomepageTab from "components/HomepageTab";
import HomepageCompleteyour from "components/HomepageCompleteyour";
import { Button } from "components/Button";
import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { Slider } from "components/Slider";
import { Text } from "components/Text";
import { data1 } from "utils";

export default function HomepageHightlights(){

    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    return (

        <div className="mt-20 flex flex-col items-center self-stretch pb-10 pt-[31px] sm:py-5">

            <div className="container-xs flex flex-col gap-12 md:p-5">

                <div className="flex w-[64%] flex-col items-start gap-1 md:w-full">

                    <Heading size="6xl" as="h2">
                        HighLights
                    </Heading>

                    <HomepageTab text3="Air Care" text4="OLED evo" className="self-stretch"/>

                </div>

                <div className="flex w-full max-w-[1360px]">

                    <Slider
                       autoPlay
                       autoPlayInterval={2000}
                       responsive={{ 0: { items: 1}, 550: {items: 1}, 1050:{ items: 1}}}
                       disableDotsControls
                       activeIndex ={sliderState}
                       onSlideChanged = {(e) => {
                        setSliderState(e?.item);
                       }}
                       ref={sliderRef}
                       items={[...Array(3)].map(() => 
                        <React.Fragment key={Math.random()}>
                            <div className="flex flex-col gap-6 rounded-[15px] border-2 border-solid border-gray-400 bg-gray-300_02">

                                <Img src="images/img_image_7.png" alt="image one" className="h-[566px] rounded-tl-[30px] object-cover"/>

                                <div className="flex flex-col items-center gap-[13px] pb-10 sm:pb-5">

                                    <Heading size="4xl" as="h3">
                                        Complete your space
                                    </Heading>

                                    <Text size="3xl" as="p" className="!font-normal !text-gray-700">
                                        TechVolt Object Colletion 
                                    </Text>
                                    
                                    <Button color="deep_orange_A700" className="min-w-[170px] font-inter font-medium sm:px-5">
                                        Buy now
                                    </Button>

                                </div>

                            </div>
                        </React.Fragment>
                       )}
                    /> 
                        

                </div>

                <div className="flex gap-12 md:flex-col">

                    { data1.map( ( d , index ) => (

                        <HomepageCompleteyour {...d} key={"listSection" + index}/>

                    ))}

                </div>

            </div>
        
        </div>
    )
}