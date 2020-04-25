import React from "react"

const Box = (props) => {
  return (
    <div className="box">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <a href="{props.link}">{props.linkName}</a>
    </div>
  )
}

export default Box
