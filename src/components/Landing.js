import React, {useState} from 'react'
import './Landing.css';


export default function Landing() {
	const [invtAmt, setInvtAmt] = useState('')
	const [invtType, setInvtType] = useState('')
	const [TNW, setTNW] = useState('')
	const [income, setIncome] = useState('')
	const [credScore, setCredScore] = useState('')
	const [err, setErr] = useState(null)

	const validateInvtAmt = ({target: {value}}) => {
		if (value.length < 1) setInvtAmt(value)
		else Number.parseInt(value[value.length-1]) && setInvtAmt(value)
	}

	const validateInvtType = ({target: {value}}) => {
		if (value.length < 1) setInvtType(value)
		else isAlpha(value[value.length-1]) && setInvtType(value)
	}

	const validateTNW = ({target: {value}}) => {
		if (value.length < 1) setTNW(value)
		else Number.parseInt(value[value.length-1]) && setTNW(value)
	}

	const validateIncome = ({target: {value}}) => {
		if (value.length < 1) setIncome(value)
		else Number.parseInt(value[value.length-1]) && setIncome(value)
	}

	const validateCredScore = ({target: {value}}) => {
		if (value.length < 1) setCredScore(value)
		else Number.parseInt(value[value.length-1]) && setCredScore(value)
	}

	const submit = e => {
		e.preventDefault()
		if (invtAmt.length < 1 || invtType.length < 1 || TNW.length < 1 || income.length < 1 || credScore.length < 1) 
			setErr('Please do not leave any fields empty')
		else   {
			// send them to account creation or disqualification
		}
	}

	return (
		<div>
			<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros sapien, cursus id cursus ac, cursus at erat. Nullam porta eu nibh vitae posuere. Nulla et fringilla leo. Pellentesque et lacus elit. Nulla dui turpis, finibus tempus elit vitae, scelerisque facilisis enim. Nulla facilisi. Proin non eleifend massa. </h1>
			<h2 id='err'>{err}</h2>
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