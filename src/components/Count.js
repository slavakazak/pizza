import { useMemo } from "react"
import { usePersons } from "./persons/PersonsContext"

export function Count(){

	const {persons} = usePersons()

	const numberOfActive = useMemo(() => persons.reduce((prev, next) => prev + next.eating, 0), [persons])

	return(
		<h2>Количество: {numberOfActive} / {persons.length}</h2>
	)
}