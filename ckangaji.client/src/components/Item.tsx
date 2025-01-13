const Item = ({ item, dragStartHandler, itemImgObj}) => {
    return (
        <div className="unranked-cell">
            <img id={`item-${item.id}`} src={itemImgObj.image}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={dragStartHandler}
            />
        </div>
    )
}

export default Item;