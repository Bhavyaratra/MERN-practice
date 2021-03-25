import { set } from 'lodash';
import React from 'react'
import {useEffect,useState} from 'react';

export const Hello = ()=>{
    const [initialState, setInitialState] = useState([])

    useEffect(()=>{
        fetch('/api/hello').then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse =>setInitialState(jsonResponse.hello))
    },[])

    console.log(initialState)
    return(<div>{initialState}</div>)

}