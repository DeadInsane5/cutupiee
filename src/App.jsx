import React from 'react'
import Letter from './components/Letter'
import Pattern from './components/Pattern'
import './App.css'

const App = () => {
  return (
    <>
      <Pattern />
      <div className="root-container">
        <Letter head={'Hello, World!'}
          para={'This is a sample letter component.'}
          greet={'Best regards,'}
          sender={'John Doe'}
          initials={'JD'} />
      </div>
    </>
  )
}

export default App