import { PageHeader } from 'react-bootstrap';
import React, {Component} from 'react';



class Title extends Component{
    render(){
        return (
            <div className={'col-md-6 col-md-offset-3'}>
                <PageHeader>{this.props.value}</PageHeader>
            </div>
                );
    }
}


export default Title;