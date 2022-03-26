import { useRouter } from 'next/router'

type ServiceItemProps = {
    title: string
    description: string
    route: string
    icon: React.ReactNode
}

const ServiceItem = ({ props }: { props: ServiceItemProps }) => {
    const router = useRouter()

    return <>
        <button onClick={() => router.push(props.route)} className="group">
            <div className="flex items-center space-x-4 p-2 group-hover:opacity-50 transition-all">
                <div className="text-primary rounded-full bg-primary bg-opacity-30 p-4">
                    {props.icon}
                </div>
                <div className="grid grid-cols-1 place-items-start">
                    <h2 className="text-2xl font-semibold">
                        {props.title}
                    </h2>
                    <h3 className="text-lg text-left">
                        {props.description}
                    </h3>
                </div>
            </div>
        </button>
    </>
}

export default ServiceItem