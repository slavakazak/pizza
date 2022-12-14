import React from "react"
import { IPerson } from '../../interfaces'
import { usePersons } from "./PersonsContext"
import './person-item.css'

export function PersonItem({ eating, name, id }: IPerson) {
	const { persons, setPersons, setPersonsWithSort } = usePersons()

	function clickHandler(event: React.MouseEvent) {
		const element = event.target as HTMLElement
		if (element.dataset.delete) {
			setPersons(persons.filter(person => person.id !== id))
		} else {
			setPersonsWithSort(persons.map(person => {
				if (person.id === id) {
					return {
						...person,
						eating: !person.eating
					}
				}
				return person
			}))
		}
		event.preventDefault()
	}

	function focusHandler(event: React.FocusEvent) {
		
		event.preventDefault()
	}

	const classes = ['person']
	if (eating) {
		classes.push('act')
	}
	return (
		<div className="person-wrap">
			<div className={classes.join(' ')} onClick={clickHandler} onFocus={focusHandler}>
				{name}
				<div className="cross" data-delete>&times;</div>
			</div>
		</div>
	)
}