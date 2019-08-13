import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { Hero } from './components'
import hero from './assets/hero.jpg'

export default () => {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Hero source={hero} />
      <Grid item xs={12}>
        <Typography>Stephen Karl Jeoffrey G. Hisole</Typography>
      </Grid>
    </Grid>
  )
}