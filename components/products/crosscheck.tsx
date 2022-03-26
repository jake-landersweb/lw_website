import ImageWrapper from "../misc/image"
import MobileStoreButton from "../misc/mobile_button"
import TechItem from "../technologies/tech_item"
import ProductItem from "./product_item"
import { RiFlutterFill } from 'react-icons/ri'
import { SiAmazondynamodb, SiNextdotjs } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'
import LearnMore from "../misc/learn_more"

const CrosscheckItem = () => {
    return <>
        <ProductItem props={{
            title: "Crosscheck Sports",
            description: "The ultamite lightweight sports team management app",
            action: <>
                <div className="space-y-4">
                    <div className="grid place-items-center">
                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-4">
                            <TechItem props={{
                                title: "Flutter",
                                url: "/mobile",
                                icon: <RiFlutterFill size="40px" />,
                                className: "bg-xc text-xc",
                                hasColors: true,
                            }} />
                            <TechItem props={{
                                title: "DynamoDB",
                                url: "/dynamodb",
                                icon: <SiAmazondynamodb size="40px" />,
                                className: "bg-xc text-xc",
                                hasColors: true,
                            }} />
                            <TechItem props={{
                                title: "NextJS",
                                url: "/nextjs",
                                icon: <SiNextdotjs size="40px" />,
                                className: "bg-xc text-xc",
                                hasColors: true,
                            }} />
                            <TechItem props={{
                                title: "GraphQL",
                                url: "/graphql",
                                icon: <GrGraphQl size="40px" />,
                                className: "bg-xc text-xc",
                                hasColors: true,
                            }} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                            <MobileStoreButton props={{
                                store: "ios",
                                url: "https://apps.apple.com/pk/app/crosscheck-hockey/id1585600361",
                            }} />
                            <MobileStoreButton props={{
                                store: "android",
                                url: "https://play.google.com/store/apps/details?id=com.landersweb.pnflutter",
                            }} />
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <LearnMore props={{
                            title: "Learn More",
                            url: "/crosscheck"
                        }} />
                    </div>
                </div>
            </>,
            color: "bg-xc",
            content: <>
                <div className="">
                    <ImageWrapper props={{
                        url: '/images/xcheck_3.png',
                        alt: "iOS chat page",
                        className: "xs:max-w-[650px]"
                    }} />
                </div>
                {/* <div className="hidden xl:flex ">
                    <ImageWrapper props={{
                        url: '/images/xcheck_3.png',
                        alt: "iOS chat page",
                        className: "xs:max-w-[650px]"
                    }} />
                </div>
                <div className="hidden md:flex xl:hidden">
                    <ImageWrapper props={{
                        url: '/images/schedule.png',
                        alt: "iOS schedule",
                        className: ""
                    }} />
                    <ImageWrapper props={{
                        url: '/images/chat.png',
                        alt: "iOS chat page",
                        className: ""
                    }} />
                </div>
                <div className="md:hidden flex">
                    <ImageWrapper props={{
                        url: '/images/schedule.png',
                        alt: "iOS schedule",
                        className: "xs:w-[300px] w-[250px]"
                    }} />
                </div> */}
            </>
        }} />
    </>
}

export default CrosscheckItem