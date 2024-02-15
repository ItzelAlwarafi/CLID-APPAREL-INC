console.log('Hello')


document.addEventListener( 'DOMContentLoaded', async () => {
    console.log('loaded')
    try{
    const response = await axios.get('http://localhost:3001/clothes')
    console.log(response)
    
    const product1 = document.querySelector("#Product1")
        const price1 = document.querySelector("#price1")
        const color1 = document.querySelector("#color1")
        const productName1 = document.querySelector('#ProductName1')
        let price1Data = response.data[0].prices
        let color1Data = response.data[0].color
        let product1src = response.data[0].img
        let productNameData1 = response.data[0].productName
        price1.innerHTML = (`$${price1Data}`)
        color1.innerHTML = (`${color1Data}`)
        product1.src = product1src
        productName1.innerHTML = (`${productNameData1}`)


    const product2 = document.querySelector("#Product2")
        const price2 = document.querySelector("#price2")
        const color2 = document.querySelector("#color2")
        const productName2 = document.querySelector('#ProductName2')
        let price2Data = response.data[1].prices
        let color2Data = response.data[1].color
        let product2src = response.data[1].img
        let productNameData2 = response.data[1].productName
        price2.innerHTML = (`$${price2Data}.00`)
        color2.innerHTML = (`${color2Data}`)
        product2.src = product2src
        productName2.innerHTML = (`${productNameData2}`)
    
    const product3 = document.querySelector("#Product3")
        const price3 = document.querySelector("#price3")
        const color3 = document.querySelector("#color3")
        const productName3 = document.querySelector('#ProductName3')
        let price3Data = response.data[2].prices
        let color3Data = response.data[2].color
        let product3src = response.data[2].img
        let productNameData3 = response.data[2].productName
        price3.innerHTML = (`$${price3Data}.00`)
        color3.innerHTML = (`${color3Data}`)
        product3.src = product3src
        productName3.innerHTML = (`${productNameData3}`)
    
    const product4 = document.querySelector("#Product4")
        const price4 = document.querySelector("#price4")
        const color4 = document.querySelector("#color4")
        const productName4 = document.querySelector('#ProductName4')
        let price4Data = response.data[3].prices
        let color4Data = response.data[3].color
        let product4src = response.data[3].img
        let productNameData4 = response.data[3].productName
        price4.innerHTML = (`$${price4Data}.00`)
        color4.innerHTML = (`${color4Data}`)
        product4.src = product4src
        productName4.innerHTML = (`${productNameData4}`)
        
    const product5 = document.querySelector("#Product5")
        const price5 = document.querySelector("#price5")
        const color5 = document.querySelector("#color5")
        const productName5 = document.querySelector('#ProductName5')
        let price5Data = response.data[4].prices
        let color5Data = response.data[4].color
        let product5src = response.data[4].img
        let productNameData5 = response.data[4].productName
        price5.innerHTML = (`$${price5Data}`)
        color5.innerHTML = (`${color5Data}`)
        product5.src = product5src 
        productName5.innerHTML = (`${productNameData5}`)
        

    const product6 = document.querySelector("#Product6")
        const price6 = document.querySelector("#price6")
        const color6 = document.querySelector("#color6")
        const productName6 = document.querySelector('#ProductName6')
        let price6Data = response.data[5].prices
        let color6Data = response.data[5].color
        let product6src = response.data[5].img
        let productNameData6 = response.data[5].productName
        price6.innerHTML = (`$${price6Data}`)
        color6.innerHTML = (`${color6Data}`)
        product6.src = product6src 
        productName6.innerHTML = (`${productNameData6}`)


    const product7 = document.querySelector("#Product7")
        const price7 = document.querySelector("#price7")
        const color7 = document.querySelector("#color7")
        const productName7 = document.querySelector('#ProductName7')
        let price7Data = response.data[6].prices
        let color7Data = response.data[6].color
        let product7src = response.data[6].img
        let productNameData7 = response.data[6].productName
        price7.innerHTML = (`$${price7Data}.00`)
        color7.innerHTML = (`${color7Data}`)
        product7.src = product7src
        productName7.innerHTML = (`${productNameData7}`)

    const product8 = document.querySelector("#Product8")
        const price8 = document.querySelector("#price8")
        const color8 = document.querySelector("#color8")
        const productName8 = document.querySelector('#ProductName8')
        let price8Data = response.data[7].prices
        let color8Data = response.data[7].color
        let product8src = response.data[7].img
        let productNameData8 = response.data[7].productName
        price8.innerHTML = (`$${price8Data}`)
        color8.innerHTML = (`${color8Data}`)
        product8.src = product8src
        productName8.innerHTML = (`${productNameData8}`)


    const product9 = document.querySelector("#Product9")
        const price9 = document.querySelector("#price9")
        const color9 = document.querySelector("#color9")
        const productName9 = document.querySelector('#ProductName9')
        let price9Data = response.data[8].prices
        let color9Data = response.data[8].color
        let product9src = response.data[8].img
        let productNameData9 = response.data[8].productName
        price9.innerHTML = (`$${price9Data}`)
        color9.innerHTML = (`${color9Data}`)
        product9.src = product9src
        productName9.innerHTML = (`${productNameData9}`)


    const product10 = document.querySelector("#Product10")
        const price10 = document.querySelector("#price10")
        const color10 = document.querySelector("#color10")
        const productName10 = document.querySelector('#ProductName10')
        let price10Data = response.data[9].prices
        let color10Data = response.data[9].color
        let product10src = response.data[9].img
        let productNameData10 = response.data[9].productName
        price10.innerHTML = (`$${price10Data}`)
        color10.innerHTML = (`${color10Data}`)
        product10.src = product10src
        productName10.innerHTML = (`${productNameData10}`)

} catch (error) {
    console.log(error)
    }
    
})