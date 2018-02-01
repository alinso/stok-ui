import React, {Component} from 'react';



class Button extends Component{
    render(){
        return (
            <button className={'btn btn-danger'}>{this.props.value}</button>
        );
    }
}


export default Button;