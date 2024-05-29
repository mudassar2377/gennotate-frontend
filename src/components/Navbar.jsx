import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { FaCircleUser, FaBars, FaXmark } from "react-icons/fa6";
import { AppBar, Box, Typography, Checkbox, Tooltip, Button } from '@mui/material'
import gennotateContext from '../gennotateContext/gennotateContext';
import { BiLogOut } from "react-icons/bi";
import { useNavigate, useLocation } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showHide = location.pathname !== '/';
  const context = useContext(gennotateContext);
  const { openNav, setOpenNav, handleNavbar1, setHandleNavbar1, handleNavbar2, setHandleNavbar2, setUser, setData, setData2, setAuthenticationMsg, open, setOpen, user } = context;
  const navList = [
    { id: 1, title: 'Home', link: '/home' },
    { id: 2, title: location.pathname === '/editor'?'Editor':'Gallery', link: '/gallery' },
    { id: 3, title: 'Generate', link: '/generate' },
    { id: 4, title: 'Upload', link: '/custom' },
    { id: 5, title: 'About Us', link: '/team' },
  ]
  return (
    <Box>
      <AppBar sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', height: { xs: openNav?'18vw':'65vw', sm: '5vw'}, overflow: 'hidden', transition: 'height 0.4s ease', zIndex: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: { xs: '18vw', sm: '5vw'} }}>
          <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: { sm: '3vw', xs: '12vw' }, color: '#154d4f', fontWeight: 'bold' }} pl={6}>Gennotate</Typography>
          {showHide && <Box sx={{ display: { sm: 'flex', xs: 'none' }, width: `${navList.length - 1}0vw`, alignItems: 'center', justifyContent: 'space-between' }}>
            {navList.map((item) => (<Link to={item.link} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}><Box onClick={()=>{ setHandleNavbar2(item.id); }} onMouseEnter={() => setHandleNavbar1(item.id)} onMouseLeave={() => setHandleNavbar1(0)} sx={{ ':hover': { cursor: 'pointer' }, height: '100%' }} >
              <Typography sx={{ fontSize: '1.2vw', color: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', fontWeight: 'bold' }} px={1} >{item.title}</Typography>
              <Box sx={{ width: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '100%' : '1%', background: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', height: '0.2vw', transition: '0.5s ease width' }}></Box>
            </Box></Link>))}
          </Box>}
          {showHide?<Box sx={{ display: {xs: 'none', sm: 'flex'}, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Box mr={6}>
            <Tooltip arrow title='Settings'>
              <Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box mr={1} onClick={()=>{ setOpen(!open) }}><FaCaretDown style={{ padding: 1, color: '#154d4f', transition: '0.3s transform', transform: !open?'rotate(0deg)':'rotate(180deg)' }} size={'1vw'}/></Box>
                  <FaCircleUser style={{ color: '#154d4f', background: 'inherit' }} size={'2vw'}/>
                </Box>
              </Button>
            </Tooltip>
              </Box>
          </Box>:<Box mr={6}>
            <Tooltip arrow title='Login'>
              <Button onClick={()=>{ navigate('/authenticate') }}>
                <BiLogIn style={{ color: '#154d4f' }} size={'2vw'}/>
              </Button>
            </Tooltip>
          </Box>}
          {showHide && <Box mr={6}sx={{ display: {xs: 'flex', sm: 'none'} }}>
            <Checkbox onChange={()=>{ setOpenNav(!openNav); }} icon={<FaBars style={{  color: '#154d4f', background: 'inherit' }} size={26}/>} checkedIcon={<FaXmark style={{ color: '#154d4f', background: 'inherit' }} size={28}/>} />  
          </Box>}
        </Box>
        {showHide && <Box px={6} pb={2} sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }}>
            {navList.map((item) => (<Link to={item.link} key={item.id} style={{ textDecoration: 'none', color: 'white' }}><Box onClick={()=>{ setHandleNavbar2(item.id); }} onMouseEnter={() => setHandleNavbar1(item.id)} onMouseLeave={() => setHandleNavbar1(0)} sx={{ ':hover': { cursor: 'pointer' }, height: '100%' }} mb={1} >
              <Typography sx={{ fontSize: '5vw', color: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', fontWeight: 'bold' }} px={1} >{item.title}</Typography>
              <Box sx={{ width: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '100%' : '1%', background: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', height: '0.7vw', transition: '0.5s ease width' }}></Box>
            </Box></Link>))}
        </Box>}
      </AppBar>
      <Box sx={{ width: '200px', height: open?'220px':'0px', position: 'fixed', top: '4vw', right: '1vw', zIndex: 6, borderRadius: '1vw', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', background: 'white', transition: '0.3s ease height', overflow: 'hidden' }}>
        <Box sx={{ width: '100%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Box sx={{ width: '70px', height: '70px', background: 'linear-gradient(to bottom, #0ea190, #11b97c)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}></Box>
        </Box>
        <Typography textAlign='center' sx={{ fontSize: '14px', color: '#616161', width: '100%', overflow: 'hidden', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{user.first_name} {user.last_name}</Typography>
        <Box sx={{ borderTop: '1px solid #616161', marginLeft: '10px', marginRight: '10px', height: '50px', borderBottom: '1px solid #616161', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': { cursor: 'pointer', background: 'rgba(0, 0, 0, 0.1)' } }} onClick={()=>{ setUser({}); setData([]); setData2([]); setAuthenticationMsg('No Text'); setOpen(false); navigate('/'); }}>
          <Box mr={1}><BiLogOut style={{ color: '#616161' }} size={20}/></Box>
          <Typography textAlign='center' sx={{ fontSize: '14px', color: '#616161' }}>Logout</Typography>
        </Box>
        <Typography textAlign='center' sx={{ fontSize: '14px', color: '#616161', width: '100%', overflow: 'hidden', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Joined on { user.date_joined?user.date_joined.slice(0, 10):'' }</Typography>
      </Box>
    </Box>
  )
}

export default Navbar