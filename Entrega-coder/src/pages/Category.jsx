import React from "react";
import { useItemsByCategory } from "../hooks";
import { useParams } from "react-router";

export const Category = () => {

    const {id} = useParams ();
    const {productsData, loading} = useItemsByCategory (id);
    return loading ? <Loader /> : <ItemLstContainer products={productsData} />;
};