const db = require('../db')
const Customer = require('../models/customer')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const customers = [
        {
            name: "Lane Nichols",
            address: {
                street: '5194 N Grey Hawk Drive',
                city:'Lehi',
                state:'UT',
                zipCode:'84043'
            },
            email: 'lanenichols17027@gmail.com',
            phone:'(208)680-4776',
            favoritedItems: []
        },
        {
            name: "Daisy Ban",
            address: {
                street: '9441 Heather Ave.',
                city:'Elizabeth',
                state:'NJ',
                zipCode:'07202'
            },
            email: 'daisyban@gmail.com',
            phone:'(707)677-1364',
            favoritedItems: []
        },
        {
            name: "Clora V",
            address: {
                street: '7050 Lantern St.',
                city:'Snohomish',
                state:'WA',
                zipCode:'98290'
            },
            email: 'cloav@gmail.com',
            phone:'(714)290-0773',
            favoritedItems: []
        },
        {
            name: "Itzel Alwarafi",
            address: {
                street: '273 Inidian Spring Court',
                city:'Kissimmee',
                state:'FL',
                zipCode:'34741'
            },
            email: 'itzelalwarafi@gmail.com',
            phone:'(248)582-3008',
            favoritedItems: []
        },
        {
            name: "Lani LeBaron",
            address: {
                street: '87 Mechanic Drive',
                city:'Quakertown',
                state:'PA',
                zipCode:'18951'
            },
            email: 'lanilebaron@gmail.com',
            phone:'(612)545-7135',
            favoritedItems: []
        },
        {
            name: "Todd Nichols",
            address: {
                street: '5410 Cooper Court',
                city:'Bartlesville',
                state:'OK',
                zipCode:'74006'
            },
            email: 'tknicholsfam@gmail.com',
            phone:'(572)627-1995',
            favoritedItems: []
        },

    ]

    await Customer.insertMany(customers)
    console.log("Created some customers!")
}




const run = async () => {
    await main()
    db.close()
}

run()
