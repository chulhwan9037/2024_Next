"use client"
import Item from "@/app/item/page";
import axios from "axios";
import { useEffect, useState } from "react";

export default function View(props) {
    const id = props.params.id ;
    const [item, setItem] = useState({});
    // https://makeup-api.herokuapp.com/api/v1/products/488.json
    const API_URL = `/makeup/v1/products/${id}.json`;
    const getData = () => {
        axios.get(
            API_URL
        ).then(data =>{
            console.log(data);
            setItem(data.data)
        }).catch(
            console.log("에러")
        )
        
    }
    
    useEffect(()=>{
        getData();
    },);

    return(
        <>
            {/* 아이템을 표현하는 Item 페이지 따로 만들었다. 임포트 해야한다. */}
            <Item item = {item} />
        </>
    )
}