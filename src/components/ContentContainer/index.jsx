import React from 'react'
import { Paper, withStyles } from '@material-ui/core'

const styles = {
	container: {
		backgroundColor: 'rgb(220,220,220)',
		maxHeight: '900px',
		height: '120vh',
	 	margin: "10px 30px 0px",
    borderRadius: "6px",
    position: 'relative',
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
}

export default withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<Paper className={classes.container} elevation={3}>
			{props.children}
		</Paper>
	)
})