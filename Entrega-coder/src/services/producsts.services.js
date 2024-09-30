import axios from "axios";

export async function getAllProducts (){
    return await axios.get("https://dummyjson.com/products");
}

export async function getProductById (id) {
    return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getAllCategories () {
    return await axios.get("https://dumyyjson.com/products/categories");
}

export async function getProductByCategory (categoryid) {
    return await axios.get(`https://dumyyjson.com/products/categories/${categoryid}`);
}