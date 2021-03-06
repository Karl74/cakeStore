import React from 'react'

export default function Title({name}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center">
        <h1 className="text-title">{name}</h1>
      </div>      
    </div>
  )
}

