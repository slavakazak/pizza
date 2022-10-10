import { useState, useRef } from 'react'
import { usePersons } from "./persons/PersonsContext"

function useInput(initialValue){
	const [value, setValue] = useState(initialValue)

	const onChange = event => setValue(event.target.value)

	const clear = () => setValue('')

	return{
		bind: {value, onChange},
		value,
		clear
	}
}

export function Form() {

	const {persons, setPersons} = usePersons()

	const input = useInput('')

	const inputEl = useRef(null)

  function handleSubmit(event) {
		const value = input.value.trim()

		if(isValid(value)){

			setPersons([
				...persons, 
				{
					id: Date.now(),
					name: value,
					eating: false
				}
			])	

			input.clear()
		}
    
    event.preventDefault()
  }

	const isValid = value => value.length >= 1 && value.length <= 256
  
	return (
		<form id="form" onSubmit={handleSubmit}>
			<div className="textfield">
				<input 
					ref={inputEl}
					type="text"
					className={input.value.trim() && 'filled'} 
					{...input.bind}
					required 
					minLength="1" 
					maxLength="256" 
					autoComplete="off"
				/>
				<label htmlFor="name-input">Введи имя</label>
			</div>
			<button id="submit" type="submit" className="btn" onClick={() => inputEl.current.focus()}>Добавить</button>
		</form>
	)
}