import React, { useEffect, useState } from "react";
import { getProductByCategory } from "../services/producsts.services";

export const useItemsByCategory = (categoryId) => {
    const [prodcutsData, setProductsData] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        getProductByCategory (categoryId)
        .then((res) => {
            setProductsData(res.data.products);
        })
        .cathc((error) => {
            console.log(error);
        })
        .finally(() => setLoading(false));
    }, [categoryId])
    return {prodcutsData, loading};
};