import React, { useEffect } from 'react'
import { useInput } from '../hooks/useInput'

const DEFAULT_HEADER = 'Пицца'

export function Sidebar(){

  const input = useInput(() => localStorage.getItem('head') || DEFAULT_HEADER)

  useEffect(() => {
    const headValue = input.value || DEFAULT_HEADER
    localStorage.setItem('head', headValue)
    document.title = headValue
  }, [input.value])

  const classes = ['head-input']
  if(!input.value){
    classes.push('no-value')
  }

  return (
    <div id="sidebar">
      <input className={classes.join(' ')} type="text" required minLength={1} maxLength={20} {...input.bind}/>
    </div>
  )
}