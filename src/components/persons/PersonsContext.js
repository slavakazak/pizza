import React, {useState, useContext, useEffect} from "react"

const PersonsContext = React.createContext()

export const usePersons = () => useContext(PersonsContext)

export const PersonsProvider = ({children}) => {

	const [persons, setPersons] = useState(() => JSON.parse(localStorage.getItem('persons') || '[]'))

	useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
  }, [persons])

	function setPersonsWithSort(newPersons){
		setPersons(newPersons.sort((a, b) => a.eating === b.eating ? a.id - b.id : b.eating - a.eating))
	}

	return (
		<PersonsContext.Provider value={{
			persons,
			setPersons,
			setPersonsWithSort
		}}>
			{children}
		</PersonsContext.Provider>
	)
}