function DetectionAnalysis({analysis}) {
    const renderIcon = (type) => {
        switch (type) {
            case 'undetected':
                return <i className="fa fa-check text-success" />;
            case 'type-unsupported':
                return <i className="fa fa-eye-slash text-gray"></i>;
        }
    }

    return (
        <>
            <div className={"container"}>
                <p>Vendor Analysis</p>

                <div className={"row"}>
                    {analysis?.attributes?.results && Object.entries(analysis?.attributes?.results)?.map(([key, value], index) => (
                        <div className={"col-lg-6"} key={"engine-"+index}>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <p>{key}</p>
                                </div>
                                <div className={"col-6"}>
                                    <div className={"row"}>
                                        <span className={"col-2"}>
                                            {renderIcon(value.category)}
                                        </span>
                                        <div className={"col-10"}>
                                            <p> {value.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DetectionAnalysis