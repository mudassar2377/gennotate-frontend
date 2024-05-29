import React, { useEffect, useContext, useState } from 'react'
import { Box, Grid, Typography, TextField, Button, Tooltip } from '@mui/material';
import Image2 from '/image7-normal.png';
import Image3 from '/image8-cnv.png';
import Image4 from '/image9-dme.png';
import Image5 from '/image10-drusen.png';
import gennotateContext from '../gennotateContext/gennotateContext';
import GenerateAlert from '../components/GenerateAlert';
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";

const Generate = () => {
    const [left, setLeft] = useState(0)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      const context = useContext(gennotateContext);
      const { setAlertMsg, setGenerateAlert, generateImages, user } = context;
      const handleSubmit = (e) =>{
        e.preventDefault();
        const normal = e.target.elements.normal.value; // Corrected variable name
        const cnv = e.target.elements.cnv.value;
        const dme = e.target.elements.dme.value;
        const drusen = e.target.elements.drusen.value;
        if (isNaN(parseInt(normal)) || isNaN(parseInt(cnv)) || isNaN(parseInt(dme)) || isNaN(parseInt(drusen))) {
            setAlertMsg('Invalid input. The input entered should only be integers')
            setGenerateAlert(true)
        }
        else {
            setGenerateAlert(false)
            const startTime = performance.now()
            generateImages({ "userId": user.id, "normal": parseInt(normal), "cnv": parseInt(cnv), "dme": parseInt(dme), "drusen": parseInt(drusen) }, startTime); // Corrected variable name
        }
    }
    
  return (
    <Box>
      <Box sx={{ width: '100%', height: '5vw' }}></Box>
      <Box sx={{ width: '100%', height: '45vw', position: 'relative', overflow: 'hidden' }} my={10}>
        <Box sx={{ position: 'absolute', top: 0, left: `${left * 100}%`, width: '400%', height: '45vw', display: 'flex', transition: '1s ease left'
        // animationName: 'animation11', animationDuration: '48s', animationIterationCount: 'infinite' 
        }}>
          <Box sx={{ width: '25%', height: '45vw' }} px={6}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Grid container>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography textAlign='left' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }}>
                  Normal
                </Typography>
                <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }} my={3} pr={10}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In a normal OCT image, the retinal layers, including the nerve fiber layer, ganglion cell layer, inner plexiform layer, inner nuclear layer, outer plexiform layer, outer nuclear layer, photoreceptor layer (containing the outer segments of photoreceptor cells), retinal pigment epithelium (RPE), and choroid, are well-defined and exhibit a regular arrangement.
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'center' }} pr={10} mt={2}>
                  <Tooltip arrow title='previous' onClick={()=>{}}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronLeft /></Box>
                  </Tooltip>
                  <Box mx={1}></Box>
                  <Tooltip arrow title='next' onClick={()=>{ setLeft(-1); }}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaAngleRight /></Box>
                  </Tooltip>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <img src='https://res.cloudinary.com/dnmy80tpe/image/upload/v1715154138/neosj2t0guyu4ygvjojb.png' alt='Image' width='100%' height='100%'/>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ width: '25%', height: '45vw' }} px={6}>
              <Grid container>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} pr={10}>
                <Typography textAlign='left' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }}>
            Choroidal Neovascularization (CNV)
          </Typography>
          <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }} my={3}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choroidal Neovascularization(CNV) is a condition where new, abnormal blood vessels grow beneath the retina in the eye. This condition is often associated with age-related macular degeneration (AMD), although it can also occur due to other factors such as myopia or eye trauma.
          </Typography>
          <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Optical Coherence Tomography (OCT) images, Choroidal Neovascularization(CNV) appears as irregular, highly reflective areas beneath the retina. These abnormal blood vessels can disrupt the normal architecture of the retina, leading to symptoms such as vision loss or distortion.
          </Typography>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'center' }} mt={2}>
                  <Tooltip arrow title='previous' onClick={()=>{ setLeft(0) }}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronLeft /></Box>
                  </Tooltip>
                  <Box mx={1}></Box>
                  <Tooltip arrow title='next' onClick={()=>{ setLeft(-2); }}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaAngleRight /></Box>
                  </Tooltip>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <img src='https://res.cloudinary.com/dnmy80tpe/image/upload/v1715154144/ffbnc4zlc3ygsuhqp6e8.png' alt='Image' width='100%' height='100%'/>
                </Grid>
              </Grid>
          </Box>
          <Box sx={{ width: '25%', height: '45vw' }} px={6}>
          <Grid container>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} pr={10}>
                <Typography textAlign='left' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }}>
            Diabetic Macular Edema(DME)
          </Typography>
          <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }} my={3}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diabetic Macular Edema(DME), is a complication of diabetes that affects the macula, the central part of the retina responsible for sharp, central vision. DME occurs when fluid accumulates in the macula, leading to swelling and distortion of vision.
          </Typography>
          <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Optical Coherence Tomography (OCT) images, Diabetic Macular Edema(DME) appears as areas of thickening and fluid accumulation within the macula.
          </Typography>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'center' }} mt={2}>
                  <Tooltip arrow title='previous' onClick={()=>{ setLeft(-1); }}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronLeft /></Box>
                  </Tooltip>
                  <Box mx={1}></Box>
                  <Tooltip arrow title='next' onClick={()=>{ setLeft(-3); }}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaAngleRight /></Box>
                  </Tooltip>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <img src='https://res.cloudinary.com/dnmy80tpe/image/upload/v1715154153/naqtqgh7rukglhy82mpt.png' alt='Image' width='100%' height='100%'/>
                </Grid>
              </Grid>
          </Box>
          <Box sx={{ width: '25%', height: '45vw' }} px={6}>
          <Grid container>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} pr={10}>
                <Typography textAlign='left' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }}>
            Drusen
          </Typography>
          <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }} my={3}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Drusen are small yellow or white deposits that accumulate beneath the retina, particularly in the macula, and are a hallmark characteristic of age-related macular degeneration (AMD). Drusen can be classified as either hard or soft, with soft drusen being larger and more associated with AMD progression.
          </Typography>
          <Typography textAlign='justify' sx={{ color: '#154d4f', fontSize: { sm: '1.2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif', width: '100%' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Optical Coherence Tomography (OCT) images, drusen appear as distinct elevations above the retinal pigment epithelium (RPE) or as deposits within the RPE layer itself.
          </Typography>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'center' }} mt={2}>
                  <Tooltip arrow title='previous' onClick={()=>{ setLeft(-2) }}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronLeft /></Box>
                  </Tooltip>
                  <Box mx={1}></Box>
                  <Tooltip arrow title='next' onClick={()=>{ }}>
                  <Box sx={{ width: '3vw', height: '3vw', background: '#154d4f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaAngleRight /></Box>
                  </Tooltip>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <img src='https://res.cloudinary.com/dnmy80tpe/image/upload/v1715154159/ltxge1yfbrcszjt3h0km.png' alt='Image' width='100%' height='100%'/>
                </Grid>
              </Grid>
          </Box>
        </Box>
      </Box>
      <Box px={6} mb={10} mt={5}>
        <Box sx={{ width: '100%', borderRadius: '1vw', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)' }} p={3}>
        <Typography mb={2} textAlign='center' sx={{ fontWeight: 700, color: '#154d4f', fontSize: { sm: '2vw', xs: '9vw' }, fontFamily: '"Rubik", sans-serif' }}>Generate Images</Typography>
          <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sm={3} p={2}>
              <Box sx={{ width: '100%', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', borderRadius: '.5vw', height: '100%' }} p={1}>
                <img src={Image2} alt='Image' width='100%' style={{ borderRadius: '.5vw' }}/>
                <Box sx={{ height: '30vh' }}>
                  <Typography textAlign={{sm: 'left', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1.5vw'}, fontWeight: 'bold', color: '#154D4F' }} my={2}>Normal</Typography>
                  <Typography textAlign={{sm: 'justify', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1vw'}, color: '#154D4F' }}>In a normal OCT image, the retinal layers are well-defined and exhibit a regular arrangement. Enter the No. of normal images to be generated:</Typography>                
                </Box>
                <Box mb={1}>
                  <TextField name='normal' label="No. of normal images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} p={2}>
              <Box sx={{ background: 'white', width: '100%', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', borderRadius: '0.5vw', height: '100%' }} p={1}>
                <img src={Image3} alt='Image' width='100%' style={{ borderRadius: '0.5vw' }}/>
                <Box sx={{ height: '30vh' }}>
                  <Typography textAlign={{sm: 'left', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1.5vw'}, fontWeight: 'bold', color: '#154D4F' }} my={2}>CNV</Typography>
                  <Typography textAlign={{sm: 'justify', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1vw'}, color: '#154D4F' }}>Choroidal Neovascularization(CNV) is a condition where new, abnormal blood vessels grow beneath the retina in the eye. Enter the No. of CNV images to be generated:</Typography>
                  <Typography textAlign={{sm: 'justify', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1vw'}, color: '#154D4F' }}></Typography>
                </Box>
                <Box mb={1}>
                  <TextField name='cnv' label="No. of CNV images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} p={2}>
            <Box sx={{ background: 'white', width: '100%', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', borderRadius: '0.5vw', height: '100%' }} p={1}>
                <img src={Image4} alt='Image' width='100%' style={{ borderRadius: '0.5vw' }}/>
                <Box sx={{ height: '30vh' }}>
                  <Typography textAlign={{sm: 'left', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1.5vw'}, fontWeight: 'bold', color: '#154D4F' }} my={2}>DME</Typography>
                  <Typography textAlign={{sm: 'justify', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1vw'}, color: '#154D4F' }}>Diabetic Macular Edema(DME), is a complication of diabetes that affects the macula, the central part of the retina responsible for sharp, central vision. Enter the number of DME images to be generated:</Typography>
                </Box>
                <Box mb={1}>
                  <TextField name='dme' label="No. of DME images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} p={2}>
            <Box sx={{ background: 'white', width: '100%', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', borderRadius: '0.5vw', height: '100%' }} p={1}>
                <img src={Image5} alt='Image' width='100%' style={{ borderRadius: '0.5vw' }}/>
                <Box sx={{ height: '30vh' }}>
                  <Typography textAlign={{sm: 'left', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1.5vw'}, fontWeight: 'bold', color: '#154D4F' }} my={2}>Drusen</Typography>
                  <Typography textAlign={{sm: 'justify', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '1vw'}, color: '#154D4F' }}>Drusen are small yellow or white deposits that accumulate beneath the retina, particularly in the macula, and are a hallmark characteristic of age-related macular degeneration (AMD). Enter the No. of drusen images to be generated: </Typography>
                </Box>
                <Box mb={1}>
                  <TextField name='drusen' label="No. of drusen images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box px={2} pt={5} sx={{ width: '100%' }}>
            <Button type='submit' sx={{ width: '100%', fontWeight: 'bold', background: 'linear-gradient(to bottom, #0ea190, #11b97c)' }} variant='contained'>Generate</Button>
          </Box>
          </form>
          <Box px={2} pt={2}>
            <GenerateAlert/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Generate
