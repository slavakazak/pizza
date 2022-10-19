import React, {useState, useContext, useEffect} from "react"
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

type PersonsProviderProps = {
	children: React.ReactNode
}
	
export const PersonsProvider = ({children}: PersonsProviderProps) => {

	const [persons, setPersons] = useState<IPerson[]>(() => JSON.parse(localStorage.getItem('persons') || '[]'))

	useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
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