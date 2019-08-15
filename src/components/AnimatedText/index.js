import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import Typewriter from 'typewriter-effect'

export default () => {
	const [start, setStart] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scrollY = window.scrollY
			const difference = (window.outerHeight - window.innerHeight) * 1.5
			if (scrollY >= difference) {
				setStart(true)
			}
		})
		return window.removeEventListener("scroll", () => setStart(false))
	})

	return (
	  <Typography variant='h2' style={{ fontFamily: "mozart" }}>
		    {start && <Typewriter onInit={(typewriter) => {
	    	 	// typewriter.typeString('Hello!')
		    		// .callFunction((cb) => console.log(cb))
		    		// .pauseFor(1500)
		    		// .deleteAll()
		    		// .start()
		    		// typewriter
		    	typewriter
			    	.changeDelay(125)
			    	.typeString('skjashdjk')
		    		.callFunction((cb) => console.log(cb))
		    		.changeDeleteSpeed(40)
		    		.deleteChars(6)
		    		.typeString('ghiasde')
		    		.callFunction((cb) => console.log(cb))
		    		.deleteChars(4)
		    		.typeString('sole')
		    		.callFunction((cb) => console.log(cb))
		    		.typeString('.')
		    		.callFunction((cb) => console.log(cb))
		    		.pauseFor(500)
		    		.typeString('.')
		    		.callFunction((cb) => console.log(cb))
		    		.pauseFor(500)
			    	.changeDelay(50)
		    		.typeString('(Trust Me, its not gibberish)')
		    		.changeDeleteSpeed(30)
		    		.callFunction((cb) => console.log(cb))
		    		.pauseFor(2000)
		    		.deleteChars(31)
		    		.start()

		    }}
		      options={{
		        cursor: '_',
		      }}
		    />
		  	}
	  </Typography>
  )
}