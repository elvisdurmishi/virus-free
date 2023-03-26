const HorizontalProgressBar = (props) => {
    const {completed, status} = props;

    const containerStyles = {
        height: 25, width: '100%', backgroundColor: "#e0e0de", borderRadius: 50, margin: 50, marginBottom: 0
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#1363DF',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 0.5s ease-in-out'
    }

    const labelStyles = {
        padding: 5, color: 'black', fontWeight: 'bold'
    }

    return (<>
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
        <span>{status}...</span>
    </>);
};

export default HorizontalProgressBar;
