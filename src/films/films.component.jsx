import React from 'react';
import filmData from './filmsDataBase.json';
import Film from './film/film.component.jsx';
function Films(props) {
    const MySubComponent = (props) => {
        return (
            <>
                <br></br>
                <Film id={props.item.id}></Film>
                <br></br>
            </>
        );
    }
    if (!props.name) {
        return (
            <>
                {filmData.map((element) => {
                    return (
                        <MySubComponent item={element} />
                    )
                })}
            </>
        )
    } else {
        return (
            <>
                {filmData.map((element) => {
                    if (element.type === props.name) {
                        return (
                            <MySubComponent item={element} />
                        )
                    } else {
                        return (null);
                    }
                })}
            </>
        )
    }

}


export default Films;