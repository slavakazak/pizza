export function Button({ onClick, text }){
	return(
		<button className="btn" onClick={onClick}>{text}</button>
	)
}