import React, { useEffect, useState } from "react";
import { getAllCategories } from "../services/producsts.services";

export const UseCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect (() => {
        getAllCategories()
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            
        })

    })
}