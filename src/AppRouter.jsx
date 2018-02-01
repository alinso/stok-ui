import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import CategoryList from './admin/CategoryList';
import AddCategory from './admin/AddCategory';
import LoginForm from './admin/LoginForm';

class AppRouter extends React.Component{
    render(){

        return(
            <Router>
                <div>
                    <hr/>
                    <Route path="/admin/category-list" component={CategoryList} />
                    <Route path="/admin/add-category" component={AddCategory} />
                    <Route path="/login" component={LoginForm} />
                </div>
            </Router>
        )
    }
}


export default AppRouter
