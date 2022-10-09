import { usePersons } from "./PersonsContext"

export function Count(){

	const {persons, numberOfActive} = usePersons()

	return(
		<h2>Количество: {numberOfActive} / {persons.length}</h2>
	)
}