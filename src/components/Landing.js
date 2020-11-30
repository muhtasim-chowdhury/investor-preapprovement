import React, {useState} from 'react'
import './Landing.css';


export default function Landing({setQualified, setSubmitted, setDisqualifyMsg}) {
	const [invtAmt, setInvtAmt] = useState('')
	const [invtType, setInvtType] = useState('')
	const [TNW, setTNW] = useState('')
	const [income, setIncome] = useState('')
	const [credScore, setCredScore] = useState('')
	const [err, setErr] = useState(null)

	const validateInvtAmt = ({target: {value}}) => {
		if (value.length < 1) setInvtAmt(value)
		else isNumeric(value[value.length-1]) && setInvtAmt(value)
	}

	const validateInvtType = ({target: {value}}) => {
		if (value.length < 1) setInvtType(value)
		else isAlpha(value[value.length-1]) && setInvtType(value)
	}

	const validateTNW = ({target: {value}}) => {
		if (value.length < 1) setTNW(value)
		else isNumeric(value[value.length-1]) && setTNW(value)
	}

	const validateIncome = ({target: {value}}) => {
		if (value.length < 1) setIncome(value)
		else isNumeric(value[value.length-1]) && setIncome(value)
	}

	const validateCredScore = ({target: {value}}) => {
		if (value.length < 1) setCredScore(value)
		else isNumeric(value[value.length-1]) && setCredScore(value)
	}

	const submit = e => {
		e.preventDefault()
		let score = Number.parseInt(credScore)
		if (invtAmt.length < 1 || invtType.length < 1 || TNW.length < 1 || income.length < 1 || credScore.length < 1 || (score < 300 || score > 850)) 
			setErr('Please do not leave any fields empty and keep Credit Score from 300-850')
		else   {
			// check if they are qualified
			mockFetch('www.api.com', {method: 'POST', body: JSON.stringify({invtAmt, income, credScore, TNW})})
				.then(res => res.json())
				.then(data => {
					if (data.qualified)
						setQualified(true)
					else {
						setQualified(false)
						setDisqualifyMsg(data.msg)
					} 
					setSubmitted(true)
				})
				.catch(err => console.log(err))
		}
	}

	return (
		<div id='landing'>
			<h1 className='lorem'>{lorem}</h1>
			<h2 className='err'>{err}</h2>
			<div id='form'>
				<label>Investment Amount $<input placeholder='' value={invtAmt} onChange={validateInvtAmt}/></label>
				<label>Investment Type <input placeholder='' value={invtType} onChange={validateInvtType} /></label>
				<label>Total Net Worth <input placeholder='' value={TNW} onChange={validateTNW} /></label>
				<label>User Estimated Yearly Income <input placeholder='' value={income} onChange={validateIncome}/></label>
				<label>User Estimated Credit Score <input placeholder='' value={credScore} onChange={validateCredScore} /></label>
			</div>
			<button onClick={submit} >Submit</button>
		</div>
	)
}


function isNumeric(str) {
	return !isNaN(str)
}

function isAlpha(str) {
	var code, i, len;
  
	for (i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123)) { // lower alpha (a-z)
			return false;
		}
	}
	return true;
  };


function mockFetch(url, {method, body} ) {
	return new Promise((resolve, reject) => {
		const invtInfo = JSON.parse(body)

		if (Number.parseInt(invtInfo.invtAmt) > 9000000)
			return reject({status: 400})

		if (!isQualified(invtInfo))
			return resolve({
				json: ()=> ({qualified: false, msg: lorem, status: 200})
			})
		
		return resolve({
			json: () => ({qualified: true})
		})
	})
}


function isQualified({invtAmt, income, credScore, TNW}) {
	if (invtAmt > 0.2*income)	return false
	if (credScore < 600)	return false
	if (invtAmt > 0.03*TNW) return false

	return true
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros sapien, cursus id cursus ac, cursus at erat. Nullam porta eu nibh vitae posuere. Nulla et fringilla leo. Pellentesque et lacus elit. Nulla dui turpis, finibus tempus elit vitae, scelerisque facilisis enim. Nulla facilisi. Proin non eleifend massa. '