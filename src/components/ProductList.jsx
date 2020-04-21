import React, { Component } from 'react'
import Title from "./Title"
import Product from "./Product"
import {ProductConsumer} from "../Context"

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-1">
          <div className="container">
            <Title name="La Migaja"/>
            <div className="row">
              <ProductConsumer>
                {value=>{
                  //mapea cada producto que viene en value y retorna un componente product con el key igual al id y la propiedad producto={producto}
                  return value.products.map(product=>
                  <Product key={product.id} product={product}/>)
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
              
      </React.Fragment>
    )
  }
}
