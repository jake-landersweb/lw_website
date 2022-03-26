import Section from "../misc/section"

const About = () => {
    return <>
        <Section props={{
            title: "About Us",
            content: <>
                <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
                    <img src="/images/kl.png" alt="" className="w-56" />
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-700">
                            Kevin Landers
                        </h2>
                        <p className="md:max-w-screen-lg text-gray-700">
                            Kevin is the web development expert. With 20+ years of experience, he can take your wildest ideas and
                            translate them into a fast and responsive website or web app. He is an expert in .NET, relational
                            databased, and AWS services. On his free time, he likes to play golf and play Men&apos;s league hockey on his
                            hockey team, <a href="https://pucknorris.com" rel="noreferrer" target="_blank"
                                className="text-main hover:opacity-50 underline">pucknorris.com</a>
                        </p>
                    </div>
                </div>
                <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
                    <img src="/images/jake.png" alt="" className="w-56" />
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-700">
                            Jake Landers
                        </h2>
                        <p className="md:max-w-screen-lg text-gray-700">
                            Jake is a mobile development wiz. He has mastered the Flutter and SwiftUI framworks over the past 2
                            years, code which
                            you can see on his blog, <a href="https://jakelanders.com" rel="noreferrer" target="_blank"
                                className="text-main hover:opacity-50 underline">jakelanders.com</a>. Jake is also responsible for non
                            relational database development, using tools such as AWS dyanoDB and MongoDB, and native iOS and macOS
                            development, using UIKit, AppKit, and SwiftUI. In his free time he loves to play hockey and attend his
                            courses at Washington State University.
                        </p>
                    </div>
                </div>
            </>
        }} />
    </>
}

export default About