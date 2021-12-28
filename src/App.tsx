import React from "react";
import Header from "./Header";
import Listing from "./Listing";

import './styles/app.scss';
import data from './data/data.json';

interface Props {}

interface FilterState {
    searchText: string,
    filterStocked: boolean
}

type ProductData = {
    "category"  : string,
    "price"     : string,
    "stocked"   : boolean,
    "name"      : string
}

class App extends React.Component<Props, FilterState> {
    constructor (props: Props) {
        super(props);
        this.state = {
            searchText: '',
            filterStocked: false
        };
        this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
        this.handleStockOptionChange = this.handleStockOptionChange.bind(this);
    }

    handleSearchStringChange (searchText: string): void {
        this.setState({
            searchText: searchText
        });
    }

    handleStockOptionChange (filterStocked: boolean): void {
        this.setState({
            filterStocked: filterStocked
        });
    }

    render () {
        const products: Array<ProductData> = data.data;
        return (
            <div id="app">
                <h1>Ekansh's Shop</h1>
                <Header 
                    searchText={this.state.searchText}
                    filterStocked={this.state.filterStocked}
                    handleSearchStringChange={this.handleSearchStringChange}
                    handleStockOptionChange={this.handleStockOptionChange}  />
                <Listing 
                    products={products}
                    searchText={this.state.searchText}
                    filterStocked={this.state.filterStocked} />
            </div>
        );
    }
}

export default App;