const CategoryRow = (props: {categoryName: string}): any => {
    return (
        <div className="listing__row" style={{justifyContent: "center", fontWeight: "bold"}}>
            {props.categoryName}
        </div>
    );
}

export default CategoryRow;