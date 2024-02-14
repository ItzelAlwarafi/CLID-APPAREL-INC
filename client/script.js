const image = document.querySelector("img")
const productName = document.querySelector("#product_name")
const price = document.querySelector("#price")
const color = document.querySelector("#color")
const quantity = document.querySelector("#quantity")
const addToCartbtn = document.querySelector("#addToCart")

const response = await axios.get('https://localhost:3001')
const sale = document.querySelector("sale")


sale.addEventListener('click', async () => {
    let imagesrc = response.clothings.jeans1.img
    let productNameData = response.clothings.jeans1.productName
    let priceData = response.clothings.jeans1.price
    let colorData = response.clothings.jeans1.color
    image.innerHTML = (`${imagesrc}`)
    productName.innerHTML = (`${productNameData}`)
    price.innerHTML = (`${priceData}`)
    color.innerHTML = (`${colorData}`)
    
})