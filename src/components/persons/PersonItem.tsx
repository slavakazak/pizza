import React from "react"
import { IPerson } from '../../interfaces'

export function PersonItem({ eating, name, id }: IPerson){
	const classes = ['person']
	if(eating){
		classes.push('act')
	}
	return(
		<div className={classes.join(' ')} data-action='toggle' data-id={id}>
      {name}
      <div className="cross" data-action='delete' data-id={id}>&times;</div>
    </div>
	)
}