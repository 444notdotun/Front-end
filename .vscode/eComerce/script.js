const PRODUCT_URL = "https://dummyjson.com/products";
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

const productContainer = document.querySelector(".images");
console.log(productContainer);
const getproducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayProducts(data.products);
    } catch (error) {
        console.error(error);
    }
}
getproducts(PRODUCT_URL);

function displayProducts(products) {
    products.forEach((product) => {
        console.log(product);
        const { title, price, description, images } = product;
        const productDiv = document.createElement("div")
        productDiv.innerHTML = `
        <img src="${images[0]}" alt=" small table" width="300px" height="300px">
            <p>productTitle:${title}</p>
            <p>productDescription:${description}</p>
            <p>productPrice:${price}</p>
        `
        productContainer.appendChild(productDiv);
        productContainer.classList.add(".images");
        // productDiv.classList.add(".images ,img");







    });
}

