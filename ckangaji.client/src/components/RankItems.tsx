import React, { useState, useEffect } from 'react';
import MovieImageArr from './MovieImages.tsx';

const RankItems: React.FC = () => {

    const [items, setItems] = useState<any[]>([]);
    const itemType = 1;
    
    useEffect(() => {

        fetch(`item/${itemType}`)
            .then((result) => {
                return result.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch(error => console.error('Error fetching data:', error));

    }, []);

    return (
        <div className="container">
            <div className="items-not-ranked">
                {
                    (items.length > 0) ? items.map((item) =>
                        <div className="unranked-cell">
                            <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image}></img>
                        </div>
                    ) : <div>Loading...</div>
                }
            </div>
        </div>
    );
}

export default RankItems;