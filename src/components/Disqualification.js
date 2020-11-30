import React from 'react'

export default function Disqualification({msg}) {
	return (
	<div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', height: '60vh', fontSize: '20px'}}>
		<div style={{width: '60%'}}>{msg}</div>
		<div style={{width: '60%', marginTop:'5%'}}>Please contact 202-555-0123 to get into contact with customer service.</div>
	</div>
	)
}
