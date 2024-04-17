import React, { Component } from 'react';

// Funtional Component
function FuncComponent(){

    return <div>Functional Component</div>
}
// export default FuncComponent;

export const FuncComp = () => <div>Functional Component</div>;

// Class Component
export class ClassComp extends Component{

    render(){
        return (
            <div>Class Component</div>
        )
    }
};
// export default ClassComp;