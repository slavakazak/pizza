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
	children: React.ReactNode
}
	
export const PersonsProvider = ({children}: PersonsProviderProps) => {

	const [persons, setPersons] = useState<IPerson[]>(() => JSON.parse(localStorage.getItem('persons') || '[]'))

	const documentHeight = useRef(getDocumentHeight())

	// useEffect(() => {
	// 	documentHeight.current = getDocumentHeight()
  // }, [])

	useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
		
		const newDocumentHeight = getDocumentHeight()
		window.scrollTo(0, window.pageYOffset + newDocumentHeight - documentHeight.current)
		documentHeight.current = newDocumentHeight

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