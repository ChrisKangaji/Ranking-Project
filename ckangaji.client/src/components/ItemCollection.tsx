import Item from './Item';

const ItemCollection = ({ items, dragStartHandler, imgArr }) => {

    return (
        <div className="items-not-ranked">
            {
                items.map((item) => (item.ranking === 0) ?
                    <Item key={`item-${item.id}`} item={item} dragStartHandler={dragStartHandler} itemImgObj={imgArr.find(o => o.id === item.imageId)} />
                    : null
                )
            }
        </div>
    )
}

export default ItemCollection;