import ImageWrapper from "../../components/misc/image"
import ProductItem from "../../components/products/product_item"
import TechWrapper from "../../components/technologies/tech_wrapper"

const Web = () => {
    return <>
        <TechWrapper props={{
            title: "Web Development",
            description: "Startups and small businesses can't afford a dedicated web development team; we can help! Think of Landersweb as your in-house development team, just a phone call or email away. Our experienced, certified developers can craft a truly powerful implementation to make your business perform better. We listen to you and your team before suggesting an implementation approach to your business problem.",
            formTitle: "Let Landersweb Take Your Web Presence To The Next Level",
            content: <>
                <div className="space-y-16">
                    <h2 className="text-2xl font-bold">
                        How We Build:
                    </h2>
                    <ProductItem props={{
                        title: ".NET",
                        description: ".NET is a powerful web framework used to create products randing from websites and apps, to full fledged desktop video game development. Landersweb have been wokring with .NET for over 10 years, and are experts at building fast and scalable apps with it. Not convinced?",
                        action: <>
                            <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noreferrer" className="underline text-xl font-medium text-primary hover:opacity-50 transition-opacity">
                                Learn More From Microsoft
                            </a>
                        </>,
                        color: "",
                        content: <>
                            <ImageWrapper props={{
                                url: "/images/dotnet.webp",
                                alt: "Mircosoft .NET Logo",
                                className: "xs:max-w-[650px]"
                            }} />
                        </>,
                        reverse: true,
                    }} />
                    <ProductItem props={{
                        title: "NextJS",
                        description: "This is a powerful Javascript framework from Vercel that builds upon the great success of React, the most popular Javascript framework from Facebook. React gives a modular way to build fluid UI and handle state management, similar to Flutter's widgets. NextJS builds upon this technology by optimizing the build on the server to allow for impressize search engine optimization (SEO). ",
                        action: <>
                            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="underline text-xl font-medium text-primary hover:opacity-50 transition-opacity">
                                Learn More From Vercel
                            </a>
                        </>,
                        color: "",
                        content: <>
                            <ImageWrapper props={{
                                url: "/images/nextjs.png",
                                alt: "Vercel NextJS Logo",
                                className: "xs:max-w-[650px]"
                            }} />
                        </>,
                        reverse: false,
                    }} />
                </div>
            </>
        }} />
    </>
}

export default Web