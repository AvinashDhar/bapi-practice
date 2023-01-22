import React from 'react'

const Product = ({detail}) => {
  return (
    <div style={{border:"1px solid #ddd"}}>
        <div>
            Title: {detail.title}
        </div>
        <div>
            {detail.category}
        </div>
        <div><img style={{height:"100px", width:"100px"}} src={detail.image}/></div>
    </div>
  )
}

export default Product