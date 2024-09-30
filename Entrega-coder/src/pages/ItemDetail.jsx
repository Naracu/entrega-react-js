import React from 'react';
import { ItemDetailContainer } from '../Components';
import { useItemById } from '../hooks';
import { useParams } from 'react-router';


export const ItemDetail = () => {

    const { id } =useParams ();
   
    const {product, loading} = useItemById ();
    return loading ? <Loader /> : <ItemDetailContainer item={product}/>;

}