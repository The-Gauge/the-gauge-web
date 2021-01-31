import React from 'react';
import './style.css'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export const SocialHadles = () => {
  return (
    <>
          <IconButton style={{color:'black' }}><Instagram className="socialIcons"/></IconButton>
          <IconButton style={{color: '#4968ad'}}><Facebook className="socialIcons"/></IconButton>
          <IconButton style={{color: '#49a1eb'}}><Twitter className="socialIcons"/></IconButton>
          <IconButton style={{color: '#2867B2'}}><LinkedIn className="socialIcons"/></IconButton>
          <IconButton style={{color: '#eb3223'}} ><YouTube className="socialIcons"/></IconButton>
    </>
  )
}
