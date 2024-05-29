import React, { useEffect } from 'react'
import { Box, Typography, Grid } from '@mui/material';
import Image1 from '/hashirr.jpg';
import Image2 from '/mudassar.jpg';
import Image3 from '/farheen.jpeg';
import Image4 from '/tehreem.png';
import Image5 from '/anum.png';
import Image6 from '/usman.png';

const Team = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <Box px={6}>
      <Box sx={{ width: '100%', height: '5vw' }}></Box>
      <Box mt={5}>
      <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
              Introduction
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} mb={2}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gennotate, developed by NUST students, tackles the challenges of data scarcity and manual annotation in medical imaging. Led by Muhammad Hashir Malik, the team developed a user-friendly web platform for image generation and annotation.
        </Typography>
        <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} mb={2}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mudassar Khan's expertise in model training empowers Gennotate to produce diverse OCT images, while Farheen Fatima and Tehreem Javaid's segmentation and classification models automate annotation.
        </Typography>
        <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Under the guidance of Ma'am Anum Abdus Salam and Dr. Usman Akram, Gennotate emerges as an innovative solution, fostering collaboration and driving advancements in medical imaging for enhanced research and diagnosis.
        </Typography>
      </Box>
      <Box my={10}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Box p={2}>
              <Box sx={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', width: '100%', background: 'white', borderRadius: '0.5vw' }} p={1}>
                <img src={Image1} alt='' width='100%' style={{ borderRadius: '0.5vw' }}/>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', fontWeight: 'bold' }} textAlign='center' my={2}>Muhammad Hashir Malik</Typography>
                <Box>
                  <hr/>
                </Box>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} textAlign='center' my={2}>Web Developer (Team Lead)</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box p={2}>
              <Box sx={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', width: '100%', background: 'white', borderRadius: '0.5vw' }} p={1}>
                <img src={Image3} alt='' width='100%' style={{ borderRadius: '0.5vw' }}/>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', fontWeight: 'bold' }} textAlign='center' my={2}>Farheen Fatima</Typography>
                <Box>
                  <hr/>
                </Box>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} textAlign='center' my={2}>AI Engineer</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box p={2}>
              <Box sx={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', width: '100%', background: 'white', borderRadius: '0.5vw' }} p={1}>
                <img src={Image4} alt='' width='100%' style={{ borderRadius: '0.5vw' }}/>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', fontWeight: 'bold' }} textAlign='center' my={2}>Tehreem Javaid</Typography>
                <Box>
                  <hr/>
                </Box>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} textAlign='center' my={2}>AI Engineer</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box p={2}>
              <Box sx={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', width: '100%', background: 'white', borderRadius: '0.5vw' }} p={1}>
                <img src={Image2} alt='' width='100%' style={{ borderRadius: '0.5vw' }}/>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', fontWeight: 'bold' }} textAlign='center' my={2}>Mudassar Khan</Typography>
                <Box>
                  <hr/>
                </Box>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} textAlign='center' my={2}>AI Engineer</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={3}>
            <Box p={2}>
              <Box sx={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', width: '100%', background: 'white', borderRadius: '0.5vw' }} p={1}>
                <img src={Image5} alt='' width='100%' style={{ borderRadius: '0.5vw', border: '1px solid rgba(0, 0, 0, 0.2)' }}/>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', fontWeight: 'bold' }} textAlign='center' my={2}>Ma'am Anum Abdus Salam</Typography>
                <Box>
                  <hr/>
                </Box>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} textAlign='center' my={2}>Supervisor</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box p={2}>
              <Box sx={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', width: '100%', background: 'white', borderRadius: '0.5vw' }} p={1}>
                <img src={Image6} alt='' width='100%' style={{ borderRadius: '0.5vw', border: '1px solid rgba(0, 0, 0, 0.2)' }}/>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', fontWeight: 'bold' }} textAlign='center' my={2}>Dr. Usman Akram</Typography>
                <Box>
                  <hr/>
                </Box>
                <Typography sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }} textAlign='center' my={2}>Supervisor</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Team