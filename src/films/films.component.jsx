import React from 'react';
import Film from './film/film.component.jsx';
function Films(props) {
    const MySubComponent = (props2) => {
        return (
            <>
                <br></br>
                <Film films={props.films} id={props2.item.id}></Film>
                <br></br>
            </>
        );
    }
    if (!props.name) {
        return (
            <>
                {props.films.map((element) => {
                    return (
                        <MySubComponent item={element} />
                    )
                })}
            </>
        )
    } else {
        return (
            <>
                {props.films.map((element) => {
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