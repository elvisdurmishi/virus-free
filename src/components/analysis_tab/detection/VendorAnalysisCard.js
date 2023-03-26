export const VendorAnalysisCard = ({vendor}) => {
    const renderIcon = (type) => {
        switch (type) {
            case 'undetected':
            case 'harmless':
                return <i className="fa fa-check text-success"/>;
            case 'type-unsupported':
                return <i className="fa fa-eye-slash text-gray"></i>;
            default:
                return <i className={'fa fa-exclamation-triangle text-danger'}></i>
        }
    }

    return (<div className={"col-lg-5"}>
        <div className={"analysis-engine-card"}>
            <div>
                <p><strong>{vendor.engine_name}</strong></p>
            </div>
            <div className={"d-flex align-items-center gap-1"}>
                <p>Result: </p>
                <div>
                    {renderIcon(vendor?.category)}
                </div>
                <div>
                    <p> {vendor?.category}</p>
                </div>
            </div>
            <div>
                <span>Method: </span>
                <span>{vendor?.method}</span>
            </div>
            {vendor?.engine_version && <div>
                <span>Engine: </span>
                <span>{vendor?.engine_version}</span>
            </div>}
        </div>
    </div>)
}