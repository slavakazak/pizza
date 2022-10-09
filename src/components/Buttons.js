import React from "react"
import { Button } from "./Button"
import { usePersons } from "./PersonsContext"

export function Buttons(){
	const {handleClear, handleDeleteAll} = usePersons()

	return (
		<div className="buttons">
			<Button text="Очистить" onClick={handleClear}/>
			<Button text="Удалить всё" onClick={handleDeleteAll}/>
		</div>
	)
}