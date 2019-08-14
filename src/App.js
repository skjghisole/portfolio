import React from 'react';
import { Grid } from '@material-ui/core'
import { Hero } from './components'
import heroImg from './assets/hero.jpg'

export default () => {
  return (
    <Grid>
      <Hero source={heroImg} />
    </Grid>
  )
}