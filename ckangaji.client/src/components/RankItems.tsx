import React, { useEffect } from 'react';
import RankingGrid from './RankingGrid.tsx';
import ItemCollection from './ItemCollection.tsx';

interface RankItemsProps {
    items: any[];  // Define the expected props
    setItems: React.Dispatch<any>;
    dataType: number;
    imgArr: any[];
    localStorageKey: string;
}

const RankItems: React.FC<RankItemsProps> = ({items, setItems, dataType, imgArr, localStorageKey}) => {
    function dragStartHandler(ev: any)
    {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev: any)
    {
        ev.preventDefault();
    }

    function dropHandler(ev: any)
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

        fetch(`item/${dataType}`)
            .then((result) => {
                return result.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch(error => console.error('Error fetching data:', error));

    }, [dataType]);

    useEffect(() => {
        if (items != null)
        {
            localStorage.setItem(localStorageKey, JSON.stringify(items));
        }
    },[items]);

    return (
        (items != null) ? 
            <div className="container">
                <RankingGrid items={items} imgArr={imgArr} dragStartHandler={dragStartHandler} allowDrop={allowDrop} dropHandler={dropHandler} />
                <ItemCollection items={items} dragStartHandler={dragStartHandler} imgArr={imgArr} />
            </div>
            : <div className = "container">Loading...</div>
    );
}

export default RankItems;