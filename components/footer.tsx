import Link from "next/link"
import Wave2 from "./assets/wave2"

const Footer = () => {
    return <div className="space-y-[-1px]">
        <Wave2 props={{
            className: "fill-gray-700 mx-[-1px]"
        }} />
        <div className="bg-gray-700 p-8 divide-y divide-gray-500 w-full">
            <div className="grid place-items-center mb-8">
                <div className="md:flex md:space-x-[100px] xl:space-x-[300px] md:space-y-0 space-y-8">
                    <div className="md:space-y-6 space-y-3">
                        <h3 className="text-2xl text-white font-bold">
                            Landersweb
                        </h3>
                        <div className="md:space-y-4 space-y-2 text-white text-sm">
                            <a href=" mailto:success@landersweb.com">
                                success@landersweb.com
                            </a>
                            <p>
                                Portland, OR
                            </p>
                            <p>
                                503-926-2641
                            </p>
                            <p>
                                503-866-2580
                            </p>
                        </div>
                    </div>

                    <div className="md:space-y-6 space-y-3">
                        <h3 className="text-2xl text-white font-bold">
                            Technologies
                        </h3>
                        <div className="md:space-y-4 space-y-2 text-white text-sm">
                            <p>
                                <a href="/mobile" className="underline hover:opacity-50 transition-opacity">
                                    Flutter
                                </a>
                            </p>
                            <p>
                                <a href="/mobile" className="underline hover:opacity-50 transition-opacity">
                                    SwiftUI
                                </a>
                            </p>
                            <p>
                                <a href="/web" className="underline hover:opacity-50 transition-opacity">
                                    .NET
                                </a>
                            </p>
                            <p>
                                <a href="/mobile" className="underline hover:opacity-50 transition-opacity">
                                    UIKit
                                </a>
                            </p>
                            <p>
                                <a href="/dynamodb" className="underline hover:opacity-50 transition-opacity">
                                    AWS DynamoDB
                                </a>
                            </p>
                            <p>
                                MongoDB
                            </p>
                            <p>
                                MySQL
                            </p>
                            <p>
                                GraphQL
                            </p>
                            <p>
                                Apache
                            </p>
                        </div>
                    </div>
                    <div className=" md:space-y-6 space-y-3">
                        <h3 className="text-2xl text-white font-bold">
                            Services
                        </h3>
                        <div className="md:space-y-4 space-y-2 text-white text-sm">
                            <p>
                                <a href="/mobile" className="underline hover:opacity-50 transition-opacity">
                                    Mobile App Development
                                </a>
                            </p>
                            <p className="underline hover:opacity-50 transition-opacity">
                                <a href="/web" className="underline hover:opacity-50 transition-opacity">
                                    Web Development
                                </a>
                            </p>
                            <p>
                                Database Development
                            </p>
                            <p>
                                Database Management
                            </p>
                            <p>
                                App Management
                            </p>
                            <p>
                                E-Commerce
                            </p>
                            <p>
                                SEO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <h4 className="m-8 text-gray-300">
                    Powered by Landersweb
                </h4>
            </div>
        </div>
    </div>
}

export default Footer