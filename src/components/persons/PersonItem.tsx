import React from "react"
import { IPerson } from '../../interfaces'

export function PersonItem({ eating, name, id }: IPerson){
	return(
		<div className={'person' + (eating ? ' act' : '')} data-action='toggle' data-id={id}>
      {name}
      <div className="cross" data-action='delete' data-id={id}>&times;</div>
    </div>
	)
}