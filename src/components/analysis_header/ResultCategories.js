export const ResultCategories = (props) => {
    return <div className={"d-flex"}>
        <div>
            <h5>Categories</h5>
            <div className={"d-flex gap-1 flex-wrap"}>
                {Object.entries(props.attributes.categories)
                    .slice(0, 3)
                    ?.map(([_, value], index) => (<span className={"chip"} key={"chip-" + index}>{value}</span>))}
            </div>
        </div>
    </div>;
}