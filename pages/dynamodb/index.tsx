import SumItem from "../../components/crosscheck/sum_item"
import TechWrapper from "../../components/technologies/tech_wrapper"
import { SiPython, SiGraphql } from 'react-icons/si'

const DynamoDB = () => {
    return <>
        <TechWrapper props={{
            content: <>
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h1 className="text-2xl xs:text-4xl font-bold">AWS DynamoDB</h1>
                        <h2 className="text-xl font-medium">
                            AWS DynamoDB is a fully managed NoSQL document database solution hosted in the cloud. This means that no matter how your data scales in size, resources will be provisioned to handle that capacity. This is true both in physical size and in amount of throughput the database can handle.
                        </h2>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold">
                            How We Use It
                        </h2>
                        <SumItem props={{
                            title: "Python Lambdas",
                            image: <>
                                <SiPython size="50px" />
                            </>,
                            description: "We use lambdas through API Gateway to connect to and query the database in order to return data to the client's devices."
                        }} />
                        <SumItem props={{
                            title: "GraphQL",
                            image: <>
                                <SiGraphql size="50px" />
                            </>,
                            description: "GraphQL, graph query language, is primarily used as an api layer to interact with DynamoDB. Graph gives us access to Web Sockets that allow for the creation of real time applications like chat."
                        }} />
                    </div>

                </div>
            </>
        }} />
    </>
}

export default DynamoDB