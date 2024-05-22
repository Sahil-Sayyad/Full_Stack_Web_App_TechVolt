import React from "react";
import HomepageHeader from "../../components/HomepageHeader";
import HomepageHerosection from "../../components/HomepageHerosection";
import HomepageFantasticdeals from "components/HomepageFantasticdeals";
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
            </div>
        </>
    )
}