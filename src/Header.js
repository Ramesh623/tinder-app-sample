import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        <img src='https://www.freepnglogos.com/uploads/eagle-png-logo/lakes-eagles-png-logo-14.png' className='header__logo'/>

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>


    </div>
  )
}

export default Header