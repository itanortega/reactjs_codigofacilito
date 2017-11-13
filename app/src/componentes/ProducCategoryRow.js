import React from 'react'

export default class ProducCategoryRow extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
          <h4>{ this.props.category }</h4>
      </div>
    )
  }
}