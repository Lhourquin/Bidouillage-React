import React from 'react';

function ActionClick(){

    function handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.')
    }

    
        return (
            <a href="https://twitter.com/Lhourquin" onClick={handleClick}>
                Clique ici
            </a>
        )
}

export default ActionClick;