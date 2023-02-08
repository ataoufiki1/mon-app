import React from 'react'

const Form = (props) => {
  return (
      <form onSubmit={props.getWeater}>
          <input type="text" name ="city" placeholder="City" />
          <input type="text" name="country" placeholder="Country" />
          <button>Chercher</button>
    </form>
  )
}

export default Form