import React from "react"

type ButtonProps = {
	onClick(): void
	text: string
}

export function Button({ onClick, text }: ButtonProps){
	return(
		<button className="btn" onClick={onClick}>{text}</button>
	)
}