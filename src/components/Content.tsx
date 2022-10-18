import React from "react"
import { Count } from "./Count"
import { Form } from "./Form"
import { List } from "./persons/List"
import { ThemeButton } from './ThemeButton'
import { PersonsProvider } from './persons/PersonsContext'
import { Buttons } from "./buttons/Buttons"

export function Content() {

	return (
		<PersonsProvider>
			<div id="content">
				<div className="row">
					<div className="col">

						<div className="top-row">
							<Count/>
							<ThemeButton/>
						</div>

						<List/>

						<Form/>

						<Buttons/>

					</div>
				</div>
			</div>
		</PersonsProvider>
	)
	
}