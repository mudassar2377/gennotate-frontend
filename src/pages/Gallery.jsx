import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useContext } from 'react'
import gennotateContext from '../gennotateContext/gennotateContext';
import Modal from '../components/Modal';

const Gallery = () => {
  const context = useContext(gennotateContext);
  const { setAuthenticationMsg, data, handleOpenModal, setSelected, temp2, selected, setTemp, data2, setTemp2 } = context;
  useEffect(() => {
    setAuthenticationMsg('No Text');
    window.scrollTo(0, 0);
  }, []);
  useEffect(()=>{
    if (data.length > 0) {
      setTemp(data[selected]);
    }
    if (data2.length > 0) {
      setTemp2(data2.filter(item => item.generatedImageId === data[selected].id));
    }
  }, [selected])
  return (
    <Box id='gallery' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', height: '5vw', background: 'red' }}></Box>
      <Box my={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} px={6}>
      <Typography textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>Gallery</Typography>
      {data.length !== 0 && <Button variant='contained' sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', fontWeight: 700 }}>Download</Button>}
      </Box>
      {data.length === 0 && <Box variant='contained' sx={{ width: '100%', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography textAlign='center' sx={{ fontSize: '1vw' }}>Nothing to show yet. The images you'll generate in generate section will appear here.</Typography></Box>}
      {data.length !== 0 && <Box sx={{ width: '100%' }} mb={10} px={6}>
        <Box sx={{ width: '100%', height: '100%', borderRadius: '1vw', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)' }} p={2}>
          <Grid container>
          {data.length > 0 && data.map((label, index)=>(<Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ width: '90%', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', borderRadius: '.5vw', position: 'relative' , transition: 'opacity 0.3s', '&:hover': { opacity: 1, cursor: 'pointer' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }} p={1} my={2}>
                <img src={label.link.replace("image/upload/", "")} alt='Image' width='100%' height='100%' style={{ borderRadius: '.5vw' }}/>
                <Box sx={{ background: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, color: 'rgba(255, 255, 255, 0.6)', transition: 'opacity 0.3s', '&:hover': { opacity: 1, cursor: 'pointer' }, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '.5vw' }} onClick={()=>{ handleOpenModal(); setSelected(index); }}>
                  <Typography>Click here to see the details</Typography>
                </Box>
              </Box>
            </Grid>))}
          </Grid>
        </Box>
      </Box>}
      <Modal/>
    </Box>
  )
}

export default Gallery
