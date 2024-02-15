const nameBox=document.getElementById('name')
const addressBox=document.getElementById('address')
const emailBox=document.getElementById('email')
const phoneBox=document.getElementById('phone')

const submitButton=document.getElementById('submit')

submitButton.addEventListener('click', async()=>{
    const  name=nameBox.value
    const  address=addressBox.value
    const  email=emailBox.value
    const  phone=phoneBox.value

    let data={
        name,
        address,
        email,
        phone
    }

    let response= await axios.post('http://localhost:3001/customers', data )
    console.log(response)

})
