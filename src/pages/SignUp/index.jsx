import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { Heading } from "components/Heading";
import HomepageFootersection from "components/HomepageFootersection";
import HomepageHeader from "components/HomepageHeader";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Text } from "components/Text";
import React from "react";


export default function SignUpPage(){
    return (
        <>
            <div className="flex w-full flex-col items-center gap-10 bg-white-A700">
                {/* Main Header Section */}
                <HomepageHeader productdetailstext="Sign Up" className="self-stretch"/>

                {/* Sign Up Section */}
                <div className="container-xs flex justify-center px-[343px] md:p-5 md:px-5">
                    <div className="flex w-full flex-col items-center gap-[33px] rounded-[11px] border border-solid border-blue_gray-100_01 bg-gray-100 p-8 sm:p-5">
                        <Img src="images/img_header_logo.png" alt="header logo" className="h-[50px] w-[223px] object-contain"/>
                        <div className="flex flex-col items-start gap-6 self-stretch">
                            <a href="#">
                                <Heading size="3xl" as="h1" className="!text-blue_gray-900">
                                    Sign Up
                                </Heading>
                            </a>
                            <div className="mt-[25px] flex flex-col gap-[31px] self-stretch">
                                <div className="flex gap-4 md:flex-col">
                                    <div className="flex w-full flex-col items-start gap-2">
                                        <Text as="p" className="!text-black-900">
                                            First Name
                                        </Text>
                                        <Input 
                                            type="text"
                                            name="FirstName"
                                            placeholder={`First Name`}
                                            className="self-stretch rounded-[7px]  font-medium border border-blue_gray-100_01 sm:pr-5 p-3"/>

                                    </div>
                                    <div className="flex w-full flex-col items-start gap-[7px]">
                                        <Text as="p" className="!text-black-900">
                                            Last Name
                                        </Text>
                                        <Input 
                                            type="text"
                                            name="LastName"
                                            placeholder={`Last Name`}
                                            className="self-stretch rounded-[7px] font-medium border border-blue_gray-100_01 sm:pr-5 p-3"/>

                                    </div>

                                </div>
                                <div className="flex gap-4 md:flex-col">
                                    <div className="flex w-full flex-col items-start gap-2">
                                        <Text as="p" className="!text-black-900">
                                           Email Address
                                        </Text>
                                        <Input 
                                            type="email"
                                            name="email"
                                            placeholder={`Email Address`}
                                            className="self-stretch rounded-[7px]  font-medium border border-blue_gray-100_01 sm:pr-5 p-3"/>

                                    </div>
                                    <div className="flex w-full flex-col items-start gap-[7px]">
                                        <Text as="p" className="!text-black-900">
                                            <span className="text-black-900">Phone</span>
                                            <span className="text-deep_orange-A700">*</span>
                                        </Text>
                                        <Input 
                                            type="text"
                                            name="phonenumber"
                                            placeholder={`Phone number`}
                                            prefix={<Img src="images/img_fi10597864.svg" alt="flag" className="h-[24px] w-[24px]"/>}
                                            className="gap-[10px]  self-stretch rounded-[7px] font-medium border border-blue_gray-100_01 sm:pr-5 p-3"/>

                                    </div>

                                </div>

                            </div>
                            <div className="flex w-full flex-col items-start gap-[7px]">
                                        <Text as="p" className="!text-black-900">
                                            Password
                                        </Text>
                                        <Input 
                                            type="password"
                                            name="password"
                                            placeholder={`Password`}
                                            className=" self-stretch rounded-[7px] font-medium border border-blue_gray-100_01 sm:pr-5 p-3"/>

                            </div>
                            <CheckBox
                                name="Terms Checkbox"
                                label=" By signing up I agree to the Terms & Conditions and Privacy Policy"
                                id="TermsCheckbox"
                                className="mt-10 gap-2 text-base text-gray-700 font-medium"/>
                            <Button 
                                color="deep_orange_A700"
                                size="3xl"
                                className="mt-9 w-full font-poppins font-bold sm:px-5">
                                    Sign Up
                            </Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                            <Text as="p">Already have account?</Text>
                            <a href="#">
                                <Heading as="h2" className="!text-deep_orange-A700">
                                    Sign In
                                </Heading>
                            </a>

                        </div>

                    </div>

                </div>

            </div>
            {/* Footer Section */}
            <HomepageFootersection/>
        </>
    )
}