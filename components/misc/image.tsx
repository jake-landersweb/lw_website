type ImageWrapperProps = {
    url: string
    alt: string
    className?: string
}

const ImageWrapper = ({ props }: { props: ImageWrapperProps }) => {
    return <div className={`${props.className ?? ""}`}>
        <img src={props.url} alt={props.alt} />
    </div>
}

export default ImageWrapper