import React from 'react';
<<<<<<< HEAD
// import heroleft from './Hero_left.svg';
=======
import heroleft from './Hero_left.svg';
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc

function HeroLeft() {
    return(
        <div
            className="hero-section-left"
            style={{
                position: 'relative'
            }}>
            <object 
                type="image/svg+xml" 
<<<<<<< HEAD
                // data={heroleft} 
=======
                data={heroleft} 
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
                style={{ 
                    zIndex: '-2',
                    position: 'absolute',
                    top:'0',
                    left:'0'
                }}>Hero-left-animation</object>
        </div>
    );
}

export default HeroLeft;
