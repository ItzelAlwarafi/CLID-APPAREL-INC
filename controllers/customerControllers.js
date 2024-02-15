const Customer = require("../models/customer");

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const getCustomer = async (req, res) => {
  try{
    const { query } = req.params;
  const customers = await Customer.find();
  if (customers[query]) {
    res.send(customers[query]);
  }
  for (let customer of customers){
    if (customer.name==query){
      res.send(customer)
    }
  }
  }
  catch (e) {
    console.log(e);
    res.send("No customer with that index or name found");
  }

//  else res.send("No customer with that index or name found");
};

const createCustomer = async (req, res) => {
  const { name, address, email, phone } = req.body;

  if (name && address && email && phone) {
    const newCustomer = {
      name,
      address,
      email,
      phone,
      favoritedItems:[]
    };
    Customer.create(newCustomer);
    console.log('Customer created')
    res.json(newCustomer);
  } else res.json("Need all the required information");
};

const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    Customer.findByIdAndDelete(id).then((deletedCustomer) => {
      if (!deletedCustomer) {
        res.send("No customer could be found");
      } else res.send("Customer Deleted");
    });
  };

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer

};
