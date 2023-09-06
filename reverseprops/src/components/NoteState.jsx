import React from 'react'

const NoteState = (props) => {
const state = {
    "Name":"Madhav",
    "Course":"B Tech"
}
  return (
    <div>
      <NoteState.Provider   value={state}>
      {props.children}
      </NoteState.Provider>

    </div>
  )
}

export default NoteState
