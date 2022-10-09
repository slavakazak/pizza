import { useState, useEffect } from 'react'

export function Sidebar(){
  
  const [value, setValue] = useState(() => localStorage.getItem('head') || 'Пицца')

  useEffect(() => {
    localStorage.setItem('head', value)
    document.title = value || 'Пицца'
  }, [value])

  return (
    <div id="sidebar">
      <input className={'head-input' + (value ? '' : ' no-value')} type="text" required minLength="1" maxLength="20" value={value} onChange={e => setValue(e.target.value.trim())}/>
    </div>
  )
}