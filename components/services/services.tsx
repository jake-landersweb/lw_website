import Section from "../misc/section"
import ServiceItem from "./service_item"
import { IoPhonePortraitOutline, IoTvOutline } from 'react-icons/io5';
import { GiHockey } from 'react-icons/gi'
import { MdOutlineSell } from 'react-icons/md'
import { FaDatabase, FaWrench } from 'react-icons/fa'

const Services = () => {
    return <>
        <Section props={{
            title: "Services",
            content: <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                    <ServiceItem props={{
                        title: "Mobile Apps",
                        description: "Masterfully crafted native mobile apps developed with Swift or Flutter.",
                        route: "/mobile",
                        icon: <IoPhonePortraitOutline size="50px" />
                    }} />
                    <ServiceItem props={{
                        title: "Websites",
                        description: "Beautiful, simple, and elegant websites to showcase your product, business or idea.",
                        route: "/web",
                        icon: <IoTvOutline size="50px" />
                    }} />
                    <ServiceItem props={{
                        title: "Sports Teams",
                        description: "Want a custom site and app for your team? Let us build around the Crosscheck Sports Engine.",
                        route: "/crosscheck",
                        icon: <GiHockey size="50px" />
                    }} />
                    <ServiceItem props={{
                        title: "E-Commerce",
                        description: "Fast and secure payment systems to interpolate seasmlessly with your bank accounts.",
                        route: "/ecommerce",
                        icon: <MdOutlineSell size="50px" />
                    }} />
                    <ServiceItem props={{
                        title: "Data Mangement",
                        description: "Rubust and scalable cloud database systems to securly host your business data.",
                        route: "/data",
                        icon: <FaDatabase size="50px" />
                    }} />
                    <ServiceItem props={{
                        title: "Maintenance",
                        description: "Have an existing product? We know most framworks and can extend what you already have!",
                        route: "/maintain",
                        icon: <FaWrench size="50px" />
                    }} />
                </div>
            </>,
            hasMargins: undefined,
            hasMaxWdith: undefined
        }} />
    </>
}

export default Services