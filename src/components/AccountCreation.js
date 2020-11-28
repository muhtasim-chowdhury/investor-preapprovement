import React, {useState} from 'react'

const passRegex = /[0-9!@#$%^&*()]/

export default function AccountCreation() {
	const [user, setUser] = useState('')
	const [pass,setPass] = useState('')
	const [reEnterPass, setReEnterPass] = useState('')  
	const [err, setErr] = useState('')
	const [accCreated, setAccCreated] = useState(false)

	function validate() {
		if (pass !== reEnterPass)
			setErr('Passwords do not match')
		else if (pass.length < 9)
			setErr('Password requires more than 8 characters')
		else if (!passRegex.test(pass))
			setErr('Please include a number or special character')
		else {
			setErr('')
			setAccCreated(true)
		}
	} 

	if(accCreated)
		return (
			<div>New Account Created</div>
		)

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<h2 className='err'>{err}</h2>
			<label>Username<input value={user} onChange={({target: {value}}) => setUser(value)}/></label>
			<label>Password<input value={pass} onChange={({target: {value}}) => setPass(value)}/></label>
			<label>Re-enter Password<input value={reEnterPass} onChange={({target: {value}}) => setReEnterPass(value)}/></label>
			<button onClick={validate}>Create Account</button>
		</div>
	)
}

function validateEmail(elementValue){      
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(elementValue); 
}