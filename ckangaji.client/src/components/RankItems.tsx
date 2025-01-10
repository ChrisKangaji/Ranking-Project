import React, { useState, useEffect } from 'react';
import MovieImageArr from './MovieImages.tsx';
import RankingGrid from './RankingGrid.tsx';

const RankItems: React.FC = () => {

    const [items, setItems] = useState<any[]>([]);
    const itemType = 1;

    function dragStartHandler(ev)
    {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev)
    {
        ev.preventDefault();
    }

    function dropHandler(ev)
    {
        ev.preventDefault();
        const targetElement = ev.target;
        if (targetElement.nodeName === "IMG")
        {
            return false;
        }

        if (targetElement.childNodes.length === 0)
        {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => {
                if (item.id === data)
                {
                    //"...item" is the spread operator. 
                    //The spread syntax ensures all other properties of the item remain unchanged while updating or retaining the ranking property
                    return { ...item, ranking: parseInt(targetElement.id.substring(5)) };
                }
                return item;
            }); 
            setItems(transformedCollection);
        }
    }
    
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

            <RankingGrid items={items} imgArr={MovieImageArr} dragStartHandler={dragStartHandler} allowDrop={allowDrop} dropHandler={dropHandler} />

            <div className="items-not-ranked">
                {
                    (items.length > 0) ? items.map((item) =>
                        (item.ranking === 0) ?
                        <div className="unranked-cell">
                            <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image} 
                                style={{ cursor: "pointer" }} draggable="true" onDragStart={dragStartHandler}
                            />
                        </div> : null
                    ) : <div>Loading...</div>
                }
            </div>
        </div>
    );
}

export default RankItems;