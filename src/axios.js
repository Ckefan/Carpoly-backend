import axios from 'axios'
import qs from 'qs'
import React from 'react'

const instance = axios.create({
  timeout:1000,
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  responseType:'json',
  transformRequest:[
    function(data){
      return qs.stringify(data);
    }
  ]
})
React.Component.prototype.$http = instance;
instance.interceptors.request.use(
  config =>{
    return config;
  },
  err=>{
    return Promise.reject(err);    
  }
)
instance.interceptors.response.use(
  response =>{
    console.log(response,123)
    if(response.data.status === "401"){
      alert("session已过期")
    }
    return response;
  },
  error =>{
    return Promise.reject(error.response.data);
  }
)
export default instance