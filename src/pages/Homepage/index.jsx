import React from "react";
import HomepageHeader from "../../components/HomepageHeader";
import HomepageHerosection from "../../components/HomepageHerosection";
import HomepageFantasticdeals from "components/HomepageFantasticdeals";
import HomepageFeaturedproducts from "components/HomepageFeaturedproducts";
import HomepageHightlights from "components/HomepageHightlights";
import HomepageExperiencesection from "components/HomepageExperiencesection";
import HomepageSupportsection from "components/HomepageSupportsection";
import HomepageFootersection from "components/HomepageFootersection";
import { data } from "utils";

export default function Homepage(){
    
    const backgroundColors = ["bg-orange-100", "bg-slate-200","bg-stone-300"]; 

    return( 
        <>
            <div className="flex w-full flex-col items-center bg-white-A700 font-poppins">

                {/* Main header section */}
                <HomepageHeader productdetailstext="Shop" className="self-stretch"/>

                {/* Hero slider section */}
                <HomepageHerosection/>

                {/* Promotional section */}
                <div className="container-xs mt-20 flex gap-6 md:flex-col md:p5">
                    {data.map((d,index)=>(
                        <HomepageFantasticdeals 
                        {...d}
                        key={"productList" + index}
                        className ={`gap-[23px] py-9 md:w-full sm:py-5 ${backgroundColors[index % backgroundColors.length]}`}
                        />
                    ))}
                </div>
                
                 {/* featured products section */}
                  <HomepageFeaturedproducts/>

                 {/**Highlights Section */}
                  <HomepageHightlights/>

                 {/**Experience Section */}
                  <HomepageExperiencesection/>

                 {/**Support Section */}
                  <HomepageSupportsection/>

                 {/**Footer Section */}
                  <HomepageFootersection/>
                 
            </div>
        </>
    );
}