import React from "react"
import { PersonItem } from "./PersonItem"
import { usePersons } from "./PersonsContext"

export function List(){

	const {persons, setPersons, setPersonsWithSort} = usePersons()

	function handleClick(event: React.SyntheticEvent<EventTarget>){
		if (!(event.target instanceof HTMLElement) || !event.target.dataset.id) {
			return
		}
		const action = event.target.dataset.action
		const id = +event.target.dataset.id

		if(action === 'toggle'){
			setPersonsWithSort(persons.map(person => {
				if(person.id === id){
					return {
						...person,
						eating: !person.eating
					}
				}
				return person
			}))
		}else if(action === 'delete'){
			setPersons(persons.filter(person => person.id !== id))
		}
	}

	return(
		<div id="list" onClick={handleClick}>
			{persons.map(person => <PersonItem {...person} key={person.id}/>)}
		</div>
	)
}