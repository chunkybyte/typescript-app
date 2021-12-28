// import React from "react";

interface ProductData {
    "category"  : string;
    "price"     : string;
    "stocked"   : boolean;
    "name"      : string;
}

const Item = (props: {data: ProductData}) => {
    const data = props.data;
    const name = data.stocked ? 
                    data.name : 
                    <span style={{color: 'red'}}>{data.name}</span>;

    return (
        <div className="listing__row">
            <div className="listing__col">{name}</div>
            <div className="listing__col">{data.price}</div>
        </div>
    );
}

export default Item;