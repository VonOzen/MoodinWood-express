import React from 'react'
import InputField from '../UI/Form/InputField'
import Button from '../UI/Elements/Button'

const LandingPage = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <form action="" noValidate>
        <InputField 
          id="name"
          name="name"
          label="Input test"
          required
        />

        <Button>coucou</Button>
        <Button variant="outlined">coucou</Button>
        <Button disabled>coucou</Button>
        <Button color="secondary">coucou</Button>
        <Button color="secondary" variant="outlined">coucou</Button>
        <Button color="secondary" variant="outlined" disabled>coucou</Button>
      </form>
    </>
  )
}

export default LandingPage
