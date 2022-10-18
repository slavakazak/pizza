import React, {useState, useContext, useEffect, useRef} from "react"
import { IPerson } from '../../interfaces'

interface PersonsContextInterface {
	persons: IPerson[]
	setPersons(persons: IPerson[]): void
	setPersonsWithSort(newPersons: IPerson[]): void
}

const PersonsContext = React.createContext<PersonsContextInterface>({
	persons: [],
	setPersons(){},
	setPersonsWithSort(){}
})

export const usePersons = () => useContext(PersonsContext)

const getDocumentHeight = () => Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	)

type PersonsProviderProps = {
	children: JSX.Element
}
	
export const PersonsProvider = ({children}: PersonsProviderProps) => {

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

	function setPersonsWithSort(newPersons: IPerson[]){
		setPersons(newPersons.sort((a, b) => a.eating === b.eating ? a.id - b.id : +b.eating - +a.eating))
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