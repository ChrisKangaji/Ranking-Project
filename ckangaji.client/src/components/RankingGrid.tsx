import React from 'react';

interface RankingGridProps {
    items: { id: number; ranking: number; imageId: number }[]; // Adjust based on actual item structure
    imgArr: { id: number; image: string }[];  // Adjust based on actual image object structure
    dragStartHandler: (event: React.DragEvent<HTMLImageElement>) => void;
    allowDrop: (event: React.DragEvent<HTMLDivElement>) => void;
    dropHandler: (event: React.DragEvent<HTMLDivElement>) => void;
}

const RankingGrid: React.FC<RankingGridProps> = ({ items, imgArr, dragStartHandler, allowDrop, dropHandler}) => {

    const rankingGrid: any[] = [];
    const cellCollectionTop: any[] = [];
    const cellCollectionMiddle: any[] = [];
    const cellCollectionBottom: any[] = [];
    const cellCollectionWorst: any[] = [];

    function pushCellMarkupToArr(cellCollection: any[], rankNum: number, rowLabel: string) {
        if (rankNum > 0) {
            var item = items.find(o => o.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} onDrop={dropHandler} onDragOver={allowDrop} className="rank-cell">
                {(item != null) ? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={dragStartHandler} /> 
                                : null}
            </div>);
        }
        else {

            cellCollection.push(<div className="rank-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum: number) {
        var rankNum: number = 0;
        var currCollection: any[] = [];
        var label: string = "";
        const numCells: number = 5;

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier";
            }
            else if (rowNum === 2){
                currCollection = cellCollectionMiddle;
                label = "Middle Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "Worst Tier";
            }

            pushCellMarkupToArr(currCollection, rankNum, label);
        }
    }

    function createCellsForRows() {
        const maxRows: number = 4;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {

        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>);
        rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionMiddle}</div>);
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottom}</div>);
        rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionWorst}</div>);

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();

    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>
    )
}

export default RankingGrid;