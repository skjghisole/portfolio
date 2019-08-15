import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

export default (props) => {
	const [windowScroll, setWindowScroll] = useState(window.pageYOffset/3)
	const [moving, setMoving] = useState({})

	if (props.filtered) {
		setMoving({})
	}

	const transform = () => {
		if (windowScroll < 200) {
			const temp = window.pageYOffset/3
			setWindowScroll(temp)
		}
	}

	const debounce = (func, ms=5) => {
		let timeout
		return (props) => {
			const later = () => {
				func.apply(this, props)
			}
			const trigger = !timeout
			clearTimeout(timeout)
			timeout = setTimeout(later, ms)
			trigger && func.apply(this, props)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", debounce(transform))
	})

	const { style } = props

	return (
		<div style={{
      backgroundImage: `url(${props.source})`,
	    height: "120vh",
	    maxHeight: "1000px",
	    overflow: "hidden",
	    position: "relative",
	    backgroundPosition: "center center",
	    backgroundSize: "cover",
	    margin: "0",
	    padding: "0",
	    border: "0",
	    display: "flex",
	    alignItems: "center",
	    transform: "translate3d(0," + windowScroll + "px,0)",
      "&:before": {
      	background: "rgba(0, 0, 0, 0.5)"
    	},
	    "&:after,&:before": {
	      position: "absolute",
	      zIndex: "1",
	      width: "100%",
	      height: "100%",
	      display: "block",
	      left: "0",
	      top: "0",
	      content: "''"
	    },
	    ...style
		}}
		>
			{props.children}
		</div>
	)
}