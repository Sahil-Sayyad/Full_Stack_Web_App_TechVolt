import React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import { NavLink } from "react-router-dom";

export default function HomepageHeader({

  home = "Home",
  shop = "Shop",
  accessories = "Accessories",
  aboutus = "About Us",
  contactus = "Contact Us",
  hometext = "Home",
  productdetailstext = "Product Details",
  arrowright,
  shopTwo,
  ...props

}) {

  return (
    <div {...props}>
      
      <header className="flex items-center justify-center self-strecth border-b border-gray-200 bg-white-A700 py-10 sm:py-5">

        <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">

          <Img src="images/img_header_logo.png" alt="header logo"className="h-[50px] w-[223px] object-contain"/>

          <div className="flex pr-2.5">

            <ul className="flex flex-wrap items-center gap-10">

              <li>
                 <NavLink to="/" >

                  <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                    {home}
                  </Text>
                   </NavLink>
              </li>

              <li>
                <NavLink to="/productgrid" className={() =>
                                        `border-b-2 border-t-lime-500`
                                    }>
                  <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                    {shop}
                  </Text>
                </NavLink>
                  
              </li>

              <li>
                <a href="#" className="border-b-2 border-solid border-deep_orange-A700">
                  <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                    {accessories}
                  </Text>
                </a>
              </li>

              <li>
                <a href="#" className="border-b-2 border-solid border-deep_orange-A700">
                  <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                    {aboutus}
                  </Text>
                </a>
              </li>

              <li>
                <a href="#"className="border-b-2 border-solid border-deep_orange-A700">
                  <Text size="2xl"as="p"className="p-[11px] tracking-[1.40px]">
                    {contactus}
                  </Text>
                </a>
              </li>

            </ul>

          </div>

          <div className="flex w-[13%] justify-between gap-5 md:w-full">

            <a href="#" >
              <Img src="images/img_search.svg" alt="search icon" className="h-[32px] w-[32px]"/>
            </a>

            <a href="#" >
              <Img src="images/img_bag.svg" alt="bag icon" className="h-[32px] w-[32px]"/>
            </a>
            <a href="#" >
              <Img src="images/img_lock.svg" alt="lock icon" className="h-[32px] w-[32px]"/>
            </a>
          </div>

        </div>

      </header>

      <div className="flex justify-center self-stretch border-b border-solid border-gray-200 bg-white-A700 pb-[13px] pt-[15px]">
        <div className="container-xs flex md:p-5">
          <div className="flex flex-wrap items-start gap-1.5 sm:flex-col">
            <Text size="xl" as="p" className="capitalize !text-gray-700">
              {hometext}
            </Text>
            <Img src="images/img_arrow_right_gray_700.svg" alt="arrow right" className="h-[33px] w-[30px] sm:w-full"/>
            <Text size="xl" as="p" className="!font-medium capitalize !text-gray-700">
              {productdetailstext}
            </Text>
            {!!arrowright ? <Img src={arrowright} alt="arrow right" className="h-[33px] w-[30px] sm:w-full" /> : null}
            {!!shopTwo ? (
               <Text size="xl" as="p" className="!font-medium capitalize ">
               {shopTwo}
              </Text>
            ): null}
          </div>
        </div>
      </div>

    </div>
  );
}
