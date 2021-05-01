import React from 'react'
import If from './if'

export default function IconButton(props) {
  return (
    <If test={!props.hide}>
      <button className={'btn btn-' + props.style} onClick={props.onClick}>
        +
      </button>
    </If>
  )
}
