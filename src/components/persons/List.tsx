import React from "react"
import { PersonItem } from "./PersonItem"
import { usePersons } from "./PersonsContext"
import './list.css'

export function List(){
	const {persons} = usePersons()

	return(
		<div id="list">
			{persons.map(person => <PersonItem {...person} key={person.id}/>)}
		</div>
	)
}