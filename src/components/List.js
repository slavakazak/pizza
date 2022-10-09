import {PersonItem} from "./PersonItem"

export function List({ onClick, persons }){
	function handleClick({target}){
		onClick(target.dataset.action, +target.dataset.id)
	}

	return(
		<div id="list" onClick={handleClick}>
			{persons.map(person => <PersonItem {...person} key={person.id}/>)}
		</div>
	)
}