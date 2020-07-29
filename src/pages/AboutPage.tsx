import React from 'react';
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return(
        <>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vel dolores! Ea eveniet nam voluptate reiciendis veniam vero possimus, dolorem nisi optio reprehenderit deleniti, rerum qui distinctio voluptates, corporis maiores.Dicta impedit voluptates a quibusdam est culpa odio magni, provident adipisci, distinctio, explicabo voluptatem nulla accusantium quidem ad? Earum culpa maiores cum fugit minus itaque nam cumque laudantium id autem!</p>
        <button className = "btn" onClick = {() => history.push('/')}>Go to ToDos list</button>
        </>
    )
}