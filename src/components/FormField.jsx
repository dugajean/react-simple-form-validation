import React from 'react'

export default ({ name, type, placeholder, handleInput, required = false, options = [], validators = [], ...otherAttributes }) => {
  const validateThenDelegate = event => {
    for (const validator of validators) {
      const validation = validator(event.target.value)
      if (validation.fails) {
        return handleInput({ name, error: validation.message(name) })
      }
    }

    handleInput({ name, input: event.target.value })
  }

  const basicInput = (
    <input type={type} placeholder={placeholder} onInput={validateThenDelegate} required={required} {...otherAttributes} />
  )

  const selectInput = (
    <select required={required} defaultValue={0} onChange={validateThenDelegate} {...otherAttributes}>
      <option value={0} disabled>Please select...</option>
      {options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
    </select>
  )

  return (<div>{type === 'select' ? selectInput : basicInput}</div>)
}