import React, { useContext, useEffect } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import gennotateContext from '../gennotateContext/gennotateContext';
import Image1 from '/image1-generated.jpeg';
import Image2 from '/image2-segmented.jpeg';
import Image3 from '/image3-generated.jpeg';
import Image4 from '/image4-segmented.jpeg';
import Image5 from '/image5-uncleaned.jpeg';
import Image6 from '/image6-cleaned.jpeg';
import { useNavigate, useLocation } from 'react-router-dom';

const Homee = () => {
  const context = useContext(gennotateContext);
  const { setHandleNavbar2 } = context;
  const navigate = useNavigate();
  const location = useLocation();
  const showHide = location.pathname !== '/home';
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <Box>
      <Box sx={{ width: '100%', height: '5vw' }}></Box>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }} px={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', flexDirection: 'column' }}>
          <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
            Unveiling the Future of Medical Imaging
          </Typography>
          <Typography textAlign='center' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }} my={7}>
            Empowering AI to Conquer Data Scarcity and Annotation Challenges
          </Typography>
          <Button variant='contained' sx={{ fontWeight: 700, background: 'linear-gradient(to bottom, #0ea190, #11b97c)' }} onClick={()=>{ navigate(showHide?'/authenticate':'/generate'); setHandleNavbar2(showHide?0:3); }}>Get Started</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box sx={{ width: '100%', height: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }} my={5} pr={6}>
              <Box sx={{ width: '45vw', height: '45vw', position: 'relative', overflow: 'hidden' }}>
                <Box style={{ width: '135vw', height: '45vw', position: 'absolute', top: 0, left: '0vw', display: 'flex', flexDirection: 'row', animationName: 'animation1', animationDuration: '8s', animationIterationCount: 'infinite' }}>
                <Box sx={{ width: '45vw', height: '45vw' }}>
                  <img src={Image1} alt='Image' width='100%' height='100%'/>
                </Box>
                <Box sx={{ width: '45vw', height: '45vw' }}>
                  <img src={Image2} alt='Image' width='100%' height='100%'/>
                </Box>
                <Box sx={{ width: '45vw', height: '45vw' }}>
                  <img src={Image1} alt='Image' width='100%' height='100%'/>
                </Box>
                </Box>
              </Box>
            </Box>
        </Grid>
      </Grid>
      <Box my={5}>
        <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
              Image Generation
        </Typography>
      </Box>
      <Box px={6} sx={{ width: '100%', height: '17vw' }}>
        <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', width: '24%', height: '12vw', top: 0, left: '32%', zIndex: 4 }}>
            <Typography textAlign='center' sx={{ fontSize: '1.2vw', height: '12vw', background: 'linear-gradient(to bottom, #0ea190, #11b97c)', borderRadius: '1vw', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 0, 0, 0.1)' }}>Image Generation Store</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '0%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation2', animationDuration: '4s', animationIterationCount: 'infinite', zIndex: 1 }}>
            <Box sx={{ width: '80%', height: '80%', border: '2px solid #616161', borderRadius: '1vw' }}>
              <Typography textAlign='center' sx={{ fontWeight: 700, color: '#616161', fontSize: { sm: '4vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    2
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>No. of Images</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '32%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation3', animationDuration: '4s', animationIterationCount: 'infinite', zIndex: 2 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={Image1} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Generated # 1</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '32%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation4', animationDuration: '4s', animationIterationCount: 'infinite', zIndex: 3 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image3} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Generated # 2</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '1.2vw', color: '#154d4f', width: '70%' }} textAlign='center'>Experience boundless data possibilities! Input your desired data amount, and watch our platform work its magic, generating it in mere moments. Embrace endless research and innovation opportunities while bidding farewell to data scarcity.</Typography>
      </Box>

      <Box mt={10} mb={5}>
        <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
              Image Segmentation
        </Typography>
      </Box>
      <Box px={6} sx={{ width: '100%', height: '17vw' }}>
        <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', width: '24%', height: '12vw', top: 0, left: '38%', zIndex: 4 }}>
            <Typography textAlign='center' sx={{ fontSize: '1.2vw', height: '12vw', background: 'linear-gradient(to bottom, #0ea190, #11b97c)', borderRadius: '1vw', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 0, 0, 0.1)' }}>Image Segmentation Store</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '0%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation5', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 2 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image1} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Image # 1</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '12%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation6', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 3 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image3} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Image # 2</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '76%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation7', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 2 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image2} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Segmented # 1</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '88%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation8', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 3 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image4} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Segmented # 2</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '1.2vw', color: '#154d4f', width: '70%' }} textAlign='center'>Simplify annotation tasks! Our platform automates the tedious manual annotation process, saving you time and effort. Experience seamless data labeling and streamline your workflow with ease.</Typography>
      </Box>

      <Box mt={10} mb={5}>
        <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
              Process your own images
        </Typography>
      </Box>
      <Box px={6} sx={{ width: '100%', height: '17vw' }}>
        <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', width: '24%', height: '12vw', top: 0, left: '38%', zIndex: 4 }}>
            <Typography textAlign='center' sx={{ fontSize: '1.2vw', height: '12vw', background: 'linear-gradient(to bottom, #0ea190, #11b97c)', borderRadius: '1vw', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 0, 0, 0.1)' }}>Image Cleaner</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '12%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation9', animationDuration: '4s', animationIterationCount: 'infinite', zIndex: 3 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image5} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Image</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '88%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation10', animationDuration: '4s', animationIterationCount: 'infinite', zIndex: 3 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image6} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>Cleaned</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '1.2vw', color: '#154d4f', width: '70%' }} textAlign='center'>Empower your research by uploading your own images for processing and segmentation. Take control of your data and harness the power of our platform to unlock new insights and possibilities.</Typography>
      </Box>

      <Box my={10}>
        <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
          Manual Annotation
        </Typography>
        <Box sx={{ width: '100%', height: 'auto' }} px={6} py={6}>
          <Box sx={{ border: '1px solid black', width: '100%', height: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <iframe width="100%" height='100%' src="https://www.youtube.com/embed/V2nP-aUVs0s?si=G3h_DZY_enc9JZ7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Homee
