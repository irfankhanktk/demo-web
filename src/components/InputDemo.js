import React from 'react'
import { Container } from 'react-bootstrap'
const InputDemo = () => {
    const [name, setName] = React.useState('')
  return (
    <Container className='fluid'>
    <div className='home-cantainer'>
      <h2>Simple Event Example</h2>
      <label htmlFor="name">Enter company name: </label>
      <input value={name} type="text" id="companyName"  onChange={ (event) => setName(event.target.value)}/>
      <h4>You entered: {name}</h4>
    </div>
    </Container>
  )
}
export default InputDemo
