import { SiAmazondynamodb, SiMongodb } from "react-icons/si"
import ServiceItem from "../../components/services/service_item"
import TechItem from "../../components/technologies/tech_item"
import TechWrapper from "../../components/technologies/tech_wrapper"
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'

const DocumentDB = () => {
    return <>
        <TechWrapper props={{
            title: "Document Databases",
            description: "Document databases are a way to store related data contained in files, collections of which are known as tables. These databases have two main advantages. One is that they are extremely fast, so your data is available to your users with minimal latency. Second is they are very agile to different data types, so as your business evolves your database can as well.",
            content: <>
                <div className="space-y-16">
                    <h3 className="space-y-4 text-xl font-medium">
                        When working with data that is best fit for a document style database, Landersweb uses three primary options depending on what exactly your needs are. And while you may be picking one system now, you can always change to another data structure as your needs change.
                    </h3>
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