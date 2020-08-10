import React from 'react'
import InputField from '../UI/Form/InputField'

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
      </form>
    </>
  )
}

export default LandingPage
