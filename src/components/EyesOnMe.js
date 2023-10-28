// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
//Function to handle focus
    function handleFocus(){
        console.log('Good!')
    }
//Function to handle blur
function handleBlur(){
    console.log('Hey! Eyes on me!')
}

  return (
    <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe