import ImageWrapper from "../../components/misc/image"
import ProductItem from "../../components/products/product_item"
import TechWrapper from "../../components/technologies/tech_wrapper"

const Mobile = () => {
    return <>
        <TechWrapper props={{
            title: "Mobile Development",
            description: "This is where Landersweb turns your idea into a fully scalable, native mobile app experience. Whether you are looking to get to market fast with Flutter or want a more custom and integrated solution, our designers need for UI excellence will ensure your mobile app is a hit with your customers.",
            formTitle: "Ready to Build Your Next Mobile App?",
            content: <>
                <div className="space-y-16">
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
                </div>
            </>
        }} />
    </>
}

export default Mobile