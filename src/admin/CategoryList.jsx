import React from 'react';
import AddNewButton from  '../component/AddNewButton';
import {checkLogin} from'../Util';


checkLogin();

class CategoryList extends React.Component{

    render(){
        return(
            <div className="col-md-8">
            <AddNewButton href="/admin/add-category" title="Kategori Ekle"/>
            </div>
        )
    }
}


export default CategoryList;