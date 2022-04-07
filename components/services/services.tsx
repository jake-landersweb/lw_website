import Section from "../misc/section"
import ServiceItem from "./service_item"
import { IoPhonePortraitOutline, IoTvOutline, IoSchoolOutline } from 'react-icons/io5';
import { GiHockey } from 'react-icons/gi'
import { MdOutlineSell } from 'react-icons/md'
import { FaWrench } from 'react-icons/fa'

const Services = () => {
    return <>
        <Section props={{
            title: "Main Services",
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
                        title: "Sport Management",
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
                        title: "Exam Management",
                        description: "We have a custom LMS to quickly add functionality to your existing products.",
                        route: "/data",
                        icon: <IoSchoolOutline size="50px" />
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