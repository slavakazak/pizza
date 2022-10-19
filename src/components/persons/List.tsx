import React, { useRef } from 'react'
import { PersonItem } from './PersonItem'
import { usePersons } from './PersonsContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './list.css'

const getDocumentHeight = () => Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
)

export function List() {
	const { persons } = usePersons()

	const documentHeight = useRef(getDocumentHeight())

	function animateScroll() {
		const duration = 300
		let start = performance.now()

		requestAnimationFrame(function animate(time) {
			let timeFraction = (time - start) / duration;
			if (timeFraction > 1) timeFraction = 1;

 			window.scrollTo(0, window.pageYOffset + getDocumentHeight() - documentHeight.current)
			documentHeight.current = getDocumentHeight()

			if (timeFraction < 1) {
				requestAnimationFrame(animate);
			}

		})
	}

	return (
		<TransitionGroup id="list">
			{persons.map(person => (
				<CSSTransition
					key={person.id}
					classNames="person"
					timeout={300}
					onEntering={animateScroll}
					onExiting={animateScroll}
				>
					<PersonItem {...person} />
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}