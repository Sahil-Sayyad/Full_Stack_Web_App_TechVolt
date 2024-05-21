import React from "react";
import HomepageHeader from "../../components/HomepageHeader";
export default function Homepage(){
    return(
        <>
            <div className="flex w-full flex-col items-center bg-white-A700">
                {/* main header section */}
                <HomepageHeader productdetailstext="Shop" className="self-stretch"/>
            </div>
        </>
    )
}