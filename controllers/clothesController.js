const Clothes = require('../models/clothes')

const getAllClothes = async (req, res) => {
   try {
      const clothes = await Clothes.find({})
      res.json(clothes)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getClothingType= async (req, res) => {
   try {
     const { query } = req.params;
     if (query == "Denim" || query == "Sweater" || query == "Sneakers" || query == "Clogs") {
       const clothing = await Clothes.find({type: query});
       if (clothing) {
         res.send(clothing);
       } else res.send("No clothing with that type found");
     } else {
       const clothings = await Clothes.find({});
       if (!clothings) throw Error("clothings not found");
       for (let clothing of clothings) {
         if (clothing.productName == query) {
           res.json(clothing);
         }
       }
     }
   } catch (e) {
     console.log(e);
     res.send("Clothing not found!");
   }
 };

  const createClothes = async (req, res) => {
   try{
   const clothes = await Clothes.create(req.body)
   return res.status(201).json({
      recipe,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}
const updateClothes = async (req, res) => {
   try {
      let id = req.params.id
      let clothes = await Movie.findByIdAndUpdate(id, req.body, { new: true })
      if (clothes) {
         return res.status(200).json(movie)
      }
      throw new Error('Clothin item not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}
const deleteClothes = async (req, res) => {
   try {
      const id = req.params.id
      let clothes = await Clothes.findByIdAndDelete(id)
      if (clothes) {
         return res.status(200).json(movie)
      }
      throw new Error('Clothes not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}
//    const getClothesByType = async (req, res) => {
//       try {
//           const { name } = req.params
//           const clothes = await Clothes.find({ type : name })
//           if (!clothes) {
//               return res.status(404).send(' Clothing type not found !')
//           }
//           res.json(clothes)
//       } catch (error) {
//           console.error(error)
//           res.status(500).send('Internal Server Error')
//       }
//   }

  const getClothesByGender = async (req, res) => {
   try {
       const { gender } = req.params
       const clothes = await Clothes.findOne({ gender : gender })
       if (!clothes) {
           return res.status(404).send(' Clothing type not found !')
       }
       res.json(clothes)
   } catch (error) {
       console.error(error)
       res.status(500).send('Internal Server Error')
   }
}
//app.get('/clothes/:name',clothesController.getClothesByType)

  module.exports = {
   getAllClothes,
  createClothes,
  updateClothes,
  deleteClothes,
  getClothingType
  }
