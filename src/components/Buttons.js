import React from "react"
import { Button } from "./Button"
import { usePersons } from "./PersonsContext"

export function Buttons(){
	const {persons, setPersons, setPersonsWithSort} = usePersons()

	function handleClear(){
		setPersonsWithSort(persons.map(person => ({...person, eating: false})))
	}

	function handleDeleteAll(){
		setPersons([])
	}

	return (
		<div className="buttons">
			<Button text="Очистить" onClick={handleClear}/>
			<Button text="Удалить всё" onClick={handleDeleteAll}/>
		</div>
	)
}