import SumItem from "../../components/crosscheck/sum_item"
import TechWrapper from "../../components/technologies/tech_wrapper"
import { SiPython, SiGraphql } from 'react-icons/si'
import ImageWrapper from "../../components/misc/image"
import ProductItem from "../../components/products/product_item"

const DynamoDB = () => {
    return <>
        <TechWrapper props={{
            title: "AWS DynamoDB",
            description: "AWS DynamoDB is a fully managed NoSQL document database solution hosted in the cloud. This means that no matter how your data scales in size, resources will be provisioned to handle that capacity. This is true both in physical size and in amount of throughput the database can handle.",
            formTitle: "Ready To Build Out Your Next DynamoDB Database?",
            content: <>
                <div className="space-y-16">
                    <ProductItem props={{
                        title: "How It Works",
                        description: "DynamoDB is no different from other document style databases, using Hasing and B trees to organize your data into indexable collections. At a very basic level, each data object is stored in their own files. Then, another file stores key-value pairs with all of the documents in this collection. Then, as this collection gets larger there is an index file for the colection of index files across all of your documents, leading to a tiered system to allow ultra-fast access to your data. At the point where the amount of data you hold is larger than the server can handle, a paradigm called charding allows data to be stored on multiple servers with no impact to the end user. If your indexes were from 1-100, then one server would be responsible for storing 1-50, and the other 51-100.",
                        action: undefined,
                        color: "",
                        content: <>
                            <ImageWrapper props={{
                                url: "/images/btree.gif",
                                alt: "B Tree diagram",
                                className: "xs:max-w-[650px]"
                            }} />
                        </>,
                        reverse: true,
                    }} />
                    <ProductItem props={{
                        title: "Why DynamoDB?",
                        description: "Amazon Web Services offers scaling as a service through DynamoDB. The database itself is no different than other document database systems, the advantage to Amazon's service is through auto-provisioned scaling. As either the size of your data or the throughput needed to serve your data to your users grows, AWS will automatically scale your database across servers using sharding. Only paying for the server space you need is the main draw towards DynamoDB.",
                        action: undefined,
                        color: "",
                        content: <>
                            <ImageWrapper props={{
                                url: "/images/dynamodb.png",
                                alt: "DynamoDB Graph",
                                className: "xs:max-w-[650px]"
                            }} />
                        </>,
                        reverse: false,
                    }} />
                    <div className="space-y-4">
                        <h3 className="text-2xl">
                            Learn More
                        </h3>
                        <p>
                            Your can learn more from Amazon at <a className="underline text-primary hover:opacity-50 transition-opacity" href="https://aws.amazon.com/dynamodb/" rel="noreferrer" target="_blank" >https://aws.amazon.com/dynamodb/</a>
                        </p>
                    </div>
                </div>
            </>
        }} />
    </>
}

export default DynamoDB