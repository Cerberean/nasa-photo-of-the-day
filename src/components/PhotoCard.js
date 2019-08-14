import React from 'react';

function PhotoCard(props){
    console.log(props);
    return (
        <div>
            <h2>Sample Title</h2>
            <img src="https://apod.nasa.gov/ap...unIss_Colacurcio_960.jpg" />
            <p>
                Sample Explanation
            </p>
        </div>
    );
}

export default PhotoCard;