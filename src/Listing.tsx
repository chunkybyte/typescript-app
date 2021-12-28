import React from "react";
import CategoryRow from "./CategoryRow";
import Item from './Item';

interface ProductData {
    "category"  : string;
    "price"     : string;
    "stocked"   : boolean;
    "name"      : string;
}

interface Props {
    products: ProductData[];
    searchText: string;
    filterStocked: boolean;
}

class Listing extends React.Component<Props> {
    render () {
        const data = this.props.products;
        let lastCategory: string|null = null;
        const markup: any = [];

        data.forEach((product, i) => {
            if (this.props.filterStocked && product.stocked === false) {
                return;
            }

            if (product.name.indexOf(this.props.searchText) === -1) {
                return;
            }

            if (product.category !== lastCategory) {
                markup.push(<CategoryRow key={product.category} categoryName={product.category} />);
            }
            lastCategory = product.category;

            markup.push(<Item key={i} data={product}></Item>);
        });

        return (
            <div className="listing-wrapper">
                <div className="listing__row">
                    <div className="listing__col-title"><b>Name</b></div>
                    <div className="listing__col-title"><b>Price</b></div>
                </div>
                {markup}
            </div>
        );
    }
}

export default Listing;