import { useEffect } from 'react'
import { useInput } from '../hooks/useInput'

export function Sidebar(){

  const input = useInput(() => localStorage.getItem('head') || 'Пицца')

  useEffect(() => {
    localStorage.setItem('head', input.value)
    document.title = input.value || 'Пицца'
  }, [input.value])

  return (
    <div id="sidebar">
      <input className={'head-input' + (input.value ? '' : ' no-value')} type="text" required minLength="1" maxLength="20" {...input.bind}/>
    </div>
  )
}