import React, { useState, useEffect } from 'react';
import { Grid, Typography, withStyles, Fade, Paper, Avatar, Hidden  } from '@material-ui/core'
import { Hero, ContentContainer, AnimatedText } from './components'
import hero3Img from './assets/hero3.jpg'
import hero2Img from './assets/hero5.jpg'
import avatar from './assets/me.jpg'
import code from './assets/code.jpg'

const styles = {
  headerQuote: {
    color: 'rgb(180,180,180)',
    padding: 50
  },
  container: {
    backgroundImage: 'linear-gradient(to right, rgb(7,7,7), rgb(13,13,13))',
  },
  smallBoxes: {
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    backgroundColor: 'rgb(220,220,220)',
    height: '40vh',
  },
  info: {
    padding: 50
  },
  codeBackground: {
    backgroundImage: 'linear-gradient(to right bottom, rgba(7,7,7, 0.75), rgba(13,13,13, 0.75)),url("https://res.cloudinary.com/dgm3l1csv/image/upload/v1565846350/products/2019_7_4_1565846350213.jpg")',
    maxWidth: 1500,
    width: 3000,
    height: 500,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundRepeat: 'no-repeat'
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
        <Grid container direction="column" justify='center' alignItems='center' style={{ marginHorizontal: 32 }}>
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
          <Grid container className={classes.info} justify='center' alignItems='center'>
            <Grid item xs={8} md={6}>
              <Typography variant="caption" style={{ fontSize: '1.6rem', fontFamily: 'robotomono' }}> 
                I am <strong>Stephen Karl Jeoffrey G. Hisole</strong>. A Back End Focused Software Engineer with full stack experience.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify='space-evenly' alignItems='center'>
            <Grid container item md={8} justify='center' alignItems='center'>
              <img src={code} style={{ size: 'cover', width: '100%', maxHeight: '100%', opacity: '1', "-webkit-filter": "blur(4px) grayscale(70%)", filter: "blur(4px) grayscale(70%)" }}/>
            </Grid>
            <Grid container item xs={8} justify='space-evenly' alignItems='center' style={{ position: 'absolute'}}>
              <Grid item md={3}>
                <Paper className={classes.smallBoxes} elevation={3}/>
              </Grid>
              <Grid item md={3}>
                <Paper className={classes.smallBoxes} elevation={3}/>
              </Grid>
              <Grid item md={3}>
                <Paper className={classes.smallBoxes} elevation={3}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
      <Hero source={hero2Img} />
    </Grid>
  )
})