import HomepageHeader from "components/HomepageHeader"
import React from "react"
import ProdcutgridFiltersection from "components/ProductgridFilter"
import HomepageFootersection from "components/HomepageFootersection"


export default function ProductGridPage(){
    return(
        <>
            <div className="flex w-full flex-col gap-10 bg-white-A700">
                {/* Header Section */}
                <HomepageHeader productdetailstext="Shop"/>
                {/** Filter Section */}
                <ProdcutgridFiltersection/>
                {/* Footer Section */}
                <HomepageFootersection/>
            </div>
        
        </>
    )
}