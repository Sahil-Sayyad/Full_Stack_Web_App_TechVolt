import React from "react";
import { Img } from "../Img";
import { Text } from "../Text";

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
          <Img
            src="images/img_header_logo.png"
            alt="header logo"
            className="h-[50px] w-[223px] object-contain"
          />
          <div className="flex pr-2.5">
            <ul className="flex flex-wrap items-center gap-10">
              <li>
                <a
                  href="#"
                  className="border-b-2 border-solid border-deep_orange-A700"
                >
                  <Text
                    size="2xl"
                    as="p"
                    className="p-[11px] tracking-[1.40px]"
                  >
                    {home}
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-solid border-deep_orange-A700"
                >
                  <Text
                    size="2xl"
                    as="p"
                    className="p-[11px] tracking-[1.40px]"
                  >
                    {shop}
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-solid border-deep_orange-A700"
                >
                  <Text
                    size="2xl"
                    as="p"
                    className="p-[11px] tracking-[1.40px]"
                  >
                    {accessories}
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-solid border-deep_orange-A700"
                >
                  <Text
                    size="2xl"
                    as="p"
                    className="p-[11px] tracking-[1.40px]"
                  >
                    {aboutus}
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-solid border-deep_orange-A700"
                >
                  <Text
                    size="2xl"
                    as="p"
                    className="p-[11px] tracking-[1.40px]"
                  >
                    {contactus}
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
