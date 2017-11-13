import React from 'react'
import ProducCategoryRow from './ProducCategoryRow'
import ProductRow from './ProductRow'

export default class ProductTable extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
          <ProducCategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProducCategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
      </div>
    )
  }
}