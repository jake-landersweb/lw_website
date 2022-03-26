import Form from "../../components/misc/form"
import ImageWrapper from "../../components/misc/image"
import ProductItem from "../../components/products/product_item"
import TechWrapper from "../../components/technologies/tech_wrapper"

const Mobile = () => {
    return <>
        <TechWrapper props={{
            content: <>
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h1 className="text-2xl xs:text-4xl font-bold">
                            Mobile Development
                        </h1>
                        <h3 className="text-xl xm:text-2xl font-medium">
                            This is where Landersweb turns your idea into a fully scalable, native mobile app experience.
                        </h3>
                    </div>
                    <ProductItem props={{
                        title: "SwiftUI",
                        description: "",
                        action: <>
                            <div className="">
                                <p className="text-xl font-medium">
                                    Using the latest technology from apple, we can build you a truly native iOS, iPadOS, and MacOS experience. SwiftUI was released from Apple in late 2019, and LandersWeb has been developing using this toolkit since the very beginning. Let the experts build a truly unified experience for users on all Apple platforms.
                                </p>
                            </div>
                        </>,
                        color: "",
                        content: <>
                            <ImageWrapper props={{
                                url: '/images/swiftui.png',
                                alt: "Swiftui Calorie me on ipad and iphone",
                                className: "xs:max-w-[800px]"
                            }} />
                        </>,
                        reverse: false,
                    }} />
                    <ProductItem props={{
                        title: "Flutter",
                        description: "",
                        action: <>
                            <div className="">
                                <p className="text-xl font-medium">
                                    Landersweb&apos;s Crosscheck mobile app was written using the Flutter framework from Google, allowing us to write code once and compile to any platform. Whether that is the web, desktop, ipad, iPhone, or Android, using the Flutter framework has allowed us to speed up development time without sacrificing performance or quality.
                                </p>
                            </div>
                        </>,
                        color: "",
                        content: <>
                            <ImageWrapper props={{
                                url: '/images/xcheck_3.png',
                                alt: "iOS chat page",
                                className: "xs:max-w-[650px]"
                            }} />
                        </>,
                        reverse: true
                    }} />
                    <Form props={{
                        title: "Ready to Build Your Next Mobile App?"
                    }} />
                </div>
            </>
        }} />
    </>
}

export default Mobile