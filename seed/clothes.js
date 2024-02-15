const db = require('../db')
const Clothes =require('../models/clothes');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const clothings = [
            {
                productName: "Loose Carpenter Jeans",
                type: "Denim",
                sizes: ["28", "29", "30", "31", "32", "33", "34", "36", "38", "40" ],
                prices: 79.95,
                color: "white",
                gender: "men",
                description: "It's vibe with a relaxed straight carpenter jean with an effortless slouch",
                machineWashable: true,
                img:  "../image/[Jeans] Men Loose Carpenter Jeans- white.jpeg"
             },

            {
                productName: "Carpenter Jeans",
                type: "Denim",
                sizes: ["28", "29", "30", "31", "32", "33", "34", "36", "38", "40" ],
                prices: 63,
                color: "Dark Wash",
                gender: "men",
                description: "It's a relaxed carpenter jean with an slouch",
                machineWashable: true,
                img: "../image/[Jeans]Men Loose Carpenter Jeans.avif"
            },

            {
                productName: "High Rise Cheeky Jeans",
                type: "Denim",
                sizes: ["23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ],
                prices: 31,
                color: "Dark Wash",
                gender: "women",
                description: "Old school. Meet new school. Our vintage-inspired pair that hugs all your curves.",
                machineWashable: true,
                img: "../image/[Jeans] Women High Rise Cotton - Dark.avif"
            },

            {
                productName: "High Rise Cotton Loose Jeans",
                type: "Denim",
                sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ],
                prices: 47,
                color: "Light",
                gender: "women",
                description: "A relaxed essential straight jean with an effortless slouch. ",
                machineWashable: true,
                img: "../image/[Jeans] Women High Rise Cotton - Light.avif"
            },

            {
                productName: "Organic Cotton Jeans",
                type: "Denim",
                sizes: ["28", "29", "30", "31", "32", "33", "34", "35" ],
                prices: 89.95,
                color: "Dark Indigo",
                gender: "unisex",
                description: "From Harlem to the world. Inspired by archival denim, rooted in western Americana & made for all.",
                machineWashable: true,
                img: "../image/[Jeans]Unisex Loose Jeans.avif"
            },

            {
                productName: "Crewneck Sweater",
                type: "Sweater",
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL" ],
                prices: 34.99,
                color: "beige",
                gender: "men",
                description: "This sweater is made with 52% recycled polyester. Soft poly-wool blend sweater.",
                machineWashable: true,
                img: "../image/[Sweater] Men Crewneck - Beige.avif"
            },

            {
                productName: "Textured Crewneck Sweater",
                type: "Sweater",
                sizes: ["S", "M", "L", "XL", "XXL", "XXXL" ],
                prices: 78,
                color: "Dark Night",
                gender: "men",
                description: "Textured cotton-wool blend sweater. Ribbed crewneck.",
                machineWashable: true,
                img: "../image/[Sweater]Men Textured Crew Neck - Dark Night.avif"
            },

            {
                productName: "Stitch Turtleneck Sweater",
                type: "Sweater",
                sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
                prices: 59.99,
                color: "pink",
                gender: "women",
                description: "This sweater is made with 24% recycled polyester. Soft shaker-stitch sweater.",
                machineWashable: false,
                img: "../image/[Sweater] Women Shaker-Stitch - pink.avif"
            },

            {
                productName: "Pointelle Sweater",
                type: "Sweater",
                sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
                prices: 69.95,
                color: "green",
                gender: "women",
                description: "Soft, slightly cropped cotton pointelle sweater. Scalloped crewneck.",
                machineWashable: false,
                img: "../image/[Sweater]Women Pointelle Sweater - green.avif"
            },

            {
                productName: "Vintage Soft Hoodie",
                type: "Sweater",
                sizes: ["XXXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL" ],
                prices: 54.95,
                color: "white",
                gender: "unisex",
                description: "Our softer than soft sweats. Made to be your new everywhere, always-on essential.",
                machineWashable: true,
                img: "../image/[Hoodie]Women white.avif"
            },

            {
                productName: "Alpine Sneakers",
                type: "Sneakers",
                sizes: ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
                prices: 145,
                color: "black",
                gender: "men",
                description: "Your new day-in, day-out, versatile sneakers. Comfortable, breathable, stain and odor resistant too.",
                machineWashable: false,
                img: "../image/[Shoes]Men Alpine Sneakers - black.webp"
            },

            {
                productName: "Brady Sneakers",
                type: "Sneaker",
                sizes: ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13" ],
                prices: 155,
                color: "navy",
                gender: "unisex",
                description: "Our softer than soft sweats. Made to be your new everywhere, always-on essential.",
                machineWashable: false,
                img: "../image/[Shoes] Men Brady Sneakers - Navy.webp"
            },

            {
                productName: "Thousand Fell Womens Lace Up Sneaker",
                type: "Sneaker",
                sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
                prices: 145,
                color: "white",
                gender: "women",
                description: "Your new day-in, day-out, versatile sneakers. Comfortable, breathable, stain and odor resistant too. ",
                machineWashable: false,
                img: "../image/[Shoes]Women Lace Up Sneaker - white.avif"
            },

            {
                productName: "Go To Platform Sneaker",
                type: "Sneaker",
                sizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "11" ],
                prices: 95,
                color: "brown",
                gender: "unisex",
                description: "Vegan, platform sneaker with woven knit detailing.Textile upper with manmade outsole.",
                machineWashable: false,
                img: "../image/[Shoes]Women Go To Platform Sneaker - brown.avif"
            }
        ]
    await Clothes.insertMany(clothings)
    console.log('Created clothes!')
}
    const run = async () => {
        try {
            await main();
        } catch (error) {
            console.error('Error running the seed script:', error);
        } finally {
            db.close();
        }
    }

    run()
