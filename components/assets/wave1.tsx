type Wave1Props = {
    className: string
}

const Wave1 = ({ props }: { props: Wave1Props }) => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={props.className}>
            <path fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,133.3C672,107,768,117,864,154.7C960,192,1056,256,1152,250.7C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
    </>
}

export default Wave1