# Node.js exercise
- First of all run `$ npm install` to get all dependecies
This app will do the basic `CRUD` operations over a SQL tables.

## Client side
Start an AngularJS app with the folowing files:
- index.html
- app.js
- products
    - `products.view.html`
    - `producrs.controller.js`
- suppliers
    - `suppliers.view.html`
    - `suppliers.controller.js`
- shippers
    - `shippers.view.html`
    - `shippers.controller.js`

The **routing** and the **config** will be at `app.js`

## Server side
You should use the `node.js` examples and create a server that:
- have `GET` and `POST` for every Entity (`product`, `supplier`, `shipper`), `GET` method will list the results and `POST` will create a new one.


## Data
Use `northwind.sql` data