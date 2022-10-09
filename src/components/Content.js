import { Count } from "./Count"
import { Form } from "./Form"
import { List } from "./List"
import { ThemeButton } from './ThemeButton'
import { PersonsProvider } from './PersonsContext'
import { Buttons } from "./Buttons"

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