import Form from "../misc/form"

type TechWrapperProps = {
    title: string,
    description: string,
    formTitle?: string
    content: React.ReactNode
}

const TechWrapper = ({ props }: { props: TechWrapperProps }) => {
    return <>
        <div className="grid place-items-center pt-[100px]">
            <div className={`px-5 lg:px-20 md:px-10 max-w-[1500px]`}>
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h1 className="text-3xl xs:text-5xl font-bold">
                            {props.title}
                        </h1>
                        <h3 className="text-xl xm:text-2xl font-medium">
                            {props.description}
                        </h3>
                    </div>
                    {props.content}
                    <Form props={{
                        title: props.formTitle ?? "Ready To Bring Your Business To The Next Level?"
                    }} />
                </div>
            </div>
        </div>
    </>
}

export default TechWrapper