import ImageWrapper from "../misc/image"
import MobileStoreButton from "../misc/mobile_button"
import TechItem from "../technologies/tech_item"
import ProductItem from "./product_item"
import { SiSwift } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

const CalorieMeItem = () => {
    return <>
        <ProductItem props={{
            title: "Calorie Me",
            description: "Hyper elegant calorie tracker",
            action: <>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-4">
                        <TechItem props={{
                            title: "SwiftUI",
                            url: "/mobile",
                            icon: <SiSwift size="40px" />,
                            className: "bg-cm text-cm",
                            hasColors: true,
                        }} />
                        <TechItem props={{
                            title: "Doc Database",
                            url: "/documentdb",
                            icon: <FaDatabase size="40px" />,
                            className: "bg-cm text-cm",
                            hasColors: true,
                        }} />
                    </div>
                    <div className="grid grid-cols-1 place-items-center">
                        <MobileStoreButton props={{
                            store: "ios",
                            url: "https://apps.apple.com/me/app/calorie-me/id1608922326",
                            height: 67,
                            width: undefined
                        }} />
                    </div>
                </div>
            </>,
            color: "bg-cm",
            reverse: false,
            content: <>
                <div className="">
                    <ImageWrapper props={{
                        url: '/images/calorie_me_3.png',
                        alt: "calorie me 3 images",
                        className: "xs:max-w-[650px]"
                    }} />
                </div>
                {/* <div className="hidden xl:flex ">
                    <ImageWrapper props={{
                        url: '/images/calorie_me_3.png',
                        alt: "calorie me 3 images",
                        className: "xs:max-w-[650px]"
                    }} />
                </div>
                <div className="hidden md:flex xl:hidden">
                    <ImageWrapper props={{
                        url: '/images/calorie_me_day.png',
                        alt: "iOS schedule",
                        className: ""
                    }} />
                    <ImageWrapper props={{
                        url: '/images/calorie_me_create.png',
                        alt: "calorie me create",
                        className: ""
                    }} />
                </div>
                <div className="md:hidden flex">
                    <ImageWrapper props={{
                        url: '/images/calorie_me_day.png',
                        alt: "calorie me day in the life",
                        className: "xs:w-[300px] w-[250px]"
                    }} />
                </div> */}
            </>
        }} />
    </>
}

export default CalorieMeItem