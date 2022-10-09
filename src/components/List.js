import { PersonItem } from "./PersonItem"
import { usePersons } from "./PersonsContext"

export function List(){

	const {handleClick, persons} = usePersons()

	return(
		<div id="list" onClick={({target}) => handleClick(target.dataset.action, +target.dataset.id)}>
			{persons.map(person => <PersonItem {...person} key={person.id}/>)}
		</div>
	)
}