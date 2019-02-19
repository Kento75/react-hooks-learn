import React, { useState } from 'react'

const OneTimeButton = (props) => {
  const [clicked, setClicked] = useState(false)

  const doClick = () => {
    console.log('Click!!')
    setClicked(true)
  }

  return (
    <button
      onClick={ clicked ? undefined : doClick }
      disabled={ clicked }
    >
      You Can Only Click Me Once
    </button>
  )
}

export default OneTimeButton
