const image = document.querySelector("img")
const productName = document.querySelector("#product_name")
const price = document.querySelector("#price")
const color = document.querySelector("#color")
const quantity = document.querySelector("#quantity")
const addToCartbtn = document.querySelector("#addToCart")

const response = await axios.get('https://localhost:3001')
const sale = document.querySelector("saleMenu")


sale.addEventListener('click', async () => {
    let imagesrc = response.clothes.
})