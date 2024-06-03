import react from "react"

import HomepageHeader from "components/HomepageHeader";
import { productData, productData2 } from "utils";


export default function ProductDetailsPage(){
    return(
        <>
         <div className="flex w-full flex-col items-center bh-white-A700">

            <div className="self-stretch">
                
                {/** main header section */}
                <HomepageHeader
                 productdetailstext="Shop"
                 arrowright="images/img_arrow_right_gray_700.svg"
                 shopTwo="Product Details"/>

                 {/* Product Title and price section */}

            </div>

         </div>
        </>
    )
}