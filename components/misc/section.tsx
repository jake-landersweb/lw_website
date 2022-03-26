type SectionProps = {
    title: string
    content: React.ReactNode
    hasMargins?: boolean
    hasMaxWdith?: boolean
}

const Section = ({ props }: { props: SectionProps }) => {
    return <>
        <div className="grid place-items-center">
            <div className={`space-y-4 ${props.hasMargins ?? true ? "px-5 lg:px-20 md:px-10" : ""} ${props.hasMaxWdith ?? true ? "max-w-[1500px]" : ""}`}>
                <h2 className="text-3xl sm:text-4xl font-bold">
                    {props.title}
                </h2>
                {props.content}
            </div>
        </div>
    </>
}

export default Section