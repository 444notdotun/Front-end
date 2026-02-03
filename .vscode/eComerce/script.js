const PRODUCT_URL ="https://dummyjson.com/products";
// function getproducts(url){
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }

const getproducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getproducts(PRODUCT_URL);