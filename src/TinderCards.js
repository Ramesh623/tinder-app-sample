import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setpeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Elon_Musk_%283017880307%29.jpg",
        },

        {
            name: "Mark Zuckerberg",
            url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removibg' + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name);  
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards-cardContainer'> 
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                            
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>     
                ))}
            </div>
        </div>
    )
}

export default TinderCards