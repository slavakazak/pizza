import { useState, useEffect, useMemo } from 'react'
import { Button } from "./Button"
import { Count } from "./Count"
import { Form } from "./Form"
import { List } from "./List"
import { ThemeButton } from './ThemeButton'

export function Content() {
	
	const [persons, setPersons] = useState(() => JSON.parse(localStorage.getItem('persons') || '[]'))

	useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
  }, [persons])

	function changePersons(newPersons){
		setPersons(newPersons.sort((a, b) => a.eating === b.eating ? a.id - b.id : b.eating - a.eating))
	}

	function handleClear(){
		changePersons(persons.map(person => ({...person, eating: false})))
	}

	function handleClick(action, id){
		if(action === 'toggle'){
			changePersons(persons.map(person => {
				if(person.id === id){
					return {
						id: person.id,
						name: person.name,
						eating: !person.eating
					}
				}
				return person
			}))
		}else if(action === 'delete'){
			changePersons(persons.filter(person => person.id !== id))
		}
	}

	const numberOfActive = useMemo(() => persons.reduce((prev, next) => prev + next.eating, 0), [persons])
	
	return (
			<div id="content">
				<div className="row">
					<div className="col">

						<div className="top-row">
							<Count active={numberOfActive} all={persons.length}/>
							<ThemeButton/>
						</div>

						<List persons={persons} onClick={handleClick}/>

						<Form onChange={person => setPersons([...persons, person])}/>

						<div className="buttons">
							<Button text="Очистить" onClick={handleClear}/>
							<Button text="Удалить всё" onClick={() => setPersons([])}/>
						</div>

					</div>
				</div>
			</div>
	)
	
}