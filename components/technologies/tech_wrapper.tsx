type TechWrapperProps = {
    content: React.ReactNode
}

const TechWrapper = ({ props }: { props: TechWrapperProps }) => {
    return <>
        <div className="grid place-items-center pt-[100px]">
            <div className={`px-5 lg:px-20 md:px-10 max-w-[1500px]`}>
                {props.content}
            </div>
        </div>
    </>
}

export default TechWrapper