import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProfile from './UserProfile';


ReactDOM.render(
    <App/>,
    document.getElementById('root')

);

ReactDOM.render(
    <UserProfile/>,
    document.getElementById('user')
);

function NumberList (props) {
const numbers = props.numbers;
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
    {number}
    </li>
);
return(
    <ul>{listItems}</ul>
)
}
const numbers = [ 1, 2, 3, 4];
ReactDOM.render( 
<NumberList numbers={numbers}/>,
document.getElementById('list')
);



