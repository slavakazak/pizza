import React, { useState, useEffect, useRef } from "react"
import './theme-button.css'

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

type ThrmeType = 'dark' | 'light'

function getTheme(): ThrmeType{
	if(localStorage.getItem('theme') === DARK_THEME || window.matchMedia('(prefers-color-scheme: dark)').matches){
		return DARK_THEME
	}
	return LIGHT_THEME
}

export function ThemeButton(){

	const [theme, setTheme] = useState<ThrmeType>(() => getTheme())

	const body = useRef(document.body)

	useEffect(() => {
    localStorage.setItem('theme', theme)
    body.current.className = `${theme}-theme`
  }, [theme])

  function toggleTheme(){
		setTheme(prev => prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
  }

	return (
		<button className="theme-button" onClick={toggleTheme}>
			<span className="toggle-light toggle-decorator">
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"/>
				</svg>
			</span>
			<span className="toggle-dark toggle-decorator">
				<svg width="100%" height="100%" viewBox="0 0 24 24">
					<path d="M10,7C10,8.391 10.414,9.75 11.189,10.904C11.965,12.059 13.066,12.956 14.354,13.482C15.641,14.007 17.056,14.138 18.418,13.856C19.78,13.574 21.027,12.893 22,11.9L22,12C22,17.523 17.523,22 12,22C6.477,22 2,17.523 2,12C2,6.477 6.477,2 12,2L12.1,2C11.434,2.651 10.905,3.429 10.545,4.288C10.184,5.146 9.999,6.069 10,7ZM4,12C3.999,13.785 4.596,15.519 5.694,16.926C6.792,18.333 8.33,19.332 10.061,19.765C11.793,20.197 13.62,20.038 15.251,19.313C16.882,18.588 18.223,17.338 19.062,15.762C17.569,16.114 16.012,16.078 14.537,15.659C13.062,15.239 11.719,14.45 10.634,13.366C9.55,12.282 8.761,10.938 8.341,9.463C7.922,7.988 7.886,6.431 8.238,4.938C6.958,5.62 5.887,6.638 5.14,7.882C4.394,9.126 4,10.549 4,12Z"/>
				</svg>
			</span>
		</button>
	)
}