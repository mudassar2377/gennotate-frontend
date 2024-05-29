import React, { useContext, useRef, useState, useEffect } from 'react';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import gennotateContext from '../gennotateContext/gennotateContext';
import { Box, Button, Dialog, DialogContent, DialogContentText, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
  const [current, setCurrent] = useState(0);
  const reff = useRef(null);
    const navigate = useNavigate();
    const context = useContext(gennotateContext);
    const { openModal, handleCloseModal, temp, segmentImages, user, temp2 } = context;
    useEffect(() => {
      setCurrent(0);
    }, [])
    console.log(temp2)
  return (
    <React.Fragment>
      <Dialog
        ref = {reff}
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '550px', height: '400px' }}>
                <Box sx={{ width: '275px', borderRight: '1px solid rgba(0, 0, 0, 0.1)', display: 'flex', flexShrink: 1, flexDirection: 'column', overflowY: 'auto' }}>
                    <Box sx={{ width: '250px', height: '250px', overflow: 'hidden', flex: '0 0 auto' }} my={1} onClick={()=>{ setCurrent(0); }}>
                        <img src={temp.link.replace('image/upload/', '')} alt='' width='100%' height='100%' style={{ border: current===0?'5px solid rgba(0, 0, 0, 0.3)':'none', borderRadius: '0.5vw' }}/>
                    </Box>
                    {temp2.length > 0 && (
                      <Box sx={{ width: '250px', height: '250px', overflow: 'hidden', flex: '0 0 auto' }} my={1} onClick={()=>{ setCurrent(1); }}>
                          {temp2[0] && temp2[0].link && (
                              <img src={temp2[0].link.replace('image/upload/', '')} alt='' width='100%' height='100%' style={{ border: current===1?'5px solid rgba(0, 0, 0, 0.3)':'none', borderRadius: '0.5vw' }}/>
                          )}
                      </Box>
                  )}
                </Box>
                {current === 0 && <Box sx={{ width: '275px', borderLeft: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Id"
                        value={temp.id}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        />
                </Box>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Class"
                        value={temp.generated===0?'Real':'Generated'}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        />
                </Box>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Type"
                        value={temp.type===0?'CNV':temp.type===1?'DME':temp.type===2?'Drusen':'Normal'}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        />
                </Box>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Link"
                        value={temp.link.replace('image/upload/', '')}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        multiline
                        maxRows={4}
                        />
                </Box>
                </Box>}
                {current===1 && <Box sx={{ width: '275px', borderLeft: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Id"
                        value={temp2[0].id}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        />
                </Box>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Class"
                        value={'Segmented'}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        />
                </Box>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Type"
                        value={temp.type===0?'CNV':temp.type===1?'DME':temp.type===2?'Drusen':'Normal'}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        />
                </Box>
                <Box py={1} pl={2}>
                    <TextField
                        label="Image Link"
                        value={(temp2[0] && temp2[0].link)?temp2[0].link.replace('image/upload/', ''):''}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant='standard'
                        fullWidth
                        color='success'
                        multiline
                        maxRows={4}
                        />
                </Box>
                </Box>}
            </Box>
            <Box sx={{ borderTop: '2px solid rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} mt={2} pt={2}>
                <Button variant='contained' color='inherit' onClick={handleCloseModal} sx={{ fontWeight: 700 }}>Close</Button>
                {temp2.length === 0 && <Button variant='contained' style={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', fontWeight: 700 }} onClick={()=>{ segmentImages({ "userId": user.id, "generatedImageId": temp.id }); }}>Create Segmented Image</Button>}
                <Button variant='contained' style={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', fontWeight: 700 }} onClick={()=>{ navigate('/editor'); handleCloseModal(); }}>Open in Editor</Button>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}