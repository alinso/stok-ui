import React from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';





class AppNavbarAdmin  extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Anasayfa</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/admin/category-list">
                            Kategoriler
                        </NavItem>
                        <NavItem eventKey={2} href="/admin/raf-list">
                            Raflar
                        </NavItem>
                        <NavItem eventKey={3} href="/admin/product-list">
                            Ürünler
                        </NavItem>
                        <NavItem eventKey={4} href="/admin/report">
                            Rapor
                        </NavItem>

                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Çıkış
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


    class AppNavbarGuest extends React.Component {
    render() {
        return (
            <Navbar/>
        )
    }
    }

var AppNavbar;
    if(window.location.href.indexOf("admin")!=-1 ){
    AppNavbar = AppNavbarAdmin;
    }else{
   AppNavbar = AppNavbarGuest;
}


export default AppNavbar
