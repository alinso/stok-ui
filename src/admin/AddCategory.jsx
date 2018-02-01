import React from 'react';
import {FormGroup, ControlLabel,FormControl,Button} from 'react-bootstrap';
import {baseUrl, sendPost} from '../Util';

class AddCategory extends React.Component{
    constructor(...args) {
        super(...args);

        this.handleChange = this.handleChange.bind(this);
        this.save  =this.save.bind(this);

        this.state = {
            value: ''
        };
    }

    save(){
        sendPost('category',{"categoryName":this.state.value});
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render(){
        return(
            <form>
                <FormGroup
                    controlId="formBasicText">
                    <ControlLabel>Yeni Kategori Adı</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Kategori Adı"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <Button onClick={this.save} type="button">Ekle</Button>
                </FormGroup>
            </form>
        )
    }
}

export default AddCategory;