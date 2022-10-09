import { useState } from 'react'
import { usePersons } from "./PersonsContext"

export function Form() {

	const {persons, setPersons} = usePersons()

	const [value, setValue] = useState('')

  function handleSubmit(event) {
		if(isValid(value.trim())){

			setPersons([
				...persons, 
				{
					id: Date.now(),
					name: value.trim(),
					eating: false
				}
			])	

			setValue('')
		}
    
    event.preventDefault()
  }

	function isValid(value){
		return value.length >= 1 && value.length <= 256
	}
  
	return (
		<form id="form" onSubmit={handleSubmit}>
			<div className="textfield">
				<input 
					type="text" 
					className={value.trim() && 'filled'} 
					value={value} 
					onChange={e => setValue(e.target.value)} 
					required 
					minLength="1" 
					maxLength="256" 
					autoComplete="off"
				/>
				<label htmlFor="name-input">Введи имя</label>
			</div>
			<button id="submit" type="submit" className="btn">Добавить</button>
		</form>
	)
}