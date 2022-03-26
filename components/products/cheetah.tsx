import ImageWrapper from "../misc/image"
import TechItem from "../technologies/tech_item"
import ProductItem from "./product_item"
import { SiHtml5 } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

const CheetahItem = () => {
    return <>
        <ProductItem props={{
            title: "Cheetah",
            description: "We give Cheetah the web tools needed to successfully and effectively teach project management.",
            action: <>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-4">
                    <TechItem props={{
                        title: "MS .NET",
                        url: "/dotnet",
                        icon: <SiHtml5 size="40px" />,
                        className: "bg-cheetah text-cheetah",
                        hasColors: true,
                    }} />
                    <TechItem props={{
                        title: "My SQL",
                        url: "/relational",
                        icon: <GrMysql size="40px" />,
                        className: "bg-cheetah text-cheetah",
                        hasColors: true,
                    }} />
                </div>
            </>,
            color: "bg-cheetah",
            reverse: true,
            content: <>
                <div className="">
                    <ImageWrapper props={{
                        url: '/images/cheetah.png',
                        alt: "cheetah exam view",
                        className: "max-w-[600px]"
                    }} />
                </div>
            </>
        }} />
    </>
}

export default CheetahItem