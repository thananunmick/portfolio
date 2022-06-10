import * as React from 'react';
import '../css/Landing.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextTransition, { presets } from "react-text-transition";
import temple from '../temple.png';

const TEXTS = [
  "MICK",
  "CODE",
  "READ",
  "EAT",
  "SLEEP"
];

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Landing() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        2500 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="Landing">
            <div className="Left-landing">
                {/* <h1 className="Font-name">MICK</h1> */}
                <TextTransition
                    className="Font-name"
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.slow }
                />
                {/* <img src={temple}></img> */}
            </div>
            <div className="Right-landing">
                <Card className="Card" >
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        Kan{bull}cha{bull}na{bull}chay{bull}phoom
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        noun
                    </Typography>
                    <Typography variant="body2">
                        an ambitious and determined creature.
                        <br />
                        {/* {'"something"'} */}
                    </Typography>
                    </CardContent>
                    {/* <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </div>
        </div>
    );
}