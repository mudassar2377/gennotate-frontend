import { Box, Grid, Typography, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Image1 from '/image5-uncleaned.jpeg';
import Image2 from '/image6-cleaned.jpeg';
import Image3 from '/image1-generated.jpeg';
import Image4 from '/image3-generated.jpeg';
import gennotateContext from '../gennotateContext/gennotateContext';

const Custom = () => {
  const [namee, setName] = useState('')
  const fileInputStyle = {
    display: 'none', // Hide the default file input
  };

  const customButtonStyle = {
    border: '2px dashed #ccc',
    padding: '6px 12px',
    cursor: 'pointer',
    backgroundColor: '#f7f7f7',
    '&:hover': {
      backgroundColor: '#e7e7e7',
    },
    width: '100%',
    height: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1vw',
    fontSize: '1vw', 
    fontFamily: '"Rubik", sans-serif',
    color: '#154d4f'
  };
  const context = useContext(gennotateContext);
  const { setFile, cleanImages, user } = context;
  useEffect(()=>{
    window.scrollTo(0, 0);
    setFile('');
    setName('');
  }, [])
  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    setName(e.target.files[0].name);
  }
  const handleSubmit = () =>{
      cleanImages(user.id)
  }
  return (
    <Box>
      <Box sx={{ width: '100%', height: '5vw' }}></Box>
      <Box sx={{ width: '100%' }} mt={10}>
        <Typography textAlign='center' sx={{ color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%', fontWeight: 'bold' }}>Process your Images</Typography>
        <Typography textAlign='center' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }} px={6} my={10}>Gennotate streamlines image analysis by efficiently removing noise and facilitating precise segmentation and classification, empowering users to derive deeper insights from their images.</Typography>
        <Grid container px={6}>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'column' }}>
            <Box my={2}>
              <Typography textAlign='center' sx={{ color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '80%', fontWeight: 'bold' }}>Before</Typography>
            </Box>
            <img src={Image1} alt='Image' style={{ width: '40vw' }}/>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end', flexDirection: 'column' }}>
            <Box my={2} sx={{ width: '40vw' }}>
              <Typography textAlign='center' sx={{ color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', fontWeight: 'bold' }}>After</Typography>
            </Box>
            <img src={Image2} alt='Image' style={{ width: '40vw' }}/>
          </Grid>
        </Grid>
      </Box>
      <Box mt={10} mb={5}>
        <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>
              Image Classification
        </Typography>
      </Box>
      <Box px={6} sx={{ width: '100%', height: '17vw' }}>
        <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', width: '24%', height: '12vw', top: 0, left: '38%', zIndex: 4 }}>
            <Typography textAlign='center' sx={{ fontSize: '1.2vw', height: '12vw', background: 'linear-gradient(to bottom, #0ea190, #11b97c)', borderRadius: '1vw', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 0, 0, 0.1)' }}>Image Classifier</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '0%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation5', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 2 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image3} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>No Label</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '12%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation6', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 3 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image4} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>No Label</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '76%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation7', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 2 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image3} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>CNV</Typography>
          </Box>
          <Box sx={{ position: 'absolute', width: '12%', height: '12vw', top: 0, left: '88%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', animationName: 'animation8', animationDuration: '5s', animationIterationCount: 'infinite', zIndex: 3 }}>
            <Box sx={{ width: '80%', height: '80%', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={Image4} alt='Image' width='100%' style={{ borderRadius: '1vw' }}/>
            </Box>
            <Typography sx={{ fontSize: '1.2vw', color: '#616161' }}>DME</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: '30vh' }} px={6} mb={5}>
      <Box>
       <label htmlFor="file-upload" style={customButtonStyle}>
         {namee===''?'Click here to select a file':namee}
       </label>
       <input
         id="file-upload"
         type="file"
         style={fileInputStyle} // Corrected from sx to style
         onChange={handleImageChange}
       />
     </Box>
     </Box>
     <Box mx={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}  mb={10}><Button variant='contained' sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', fontWeight: 'bold' }} color='success' onClick={handleSubmit}>Submit</Button></Box>
    </Box>
  );
};

export default Custom;
