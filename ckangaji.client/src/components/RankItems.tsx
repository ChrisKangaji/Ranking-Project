import React, { useState, useEffect } from 'react';

const RankItems = () => {

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
        <main>
            {
                (items.length > 0) ? items.map((item) => <h3>{ item.title } </h3>) : <div>Loading...</div>
            }
        </main>
    );
}

export default RankItems;