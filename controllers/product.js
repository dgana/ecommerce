const Products = require('../models/products')

module.exports = {
  add: (req, res) => {
    let newProduct = Products({
      name: req.body.name,
      category: req.body.category,
      stock: req.body.stock, // Number
      price: req.body.price, // Number
      created_at: new Date(),
      updated_at: new Date()
    })
    newProduct.save(function (err, product) {
      if (err) throw err
      res.json(product)
    })
  },
  read: (req, res) => {
    Products.find({}, function (err, products) {
      if (err) throw err
      res.json(products)
    })
  },
  delete: (req, res) => {
    Products.findByIdAndRemove(req.params.id, function (err, product) {
      if (err) throw err
      res.json(product)
    })
  },
  // update: (req, res) => {
  //   Products.findByIdAndUpdate(req.params.id, {
  //     name: req.body.name,
  //     category: req.body.category,
  //     stock: req.body.stock,
  //     price: req.body.price,
  //     updated_at: new Date()
  //   }, {new: true}, function (err, product) {
  //     if (err) throw err
  //     res.json(product)
  //   })
  // },
  update: (req, res) => {
    let carts = JSON.parse(req.body.data)
    carts.forEach(function (item) {
      Products.findOne({_id: item.id}, function (err, data) {
        let prev = data.stock
        let update = prev - item.qty
        data.stock = update
        data.save(function (err) {
          if (err) throw err
        })
      })
    })
    res.send('Data Updated')
  }
}
