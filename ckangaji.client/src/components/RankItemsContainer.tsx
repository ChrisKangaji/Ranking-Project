import { useState } from 'react';
import RankItems from './RankItems';

interface RankItemsProps {
    dataType: any; // Adjust based on actual item structure
    imageArr: { id: number; image: any }[];  // Adjust based on actual image object structure
}

const RankItemsContainer: React.FC<RankItemsProps> = ({ dataType, imageArr }) => {
    const movieLocalStorageKey: string = "movies";
    const albumLocalStorageKey: string = "albums";

    var localStorageKey = "";

    const [movieItems, setMovieItems] = useState(JSON.parse(localStorage.getItem(movieLocalStorageKey)));
    const [albumItems, setAlbumItems] = useState(JSON.parse(localStorage.getItem(albumLocalStorageKey)));

    var data = [];
    var setFunc = null;

    if (dataType === 1) {
        data = movieItems;
        setFunc = setMovieItems;
        localStorageKey = movieLocalStorageKey;
    }
    else if (dataType === 2) {
        data = albumItems;
        setFunc = setAlbumItems;
        localStorageKey = albumLocalStorageKey;
    }

    return (
        <RankItems items={data} setItems={setFunc} dataType={dataType} imgArr={imageArr} localStorageKey={localStorageKey} />
    );
};

export default RankItemsContainer;