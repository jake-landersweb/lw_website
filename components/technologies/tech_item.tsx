type TechItemProps = {
    title: string,
    url: string,
    icon: React.ReactNode,
    className?: string,
    hasColors?: boolean
}

const TechItem = ({ props }: { props: TechItemProps }) => {
    const content = <div className={`${props.className ?? ""} ${props.hasColors ?? false ? "" : "bg-primary text-primary"} bg-opacity-30 space-x-2 p-2 rounded-md grid place-items-center hover:opacity-50 transition-opacity`}>
        {props.icon}
        <h3 className="text-lg font-medium">
            {props.title}
        </h3>
    </div>

    if (props.url === "") {
        return <>
            {content}
        </>
    } else {
        return <>
            <a href={props.url}>
                {content}
            </a>
        </>
    }
}

export default TechItem