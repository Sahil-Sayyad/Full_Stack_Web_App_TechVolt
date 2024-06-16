/* eslint-disable react/no-unescaped-entities */
import HomepageHeader from "components/HomepageHeader";
import HomepageFootersection from "components/HomepageFootersection";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Heading } from "components/Heading";
import { Link } from "react-router-dom";

export default function SignInPage() {
    return (
        <>
            {/* Main Header Section */}
            <div className="flex w-full flex-col items-center gap-10 bg-white-A700">
                <HomepageHeader productdetailstext="Sign In" className="self-stretch" />

                {/* Sign In Section */}
                <div className="container-xs flex justify-center px-[343px] md:p-5 md:px-5">
                    <div className="flex w-full flex-col items-center gap-[33px] rounded-[11px] border border-solid border-blue_gray-100_01 bg-gray-100 p-8 sm:p-5">
                        <Img src="images/img_header_logo.png" alt="header logo" className="h-[50px] w-[223px] object-contain" />
                        <div className="flex flex-col items-start gap-6 self-stretch">
                            <a href="#">
                                <Heading size="3xl" as="h1" className="!text-blue_gray-900">
                                    Sign In
                                </Heading>
                            </a>
                            <div className="mt-[25px] flex flex-col gap-[31px] self-stretch">

                                <div className="flex gap-4 md:flex-col">
                                    <div className="flex w-full flex-col items-start gap-2">
                                        <Text as="p" className="!text-black-900">
                                            Email Address
                                        </Text>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder={`Email Address`}
                                            className="self-stretch rounded-[7px]  font-medium border border-blue_gray-100_01 sm:pr-5 p-3" />

                                    </div>


                                </div>

                            </div>
                            <div className="flex w-full flex-col items-start gap-[7px] self-stretch">
                                <Text as="p" className="!text-black-900">
                                    Password
                                </Text>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder={`Password`}
                                    className=" self-stretch rounded-[7px] font-medium border border-blue_gray-100_01 sm:pr-5 p-3" />
                                <Text as="p" className="!font-medium">
                                    Forgot Password?
                                </Text>

                            </div>

                            <Button
                                color="deep_orange_A700"
                                size="3xl"
                                className="mt-9 w-full font-poppins font-bold sm:px-5">
                                Sign In
                            </Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                            <Text as="p">Don't have an account?</Text>
                            <a href="#">
                                <Heading as="h2" className="!text-deep_orange-A700">
                                    <Link to="signIn">
                                        Sign Up
                                    </Link>
                                </Heading>
                            </a>

                        </div>

                    </div>

                </div>
                {/* Footer Section */}
                <HomepageFootersection />
            </div>
        </>
    )
}