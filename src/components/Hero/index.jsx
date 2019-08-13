import React from 'react'
import { Grid } from '@material-ui/core'

export default (props) => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<img src={props.source} width='100%'/>
			</Grid>
		</Grid>
	)
}