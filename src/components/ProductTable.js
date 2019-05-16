import React, { Component } from 'react'

import ProductRow from './ProductRow';

class ProductTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
     products: props.products
    }
  }

  render() {
    console.log(this.state.products);
    return (
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            {
              this.state.products.data.map( (product) => {
                return (
                  <ProductRow product={product} />
                )
              })
            }
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable;
