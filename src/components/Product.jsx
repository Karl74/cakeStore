import React, { Component } from 'react'
import styled from "styled-components"

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5">
            <img src={img} alt="bread" className="card-img-top"/>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
              {title}
            </p>
            <h5 className="mb-0 font-italic">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>


      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div` 


`