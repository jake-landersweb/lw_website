import Wave1 from "./assets/wave1"
import ImageWrapper from "./misc/image"

const Initial = () => {
    return <>
        <div className="">
            <div className="h-[100px] bg-primary w-full"></div>
            <div className="bg-primary w-full">
                <div className="px-5 lg:px-20 md:px-10 grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-opacity-70">
                        We build custom tailored apps to enable your business to thrive at scale.
                    </h1>
                    <ImageWrapper props={{
                        url: "/svg/web_dev.svg",
                        alt: "web development svg",
                        className: ""
                    }} />
                </div>
            </div>
            <Wave1 props={{
                className: "fill-primary"
            }} />
        </div>
    </>
}

export default Initial