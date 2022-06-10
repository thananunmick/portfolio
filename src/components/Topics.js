import * as React from 'react';
import '../css/Topics.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';

export default function Topics() {
    return (
        <div className="Topics">
            <Fade left>
                <Timeline position="alternate">
                <TimelineItem>
                    {/* <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    >
                    9:30 am
                    </TimelineOppositeContent> */}
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot sx={{backgroundColor: "#FBF8F1"}}>
                        {/* <FastfoodIcon /> */}
                        <span class="material-symbols-outlined" style={{color: "black", fontSize: "50px"}}>Mood</span>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#FBF8F1' }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                    <Typography variant="h6" component="span" style={{fontFamily: "'Raleway', sans-serif", fontSize: "35px"}}>
                        About me
                    </Typography>
                    {/* <Typography>Get to know me a little bit more</Typography> */}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    {/* <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    >
                    10:00 am
                    </TimelineOppositeContent> */}
                    <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: '#FBF8F1' }} />
                    <TimelineDot sx={{backgroundColor: "#F7ECDE"}}>
                        <LaptopMacIcon style={{color: "black", fontSize: "50px"}} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#F7ECDE' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                    <Typography variant="h6" component="span" style={{fontFamily: "'Raleway', sans-serif", fontSize: "35px"}}>
                        Projects
                    </Typography>
                    {/* <Typography>What I&apos;ve been doing in the past few years</Typography> */}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: '#F7ECDE' }} />
                    <TimelineDot sx={{backgroundColor: "#E9DAC1"}}>
                        {/* <HotelIcon /> */}
                        <span class="material-symbols-outlined" style={{color: "black", fontSize: "50px"}}>school</span>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#54BAB9' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                    <Typography variant="h6" component="span" style={{fontFamily: "'Raleway', sans-serif", fontSize: "35px"}}>
                        Courseworks &amp; Awards
                    </Typography>
                    {/* <Typography>Because you need rest</Typography> */}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: '#54BAB9' }} />
                    <TimelineDot sx={{backgroundColor: "#54BAB9"}}>
                        {/* <RepeatIcon /> */}
                        <span class="material-symbols-outlined" style={{color: "black", fontSize: "50px"}}>menu_book</span>
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                    <Typography variant="h6" component="span" style={{fontFamily: "'Raleway', sans-serif", fontSize: "35px"}}>
                        Book Recommendations
                    </Typography>
                    {/* <Typography>Because this is the life you love!</Typography> */}
                    </TimelineContent>
                </TimelineItem>
                </Timeline>
                {/* <p>HI</p> */}
            </Fade>
        </div>
    );
}