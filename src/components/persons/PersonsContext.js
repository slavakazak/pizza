import React, {useState, useContext, useEffect, useRef} from "react"

const PersonsContext = React.createContext()

export const usePersons = () => useContext(PersonsContext)

export const PersonsProvider = ({children}) => {

	const [persons, setPersons] = useState(() => JSON.parse(localStorage.getItem('persons') || '[]'))

	const previosPersonsLength = useRef(persons.length)

	useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
		
		if(persons.length - previosPersonsLength.current > 0){
			let scrollPos = Math.max(
				document.body.scrollHeight, document.documentElement.scrollHeight,
				document.body.offsetHeight, document.documentElement.offsetHeight,
				document.body.clientHeight, document.documentElement.clientHeight
			) - document.documentElement.clientHeight
			window.scrollTo(0, scrollPos)
		}
		previosPersonsLength.current = persons.length
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