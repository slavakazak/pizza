import React, { FormEvent, useRef } from 'react'
import { usePersons } from "./persons/PersonsContext"
import { useInput } from '../hooks/useInput'

export function Form() {

	const {persons, setPersons} = usePersons()

	const input = useInput('')

	const inputEl = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent) {
		if(isValid(input.value)){

			setPersons([
				...persons, 
				{
					id: Date.now(),
					name: input.value,
					eating: false
				}
			])	

			input.clear()
		}
    
    event.preventDefault()
  }

	const isValid = (value: string) => value.length >= 1 && value.length <= 256
  
	return (
		<form id="form" onSubmit={handleSubmit}>
			<div className="textfield">
				<input 
					ref={inputEl}
					type="text"
					className={input.value && 'filled'} 
					{...input.bind}
					required 
					minLength={1} 
					maxLength={256} 
					autoComplete="off"
				/>
				<label htmlFor="name-input">Введи имя</label>
			</div>
			<button id="submit" type="submit" className="btn" onClick={() => inputEl.current!.focus()}>Добавить</button>
		</form>
	)
}