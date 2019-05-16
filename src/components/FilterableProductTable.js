import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  constructor (props){
    super(props);
    
    this.state = {
      products: props.products
    }
  }

  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar />
        <ProductTable products={this.state.products}/>
      </div>
    )
  }
}

export default FilterableProductTable;
