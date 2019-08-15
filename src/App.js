import React, { useState, useEffect } from 'react';
import { Grid, Typography, withStyles, Fade } from '@material-ui/core'
import { Hero, ContentContainer, AnimatedText } from './components'
import hero3Img from './assets/hero3.jpg'
import hero2Img from './assets/hero5.jpg'
import heroImg from './assets/hero1.jpg'

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
      <ContentContainer style={{
        display:'flex',
        flex: 1,
        justifyContent: 'center',
        paddingTop: '40px'
      }}>
      <AnimatedText />
{/*        <Typography variant='h2' style={{ fontFamily: "mozart" }}>
          <Typewriter
            options={{
              strings: 'skjghisole',
              cursor: '_',
              autoStart: true
            }}
          >
          {console.log(window)}
          {
            console.log(window.innerHeight)
            // 1.5*(outer - inner) == scrollY
          }
          {
            console.log(window.outerHeight)
          }
          </Typewriter>
        </Typography> */}
      </ContentContainer>
      <Hero source={hero2Img} />
    </Grid>
  )
})