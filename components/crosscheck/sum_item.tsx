type SumItemProps = {
    title: string
    image: React.ReactNode
    description: string
    className?: string,
    hasColors?: boolean
}

const SumItem = ({ props }: { props: SumItemProps }) => {
    return <>
        <div className="flex items-center space-x-4 p-2 group-hover:opacity-50 transition-all">
            <div className={`${props.className ?? ""} ${props.hasColors ?? false ? "" : "text-primary bg-primary"} rounded-full bg-opacity-30 p-4`}>
                {props.image}
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold">
                    {props.title}
                </h2>
                <h3 className="text-lg">
                    {props.description}
                </h3>
            </div>
        </div>
    </>
}

export default SumItem