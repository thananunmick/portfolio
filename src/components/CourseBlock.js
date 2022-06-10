import React from 'react';
import '../css/CourseBlock.css';

export default function CourseBlock(props) {
    return (
        <div className="box">
            {/* <div style={{ height: '80%', width: 'auto', backgroundColor: '#FFCC99' }}>
            </div> */}
            <img src={props.img} style={{ height: '60%', width: 'auto', objectFit: "cover"}}></img>
            <div className="text">
                <h4 style={{justifyContent: 'start'}}>{props.header}</h4>
                {/* <p style={{justifyContent: 'start'}}>{props.information}</p> */}
            </div>
        </div>
    );
}