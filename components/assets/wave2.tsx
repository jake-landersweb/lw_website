type Wave2Props = {
    className: string
}

const Wave2 = ({ props }: { props: Wave2Props }) => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={props.className}><path fillOpacity="1" d="M0,128L48,106.7C96,85,192,43,288,58.7C384,75,480,149,576,165.3C672,181,768,139,864,117.3C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
}

export default Wave2