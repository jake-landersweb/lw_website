type LearnMoreProps = {
    title: string,
    url: string
}

const LearnMore = ({ props }: { props: LearnMoreProps }) => {
    return <>
        <a href={props.url} >
            <h3 className="text-lg xs:text-xl md:text-2xl font-medium underline text-bgdk-700 hover:opacity-50 transition-opacity">
                {props.title}
            </h3>
        </a>
    </>
}

export default LearnMore