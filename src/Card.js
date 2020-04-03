import React from 'react';
const Card = (prop) => {
    return ( <
        div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
        <
        img alt = 'robo'
        src = { `https://robohash.org/${prop.id}?size=200x200` }
        / > <
        div >
        <
        h2 > { prop.name } < /h2>  <
        p > { prop.username } < /p> <
        p > { prop.email } < /p>   < /
        div > <
        /div>
    );
}
export default Card;