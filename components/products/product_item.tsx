type ProductItemProps = {
    title: string,
    description: string,
    action: React.ReactNode,
    color: string,
    content: React.ReactNode,
    reverse?: boolean
}

const ProductItem = ({ props }: { props: ProductItemProps }) => {
    const content = <>
        {/* <div className="relative">
            <div className="z-0 absolute grid place-items-center w-[100%] h-[100%]">
                <div className={`${props.color} bg-opacity-50 w-full h-full rounded-full blur-3xl`}></div>
            </div>
            <div className="relative z-10">
                {props.content}
            </div>
        </div> */}
        <div className="relative z-10">
            {props.content}
        </div>
    </>

    return <>
        <div className="hidden lg:flex">
            <div className="z-10 relative grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                {props.reverse ?? false ? <div className="grid place-items-center">
                    {content}
                </div> : <></>}
                <div className="grid grid-cols-1 space-y-4 place-items-center">
                    <h2 className="text-4xl font-bold">
                        {props.title}
                    </h2>
                    <h3 className="text-xl">
                        {props.description}
                    </h3>
                    {props.action}
                </div>
                {props.reverse ?? false ? <></> : <div className="grid place-items-center">
                    {content}
                </div>}
            </div>
        </div>
        <div className="lg:hidden z-10 relative grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            <div className="grid grid-cols-1 space-y-4 place-items-center">
                <h2 className="text-4xl font-bold">
                    {props.title}
                </h2>
                <h3 className="text-xl">
                    {props.description}
                </h3>
                {props.action}
            </div>
            <div className="grid place-items-center">
                {content}
            </div>
        </div>
    </>
}

export default ProductItem