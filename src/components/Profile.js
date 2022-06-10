import * as React from 'react';
import '../css/Profile.css'
import Fade from 'react-reveal/Fade';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from '../profile.jpg';

const profile_text = "Hi! My name is Mick Kanchanachayphoom. I'm an undergraduate student at the University of Wisconsin-Madison " + 
"studying Computer Science and Data Science with a minor in Mathematics. My interest are in the Deep Learning and Machine Learning space " +
"but I'm also very much interested in any other computer science concepts and are open to learn and work in other related fields as well. " +
"I love to watch netflix and read books ranging from self-help / business books to a more science / math oriented books. Continue scrolling " +
"to learn more about me :)";

export default function Profile() {
    return (
        <div className="Profile">
            <Fade left>
                <h1 className="Font-name-profile">About Me</h1>
                <div className="Profile-content">
                    <div className="Profile-pic-container">
                        <img src={profile} className="Profile-pic"></img> 
                    </div>
                    <div style={{flexGrow: 3}}>
                        <p className="Profile-text">{profile_text}</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}