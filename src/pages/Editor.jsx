import React, { useContext } from "react";
import { render } from "react-dom";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import { Box, Typography } from '@mui/material';
import { VscColorMode } from "react-icons/vsc";
import { MdOutlineZoomIn } from "react-icons/md";
import { Tooltip, Button, ButtonGroup } from "@mui/material";
import { IoMdMove } from "react-icons/io";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { BsArrowDownLeft } from "react-icons/bs";
import { PiTextT } from "react-icons/pi";
import { TfiPencil } from "react-icons/tfi";
import { FaRuler } from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { LuCircle } from "react-icons/lu";
import { ImScissors } from "react-icons/im";
import { TbRectangle } from "react-icons/tb";
import gennotateContext from '../gennotateContext/gennotateContext';

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;

const imageId1 = "https://res.cloudinary.com/dnmy80tpe/image/upload/v1713888780/ge8rmbrks035pfyjlnwz.jpg";
const imageId2 = "https://res.cloudinary.com/dnmy80tpe/image/upload/v1714304994/resized_image_n3iopp.jpg";

const images = [imageId1, imageId2]

class CornerstoneElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: props.stack,
      viewport: cornerstone.getDefaultViewport(null, undefined),
      imageId: props.stack.imageIds[0],
      currentId: 0,
      currentTool: 1,
      layers: []
    };

    this.onImageRendered = this.onImageRendered.bind(this);
    this.onNewImage = this.onNewImage.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }
  // this.setState((prevState) => ({
  //   layers: [...prevState.layers, newLayer]
  // }));
  render() {
    return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ width: '100vw', height: '5vw' }}>Hashir2</Box>
      <Box sx={{ width: '100vw', height: 'calc(100vh - 5vw)', display: 'flex', flexDirection: 'row'}}>
        <Box sx={{ height: '100%', padding: '10px' }}>
          {(this.state.currentTool >= 1 && this.state.currentTool <= 5) && <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', height: '180px', marginBottom: '10px', paddingTop: '10px', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>General</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Tooltip title='wwwc' arrow>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===1?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===1?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 1 });
                  const WwwcTool = cornerstoneTools.WwwcTool;
                  cornerstoneTools.addTool(WwwcTool);
                  cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 });
                }}><VscColorMode style={{fontSize: '26px'}}/></Box>
              </Tooltip>
              <Tooltip title='scale' arrow>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===2?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===2?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 2 });
                  cornerstoneTools.addTool(cornerstoneTools.ZoomTool, {
                    configuration: {
                        invert: false,
                        preventZoomOutsideImage: false,
                        minScale: .1,
                        maxScale: 20.0,
                    }
                    });
                    cornerstoneTools.setToolActive('Zoom', { mouseButtonMask: 1 })
                }}><MdOutlineZoomIn style={{fontSize: '32px'}}/></Box>
              </Tooltip>
              <Tooltip title='move' arrow>
                <Box sx={{ marginRight: '15px', marginTop: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 0, 0, 0.4)', border: this.state.currentTool===3?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===3?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 3 });
                  const PanTool = cornerstoneTools.PanTool;
                  cornerstoneTools.addTool(PanTool)
                  cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 })
                }}><IoMdMove style={{fontSize: '26px'}}/></Box>
              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Tooltip arrow title='magnify'>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===4?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===4?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 4 });
                  const MagnifyTool = cornerstoneTools.MagnifyTool;
                  cornerstoneTools.addTool(MagnifyTool)
                  cornerstoneTools.setToolActive('Magnify', { mouseButtonMask: 1 })
                }}><PiMagnifyingGlassFill style={{fontSize: '30px'}}/></Box>
              </Tooltip>
              <Tooltip arrow title='rotate'>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===5?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===5?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}  onClick={()=>{
                  this.setState({ currentTool: 5 });
                  const RotateTool = cornerstoneTools.RotateTool;
                  cornerstoneTools.addTool(RotateTool)
                  cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 })
                }}><FaArrowRotateLeft style={{fontSize: '24px'}}/></Box>
              </Tooltip>
            </Box>
            <Box sx={{ height: '30px', marginTop: '10px', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ width: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 1 && this.state.currentTool <= 5?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 1 && this.state.currentTool <= 5?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 1 });
                  const WwwcTool = cornerstoneTools.WwwcTool;
                  cornerstoneTools.addTool(WwwcTool);
                  cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 });
                  }}></Box>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 6 && this.state.currentTool <= 11?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 6 && this.state.currentTool <= 11?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 6 });
                  const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
                  cornerstoneTools.addTool(ArrowAnnotateTool)
                  cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 }) 
                   }}></Box>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 12 && this.state.currentTool <= 14?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 12 && this.state.currentTool <= 14?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 12 });
                  const CircleScissorsTool = cornerstoneTools.CircleScissorsTool;
                  cornerstoneTools.addTool(CircleScissorsTool)
                  cornerstoneTools.setToolActive('CircleScissors', { mouseButtonMask: 1 })
                  }}></Box>
              </Box>
            </Box>
          </Box>}
          {(this.state.currentTool >= 6 && this.state.currentTool <= 11) && <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', height: '180px', marginBottom: '10px', paddingTop: '10px', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Annotation</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Tooltip title='arrow annotation' arrow>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===6?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===6?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 6 });
                  const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
                  cornerstoneTools.addTool(ArrowAnnotateTool)
                  cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 })
                }}><BsArrowDownLeft style={{fontSize: '24px'}}/></Box>
              </Tooltip>
              <Tooltip title='text marker' arrow>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===7?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===7?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 7 });
                  const TextMarkerTool = cornerstoneTools.TextMarkerTool
                  const configuration = {
                  markers: ['Normal', 'CNV', 'DME', 'Drusen'],
                  current: 'Normal',
                  ascending: true,
                  loop: true,
                  }
                  cornerstoneTools.addTool(TextMarkerTool, { configuration })
                  cornerstoneTools.setToolActive('TextMarker', { mouseButtonMask: 1 })
                }}><PiTextT style={{fontSize: '26px'}}/></Box>
              </Tooltip>
              <Tooltip title='freehand roi' arrow>
                <Box sx={{ marginRight: '15px', marginTop: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 0, 0, 0.4)', border: this.state.currentTool===8?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===8?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 8 });
                  const FreehandRoiTool = cornerstoneTools.FreehandRoiTool;
                  cornerstoneTools.addTool(FreehandRoiTool)
                  cornerstoneTools.setToolActive('FreehandRoi', { mouseButtonMask: 1 })
                }}><TfiPencil style={{fontSize: '22px'}}/></Box>
              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Tooltip arrow title='length'>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===9?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===9?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 9 });
                  const LengthTool = cornerstoneTools.LengthTool;
                  cornerstoneTools.addTool(LengthTool)
                  cornerstoneTools.setToolActive('Length', { mouseButtonMask: 1 })
                }}><FaRuler style={{fontSize: '26px'}}/></Box>
              </Tooltip>
              <Tooltip arrow title='rectangular roi'>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===10?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===10?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}  onClick={()=>{
                  this.setState({ currentTool: 10 });
                  const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
                  cornerstoneTools.addTool(RectangleRoiTool)
                  cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 })
                }}><LuRectangleHorizontal style={{fontSize: '20px'}}/></Box>
              </Tooltip>
              <Tooltip arrow title='elliptical roi'>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===11?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===11?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}  onClick={()=>{
                  this.setState({ currentTool: 11 });
                  const EllipticalRoiTool = cornerstoneTools.EllipticalRoiTool;
                  cornerstoneTools.addTool(EllipticalRoiTool)
                  cornerstoneTools.setToolActive('EllipticalRoi', { mouseButtonMask: 1 })
                }}><LuCircle style={{fontSize: '20px'}}/></Box>
              </Tooltip>
            </Box>
            <Box sx={{ height: '30px', marginTop: '10px', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ width: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 1 && this.state.currentTool <= 5?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 1 && this.state.currentTool <= 5?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 1 });
                  const WwwcTool = cornerstoneTools.WwwcTool;
                  cornerstoneTools.addTool(WwwcTool);
                  cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 });
                  }}></Box>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 6 && this.state.currentTool <= 11?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 6 && this.state.currentTool <= 11?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 6 });
                  const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
                  cornerstoneTools.addTool(ArrowAnnotateTool)
                  cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 })
                  }}></Box>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 12 && this.state.currentTool <= 14?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 12 && this.state.currentTool <= 14?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 12 });
                  const CircleScissorsTool = cornerstoneTools.CircleScissorsTool;
                  cornerstoneTools.addTool(CircleScissorsTool)
                  cornerstoneTools.setToolActive('CircleScissors', { mouseButtonMask: 1 })
                  }}></Box>
              </Box>
            </Box>
          </Box>}
          {(this.state.currentTool >= 12 && this.state.currentTool <= 14) && <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', height: '180px', marginBottom: '10px', paddingTop: '10px', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Segmentation</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Tooltip title='circular scissors' arrow>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===12?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===12?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 12 });
                  const CircleScissorsTool = cornerstoneTools.CircleScissorsTool;
                  cornerstoneTools.addTool(CircleScissorsTool)
                  cornerstoneTools.setToolActive('CircleScissors', { mouseButtonMask: 1 })
                }}><LuCircle style={{fontSize: '20px'}}/></Box>
              </Tooltip>
              <Tooltip title='freehand scissors' arrow>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: this.state.currentTool===13?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===13?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 13 });
                  const FreehandScissorsTool = cornerstoneTools.FreehandScissorsTool;
                  cornerstoneTools.addTool(FreehandScissorsTool)
                  cornerstoneTools.setToolActive('FreehandScissors', { mouseButtonMask: 1 })
                }}><ImScissors style={{fontSize: '20px'}}/></Box>
              </Tooltip>
              <Tooltip title='rectangular scissors' arrow>
                <Box sx={{ marginRight: '15px', marginTop: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 0, 0, 0.4)', border: this.state.currentTool===14?'2px solid rgba(0, 0, 0, 0.4)':'none', borderRadius: this.state.currentTool===14?'5px':'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }} onClick={()=>{
                  this.setState({ currentTool: 14 });
                  const RectangleScissorsTool = cornerstoneTools.RectangleScissorsTool;
                  cornerstoneTools.addTool(RectangleScissorsTool)
                  cornerstoneTools.setToolActive('RectangleScissors', { mouseButtonMask: 1 })
                }}><TbRectangle style={{fontSize: '24px'}}/></Box>
              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: 'none', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}></Box>
            </Box>
            <Box sx={{ height: '30px', marginTop: '10px', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ width: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 1 && this.state.currentTool <= 5?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 6 && this.state.currentTool <= 11?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 1 });
                  const WwwcTool = cornerstoneTools.WwwcTool;
                  cornerstoneTools.addTool(WwwcTool);
                  cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 });
                  }}></Box>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 6 && this.state.currentTool <= 11?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 6 && this.state.currentTool <= 11?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 6 });
                  const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
                  cornerstoneTools.addTool(ArrowAnnotateTool)
                  cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 })
                  }}></Box>
                <Box sx={{ width: '10px', height: '10px', background: this.state.currentTool >= 12 && this.state.currentTool <= 14?'rgba(0, 0, 0, 0.4)':'white', border: this.state.currentTool >= 12 && this.state.currentTool <= 14?'none':'2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }} onClick={()=>{ 
                  this.setState({ currentTool: 12 });
                  const CircleScissorsTool = cornerstoneTools.CircleScissorsTool;
                  cornerstoneTools.addTool(CircleScissorsTool)
                  cornerstoneTools.setToolActive('CircleScissors', { mouseButtonMask: 1 }) 
                  }}></Box>
              </Box>
            </Box>
          </Box>}
          <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', height: '440px', paddingTop: '10px', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Gallery</Typography>
            <Box>
              <img src={this.props.stack.imageIds[0]} alt='Image' width='150px' height='150px' style={{ margin: '10px', border: this.state.currentId===0?'4px solid':'4px solid rgba(0, 0, 0, 0.4)', borderImage: this.state.currentId===0?'linear-gradient(to bottom, #0ea190, #11b97c) 1':'none' }} onClick={()=>{ this.updateImage(0); }}/>
              <Typography sx={{ height: '20px', fontSize: '14px', color: '#616161' }} textAlign='center'>Generated Image</Typography>
            </Box>
            <Box>
              <img src={this.props.stack.imageIds[1]} alt='Image' width='150px' height='150px' style={{ margin: '10px', border: this.state.currentId===1?'4px solid':'4px solid rgba(0, 0, 0, 0.4)', borderImage: this.state.currentId===1?'linear-gradient(to bottom, #0ea190, #11b97c) 1':'none' }} onClick={()=>{ this.updateImage(1); }}/>
              <Typography sx={{ height: '20px', fontSize: '14px', color: '#616161' }} textAlign='center'>Segmented Mask</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: 'calc(100vw - 490px)', height: '100%', padding: '10px', borderRadius: '5px' }}>
          <Box sx={{ background: 'rgba(0, 0, 0, 0.3)', height: '100%', padding: '5px', borderRadius: '5px' }}>
          <Box ref={input => { this.element = input; }} style={{ width: '100%', height: '100%', background: 'black', borderRadius: '5px' }}>
            <canvas style={{ display: 'none' }}/>
          </Box>
          </Box>
        </Box>
        <Box sx={{ width: '300px', height: '100%', padding: '10px' }}>
          <Box sx={{ width: '100%', height: '210px', background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Properties</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>ww/wc</Box>
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)', color: '#616161' }} value={String(this.state.viewport.voi.windowWidth).substr(0, 6)} onChange={(e)=>{ 
                  const element = this.element; 
                  const viewport = cornerstone.getViewport(element);  
                  viewport.voi.windowWidth = e.target.value; 
                  cornerstone.setViewport(element, viewport);
                 }}/>
              </Box>              
              <Box sx={{ marginTop: '10px', width: '20px', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 0, 0, 0.4)' }}>/</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)', color: '#616161' }} value={String(this.state.viewport.voi.windowCenter).substr(0, 6)} onChange={(e)=>{ 
                  const element = this.element; 
                  const viewport = cornerstone.getViewport(element);  
                  viewport.voi.windowCenter = e.target.value; 
                  cornerstone.setViewport(element, viewport);
                 }}/>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>scale</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '180px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)', color: '#616161' }} step={1/32} value={this.state.viewport.scale} onChange={(e)=>{ 
                  const element = this.element; 
                  const viewport = cornerstone.getViewport(element);  
                  viewport.scale = Number(e.target.value); 
                  cornerstone.setViewport(element, viewport);
                 }}/>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>rotate</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '180px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)', color: '#616161' }} value={String(this.state.viewport.rotation).substr(0, 6)} onChange={(e)=>{ 
                  const element = this.element; 
                  const viewport = cornerstone.getViewport(element);  
                  viewport.rotation = e.target.value; 
                  cornerstone.setViewport(element, viewport);
                 }}/>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>locate</Box>
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)', color: '#616161' }} value={String(this.state.viewport.translation.x).substr(0, 6)} onChange={(e)=>{ 
                  const element = this.element; 
                  const viewport = cornerstone.getViewport(element);  
                  viewport.translation.x = e.target.value; 
                  cornerstone.setViewport(element, viewport);
                 }}/>
              </Box>              
              <Box sx={{ marginTop: '10px', width: '20px', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>,</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)', color: '#616161' }} value={String(this.state.viewport.translation.y).substr(0, 6)} onChange={(e)=>{ 
                  const element = this.element; 
                  const viewport = cornerstone.getViewport(element);  
                  viewport.translation.y = e.target.value; 
                  cornerstone.setViewport(element, viewport);
                 }}/>
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', marginTop: '10px', height: '410px', padding: '10px', borderRadius: '5px', overflowY: 'auto' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Layers</Typography>
            {this.state.layers.map((label, index)=>(<Box sx={{ background: 'rgba(0, 0, 0, 0.2)', borderRadius: '5px' }} mt={1}>
            <Typography sx={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'left', color: 'white' }} px={1}>{index + 1}. {label}</Typography>
            </Box>))}
          </Box>
        </Box>
      </Box>
    </Box>
    );
  }

  onWindowResize() {
    console.log("onWindowResize");
    cornerstone.resize(this.element);
  }

  onImageRendered() {
    const viewport = cornerstone.getViewport(this.element);

    this.setState({
      viewport
    });
  }

  onNewImage() {
    const enabledElement = cornerstone.getEnabledElement(this.element);

    this.setState({
      imageId: enabledElement.image.imageId
    });
  }

  componentDidMount() {
    const element = this.element;

    cornerstoneTools.init();
    
    cornerstone.enable(element);
    // Load the first image in the stack
    cornerstone.loadImage(this.state.imageId).then(image => {
      // Display the first image
      cornerstone.displayImage(element, image);
      const viewport = cornerstone.getViewport(element); 
      viewport.scale = 1; 
      cornerstone.setViewport(element, viewport);
      // Add the stack tool state to the enabled element
      const stack = this.props.stack;
      cornerstoneTools.addStackStateManager(element, ["stack"]);
      cornerstoneTools.addToolState(element, "stack", stack);

      // cornerstoneTools.touchInput.enable(element);
      // cornerstoneTools.panTouchDrag.activate(element);
      // cornerstoneTools.zoomTouchPinch.activate(element);
      
      const PanTool = cornerstoneTools.PanTool;
      cornerstoneTools.addTool(PanTool)
      cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 })

      element.addEventListener(
        "cornerstoneimagerendered",
        this.onImageRendered
      );
      element.addEventListener("cornerstonenewimage", this.onNewImage);
      window.addEventListener("resize", this.onWindowResize);
        // this.setState((prevState) => ({
        //   layers: [...prevState.layers, newLayer]
        // }));
      element.addEventListener(cornerstoneTools.EVENTS.MEASUREMENT_COMPLETED, (event) => {
        const measurementData = event.detail.measurementData;
        if (measurementData) {
          if (event.detail.toolType.includes('FreehandRoi')) {
            this.setState((prevState) => ({
              layers: [...prevState.layers, 'Freehand Roi']
            }));
          }
          else if (event.detail.toolType.includes('RectangleRoi')) {
            this.setState((prevState) => ({
              layers: [...prevState.layers, 'Rectangle Roi']
            }));
          }
          else if (event.detail.toolType.includes('Length')) {
            this.setState((prevState) => ({
              layers: [...prevState.layers, 'Length']
            }));
          }
          else if (event.detail.toolType.includes('ArrowAnnotate')) {
            this.setState((prevState) => ({
              layers: [...prevState.layers, 'Arrow Annotate']
            }));
          }
          else if (event.detail.toolType.includes('EllipticalRoi')) {
            this.setState((prevState) => ({
              layers: [...prevState.layers, 'Elliptical Roi']
            }));
          }
          else if (event.detail.toolType.includes('TextMarker')) {
            this.setState((prevState) => ({
              layers: [...prevState.layers, 'Text Marker']
            }));
          }
        }
    });
    });
  }

  updateImage(index) {
    const element = this.element
    cornerstone.loadImage(this.props.stack.imageIds[index]).then(image => {
      cornerstone.displayImage(element, image);
    });
    this.setState({
      currentId: index
    })
  }

  componentWillUnmount() {
    const element = this.element;
    element.removeEventListener(
      "cornerstoneimagerendered",
      this.onImageRendered
    );

    element.removeEventListener("cornerstonenewimage", this.onNewImage);

    window.removeEventListener("resize", this.onWindowResize);

    cornerstone.disable(element);
  }

  componentDidUpdate(prevProps, prevState) {
    const stackData = cornerstoneTools.getToolState(this.element, "stack");
    const stack = stackData.data[0];
    stack.currentImageIdIndex = this.state.stack.currentImageIdIndex;
    stack.imageIds = this.state.stack.imageIds;
    cornerstoneTools.addToolState(this.element, "stack", stack);

    //const imageId = stack.imageIds[stack.currentImageIdIndex];
    //cornerstoneTools.scrollToIndex(this.element, stack.currentImageIdIndex);
  }
}

const Editor = () => {
  const context = useContext(gennotateContext);
  const { temp, temp2 } = context;
  const stack = {
    imageIds: [temp.link.replace('image/upload/', ''), temp2[0].link.replace('image/upload/', '')],
    currentImageIdIndex: 0
  };
  return (
    <Box>
      <CornerstoneElement stack={{ ...stack }} />
    </Box>
  )
}

export default Editor
