console.log('Hello')
const productName = document.querySelector("#product_name")
const quantity = document.querySelector("#quantity")
const addToCartbtn = document.querySelector("#addToCart")

const sale = document.querySelector("#sale")


document.addEventListener( 'DOMContentLoaded', async () => {
    console.log('loaded')
    try{
    const response = await axios.get('http://localhost:3001/clothes')
    const product1 = document.querySelector("#Product1")
        const price1 = document.querySelector("#price1")
        const color1 = document.querySelector("#color1")
        let price1Data = response.data[0].prices
        let color1Data = response.data[0].color
        let product1src = response.data[0].img
    // let productNameData = response.data[0].productName
        console.log(response)
        price1.innerHTML = (`$${price1Data}`)
        color1.innerHTML = (`${color1Data}`)
        product1.src = product1src
    productName.innerHTML = (`${productNameData}`)

    const product2 = document.querySelector("#Product2")
        const price2 = document.querySelector("#price2")
        const color2 = document.querySelector("#color2")
        let price2Data = response.data[1].prices
        let color2Data = response.data[1].color
        let product2src = response.data[1].img
    // let productNameData = response.data[0].productName
        price2.innerHTML = (`$${price2Data}.00`)
        color2.innerHTML = (`${color2Data}`)
        product2.src = product2src
    
    const product3 = document.querySelector("#Product3")
        const price3 = document.querySelector("#price3")
        const color3 = document.querySelector("#color3")
        let price3Data = response.data[2].prices
        let color3Data = response.data[2].color
        let product3src = response.data[2].img
    // let productNameData = response.data[0].productName
        price3.innerHTML = (`$${price3Data}.00`)
        color3.innerHTML = (`${color3Data}`)
        product3.src = product3src
    
    const product4 = document.querySelector("#Product4")
        const price4 = document.querySelector("#price4")
        const color4 = document.querySelector("#color4")
        let price4Data = response.data[3].prices
        let color4Data = response.data[3].color
        let product4src = response.data[3].img
    // let productNameData = response.data[0].productName
        price4.innerHTML = (`$${price4Data}.00`)
        color4.innerHTML = (`${color4Data}`)
        product4.src = product4src
        
    const product5 = document.querySelector("#Product5")
        const price5 = document.querySelector("#price5")
        const color5 = document.querySelector("#color5")
        let price5Data = response.data[4].prices
        let color5Data = response.data[4].color
        let product5src = response.data[4].img
    // let productNameData = response.data[0].productName
        price5.innerHTML = (`$${price5Data}`)
        color5.innerHTML = (`${color5Data}`)
        product5.src = product5src

} catch (error) {
        console.log(error)
    }
    
})