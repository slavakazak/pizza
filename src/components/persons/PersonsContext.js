import React, {useState, useContext, useEffect, useRef} from "react"

const PersonsContext = React.createContext()

export const usePersons = () => useContext(PersonsContext)

const getDocumentHeight = () => Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	)

export const PersonsProvider = ({children}) => {

	const [persons, setPersons] = useState(() => JSON.parse(localStorage.getItem('persons') || '[]'))

	const documentHeight = useRef(0)

	useEffect(() => {
		documentHeight.current = getDocumentHeight()
  }, [])

	useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
		
		const diffDocumentHeight = getDocumentHeight() - documentHeight.current

		if(diffDocumentHeight > 0){
			window.scrollTo(0, window.pageYOffset + diffDocumentHeight)
		}
		documentHeight.current = getDocumentHeight()

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