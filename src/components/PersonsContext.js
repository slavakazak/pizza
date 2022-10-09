import React, {useState, useContext, useEffect, useMemo} from "react"

const PersonsContext = React.createContext()

export const usePersons = () => useContext(PersonsContext)

export const PersonsProvider = ({children}) => {

	const [persons, setPersons] = useState(() => JSON.parse(localStorage.getItem('persons') || '[]'))

	useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
  }, [persons])

	function changePersons(newPersons){
		setPersons(newPersons.sort((a, b) => a.eating === b.eating ? a.id - b.id : b.eating - a.eating))
	}

	function handleAdd(person){
		setPersons([...persons, person])
	}

	function handleClear(){
		changePersons(persons.map(person => ({...person, eating: false})))
	}

	function handleDeleteAll(){
		setPersons([])
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
		<PersonsContext.Provider value={{
			persons,
			numberOfActive,
			handleClick,
			handleAdd,
			handleClear,
			handleDeleteAll
		}}>
			{children}
		</PersonsContext.Provider>
	)
}