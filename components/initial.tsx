import Wave1 from "./assets/wave1"
import ImageWrapper from "./misc/image"

const Initial = () => {
    return <>
        <div className="space-y-[-1px]">
            <div className="h-[100px] bg-primary w-full"></div>
            <div className="bg-primary">
                <div className="sm:flex items-center justify-center pl-5 pr-5 sm:pr-0 sm:pl-10 md:pl-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-opacity-70 sm:max-w-[50%]">
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
                className: "fill-primary mx-[-1px]"
            }} />
        </div>
    </>
}

export default Initial