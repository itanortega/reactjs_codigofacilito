import React from 'react'
import ProducCategoryRow from './ProducCategoryRow'
import ProductRow from './ProductRow'

export default class ProductTable extends React.Component{
  constructor(){
    super()
  }
  render(){
    let rows = []
    let lastCategory = null
    
    if(this.props.products != null){
      this.props.products.forEach((product) => {
        if(product.category != lastCategory){
          rows.push(<ProducCategoryRow category = { product.category } key = { product.category }/>);
          lastCategory = product.category;
        }else{
          rows.push(<ProductRow product={ product.name } key={ product.name } />);
        }
      });
    }else{
      rows.push(<h1>Loading...</h1>)
    }
    return(
      <div>
          { rows }
      </div>
    )
  }
}