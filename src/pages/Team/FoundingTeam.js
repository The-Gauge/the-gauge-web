import React from 'react';
import { Box, makeStyles, Grid } from '@material-ui/core';
import './style.css';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import Anjali from '../../assets/img/anjali.png';
import { Heading } from '../../components/UI/Heading';
export const Team  = () => {
    return (
        <>
            <Heading name='founding team' />
            <Box className="participants-container">
                {/* <Grid continer> */}
                <Grid item sm={6} xs={12} spacing={2} >
                    <Box className="image-details">
                        <Box className="main_details">
                            <img className="image__img" src=""></img>
                            <Box className="image__title text-center">JAYANTI  CHOPRA</Box>
                            <Box className="image__description">
                                <p id="parag" className="text-center">CO-FOUNDER</p>
                            </Box>
                        </Box>
                        <Box class="image__overlay image__overlay_blur">
                            <Box className="links_par">
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'black'}}><GitHubIcon className="fa fa-github" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'pink' }}><Instagram className="fa fa-instagram" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'blue' }}><Facebook className="fa fa-facebook" /></IconButton>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid sm={6} xs={12} spacing={2}>
                    <Box className="image-details">
                        <Box className="main_details">
                            <img className="image__img" src=""></img>
                            <Box className="image__title text-center">YAGYA KHERA</Box>
                            <Box className="image__description">
                                <p id="parag" className="text-center">CO-FOUNDER</p>
                            </Box>
                        </Box>
                        <Box className="image__overlay image__overlay_blur">
                            <Box className="links_par">
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'black' }}><GitHubIcon className="fa fa-github" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'pink' }}><Instagram className="fa fa-instagram" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'blue' }}><Facebook className="fa fa-facebook" /></IconButton>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid sm={6} xs={12} spacing={2} >
                    <Box className="image-details">
                        <Box className="main_details">
                            <img className="image__img" src={Anjali}></img>
                            <Box className="image__title text-center">ANJALI KUMARI</Box>
                            <Box className="image__description">
                                <p id="parag" className="text-center">TECHNICAL HEAD</p>
                            </Box>
                        </Box>
                        <Box class="image__overlay image__overlay_blur">
                            <Box className="links_par">
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'black' }}><GitHubIcon className="fa fa-github" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'pink' }}><Instagram className="fa fa-instagram" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'blue' }}><Facebook className="fa fa-facebook" /></IconButton>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid sm={6} xs={12} spacing={2}>
                    <Box className="image-details">
                        <Box className="main_details">
                            <img className="image__img" src=""></img>
                            <Box className="image__title text-center">HARDIK BAJAJ</Box>
                            <Box className="image__description">
                                <p id="parag" className="text-center">TECHNICAL HEAD</p>
                            </Box>
                        </Box>
                        <Box className="image__overlay image__overlay_blur">
                            <Box className="links_par">
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'black' }}><GitHubIcon className="fa fa-github" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'pink' }}><Instagram className="fa fa-instagram" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'blue' }}><Facebook className="fa fa-facebook" /></IconButton>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid sm={6} xs={12} spacing={2} >
                    <Box className="image-details">
                        <Box className="main_details">
                            <img className="image__img" src=""></img>
                            <Box className="image__title text-center">VARSHITA YADAV</Box>
                            <Box className="image__description">
                                <p id="parag" className="text-center">MEDIA & MARKETING HEAD</p>
                            </Box>
                        </Box>
                        <Box class="image__overlay image__overlay_blur">
                            <Box className="links_par">
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'black' }}><GitHubIcon className="fa fa-github" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'pink' }}><Instagram className="fa fa-instagram" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'blue' }}><Facebook className="fa fa-facebook" /></IconButton>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid sm={6} xs={12} spacing={2}>
                    <Box className="image-details">
                        <Box className="main_details">
                            <img className="image__img" src=""></img>
                            <Box className="image__title text-center">ABC</Box>
                            <Box className="image__description">
                                <p id="parag" className="text-center">EDITOR-IN-CHIEF</p>
                            </Box>
                        </Box>
                        <Box className="image__overlay image__overlay_blur">
                            <Box className="links_par">
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'black' }}><GitHubIcon className="fa fa-github" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'pink' }}><Instagram className="fa fa-instagram" /></IconButton>
                                </a>
                                <a href="" target="_blank">
                                    <IconButton style={{ color: 'blue' }}><Facebook className="fa fa-facebook" /></IconButton>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                {/* </Grid> */}
            </Box>
        </>
    )
}








