import React from 'react';


export  var baseUrl = "http://localhost:8080/";


export function checkLogin() {
    fetch(baseUrl + "admin/check-login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

export function sendLoginPost(user,pass) {

        fetch(baseUrl + "/login", {
            method: 'POST',
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "username="+user+"&password="+pass+"&submit=Login"
        }).then((response)=>{
            if(response.status==200){
                location.href="http://localhost:3000/admin/category-list";
            }
    });
    }