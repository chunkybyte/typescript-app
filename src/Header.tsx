import React from "react";

interface Props {
    searchText: string;
    filterStocked: boolean;
    handleSearchStringChange: (searchText: string) => void;
    handleStockOptionChange: (filterStocked: boolean) => void;
}

class Header extends React.Component<Props> {
    render () {
        return (
            <div>
                <label htmlFor="header_search">Search: </label>
                <input 
                    type="text" 
                    id="header_search" 
                    placeholder="Type your search" 
                    value={this.props.searchText}
                    onChange={(e: any) => {this.props.handleSearchStringChange(e.target.value);}}/>
                <br />
                <input 
                    type="checkbox" 
                    name="stockOptions" 
                    id="header_stocked" 
                    checked={this.props.filterStocked}
                    onChange={(e: any) => {this.props.handleStockOptionChange(e.target.checked); }} /> 
                <label htmlFor="stockOptions"> Only show products in stock?</label>
            </div>
        );
    }
}

export default Header;