import React, { useState, useEffect } from 'react';
import { Grid, Typography, withStyles, Fade } from '@material-ui/core'
import { Hero, ContentContainer } from './components'
import hero3Img from './assets/hero3.jpg'
import hero2Img from './assets/hero4.jpg'

const styles = {
  headerQuote: {
    color: 'rgb(180,180,180)',
    padding: 50
  },
  container: {
    backgroundImage: 'linear-gradient(to right, rgb(4,4,4), rgb(8,8,8))'
  }
}

export default withStyles(styles)((props) => {
  const { classes } = props
  return (
    <Grid className={classes.container}>
      <Hero source={hero3Img}>
        <Fade in={true} timeout={{ enter: 2500 }}>
          <Typography variant='h3' className={classes.headerQuote}>This was once impossible.</Typography>
        </Fade>
      </Hero>
      <ContentContainer>
      </ContentContainer>
      <Hero source={hero2Img} />
    </Grid>
  )
})