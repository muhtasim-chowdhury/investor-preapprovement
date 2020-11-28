import {useState} from 'react'
import Landing from './components/Landing'
import AccountCreation from './components/AccountCreation'
import Disqualification from './components/Disqualification'
import './App.css';


function App() {
  const [qualified, setQualified] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!submitted)
    return (
      <div className='App'>
        <Landing setQualified={setQualified} setSubmitted={setSubmitted}/>
      </div>
    )

  if (submitted && qualified)
    return (
      <div className='App'>
        <AccountCreation/>
      </div>
    )

  if (submitted && !qualified)
      return (
        <div className='App'>
          <Disqualification/>
        </div>
      )
}

export default App;
