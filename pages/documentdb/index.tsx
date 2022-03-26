import { SiAmazondynamodb, SiMongodb } from "react-icons/si"
import ServiceItem from "../../components/services/service_item"
import TechItem from "../../components/technologies/tech_item"
import TechWrapper from "../../components/technologies/tech_wrapper"
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

const DocumentDB = () => {
    return <>
        <TechWrapper props={{
            content: <>
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h1 className="text-2xl xs:text-4xl font-bold">
                            Document Databases
                        </h1>
                        <div className="space-y-4 text-xl font-medium">
                            <h2>
                                Document databases are a way to store related data contained in files, collections of which are known as tables. These databases have two main advantages:
                            </h2>
                            <ul className="pl-8 list-decimal">
                                <li>Extremely fast</li>
                                <li>Very agile</li>
                            </ul>
                        </div>
                        <h3 className="space-y-4 text-xl font-medium">
                            When working with data that is best fit for a document style database, Landersweb uses three primary options. Click on these options to learn more.
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <ServiceItem props={{
                            title: "AWS DynamoDB",
                            description: "Managed document database stored in the cloud hosted by AWS. This is the technology that was used to build Crosscheck Sports.",
                            route: "/dynamodb",
                            icon: <SiAmazondynamodb size="40px" />,
                        }} />
                        <ServiceItem props={{
                            title: "MongoDB",
                            description: "This is the more traditional NoSQL type database, same features as DynamoDB, but has more customization and is managed on a personal server.",
                            route: "/mongodb",
                            icon: <SiMongodb size="40px" />,
                        }} />
                        <ServiceItem props={{
                            title: "Custom Solution",
                            description: "Sometimes there are specific use cases where a simple fully custom databse solution is more apropriate. In this case, Landersweb has the experience needed. This is what was used in Calorie Me.",
                            route: "/customdb",
                            icon: <HiOutlineDocumentDuplicate size="40px" />,
                        }} />
                    </div>
                </div>
            </>
        }} />
    </>
}

export default DocumentDB