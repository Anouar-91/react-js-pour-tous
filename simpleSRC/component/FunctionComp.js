import React from 'react';

function FunctionComp({name}){
    console.log('%c render() du Function Component enfant!', 'color:purple; font-size : 20px;');
    return(
        <div>
            <p>Function component : {name}</p>

        </div>
    )
}
//cette function enfant de App.js recharge le render que si le state subit un réel changement. Elle agit comme un pureComponent. Cela est possible grace à la function memo de l'objet React.
export default React.memo(FunctionComp) ;