import React, { useState, useEffect } from 'react';
import { Grid, Typography, withStyles, Fade, Paper, Avatar, Hidden  } from '@material-ui/core'
import { Hero, ContentContainer, AnimatedText } from './components'
import hero3Img from './assets/hero3.jpg'
import hero2Img from './assets/hero5.jpg'
import avatar from './assets/me.jpg'

const styles = {
  headerQuote: {
    color: 'rgb(180,180,180)',
    padding: 50
  },
  container: {
    backgroundImage: 'linear-gradient(to right, rgb(7,7,7), rgb(13,13,13))'
  },
}



export default withStyles(styles)((props) => {
  const { classes } = props
  // const [isVisible, setIsVisible] = useState(false)


  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.inner) {

  //     }
  //   })
  // })
  return (
    <Grid className={classes.container}>
      <Hero source={hero3Img}>
        <Fade in={true} timeout={{ enter: 2500 }}>
          <Typography variant='h3' className={classes.headerQuote}>This was once impossible.</Typography>
        </Fade>
      </Hero>
      <ContentContainer>
        <Grid container direction="column" justify='center' alignItems='center'>
          <Grid container justify="center" alignItems="center">
            <Avatar src={avatar}
              style={{
                width: 240,
                height: 240,
                position: 'relative',
                margin: "-120px 30px 0px",
              }}
            />
          </Grid>
            <Grid item>
              <AnimatedText />
            </Grid>
          <Grid container justify='center' alignItems='center'>
            <Grid item xs={8} md={4}>
              <Typography variant="caption" style={{ fontSize: '1.6rem' }}> 
                I am <strong>Stephen Karl Jeoffrey G. Hisole</strong>. A Back End Focused Software Engineer with full stack experience.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
      <Hero source={hero2Img} />
    </Grid>
  )
})