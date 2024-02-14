const Customer = require("../models/customer");

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


// const getCustomer = async (req, res) => {
//   const { id } = req.params;
//   const customer = await Customer.find();
//   if (customer[id]) {
//     res.send(customer[id]);
//   } else res.send("No customer with that index found");
// };


//will test if this works accurately, if not will use function above
const getCustomer= async (req, res) => {
    try {
      const { query } = req.params;
      if (typeof query == "number") {
        const customer = await Customer.find();
        if (customer[id]) {
          res.send(customer[id]);
        } else res.send("No customer with that index found");
      } else {
        const customers = await Customer.find({});
        if (!customers) throw Error("customers not found");
        for (let customer of customers) {
          if (customer.name == query) {
            res.json(customer);
          }
        }
      }
    } catch (e) {
      console.log(e);
      res.send("Customer not found!");
    }
  };

const createCustomer = async (req, res) => {
  const { name, address, email, phone } = req.body;

  if (name && address.street && address.city && address.state && address.zipCode && email && phone) {
    const newCustomer = {
      name,
      address,
      email,
      phone,
      favoritedItems:[]
    };
    Customer.create(newCustomer);
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
