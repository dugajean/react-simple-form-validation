import React from 'react';
import FormField from './components/FormField'
import minLength from './validators/minLength'
import formIsValid from './utils/formIsValid'

class App extends React.Component {
  state = {
    name: '',
    email: '',
    gender: '',
    errors: {}
  }

  handleInput = field => {
    if (field.error) {
      this.setState({ errors: { [field.name]: field.error } })
    } else {
      this.setState({ [field.name]: field.input, errors: { [field.name]: null } })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!formIsValid(this.state.errors)) {
      return alert('Please fix all form errors before submitting...')
    }
    
    alert('Success!')
  }

  render() {
    const genders = [
      { value: 'm', text: 'Male' },
      { value: 'f', text: 'Female' },
      { value: 'n', text: 'Refuse to disclose' },
    ]

    return (
      <form onSubmit={this.handleSubmit}>
        <FormField 
          name="name" 
          type="text" 
          required={true}
          placeholder="Type in your name..." 
          handleInput={this.handleInput} 
          validators={[input => minLength(input, 5)]} 
        />
        {this.state.errors.name ?? null}

        <FormField name="email" type="email" required={true} placeholder="Type in your email..." handleInput={this.handleInput} />
        {this.state.errors.email ?? null}

        <FormField name="gender" type="select" required={true} options={genders} handleInput={this.handleInput} />
        {this.state.errors.gender ?? null}

        <button>Submit</button>
      </form>
    );
  }
}

export default App;
