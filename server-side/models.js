function product(params){

  this.ProductName = params.ProductName
  this.SupplierID = params.SupplierID
  this.CategoryID = params.CategoryID
  this.QuantityPerUnit = params.QuantityPerUnit 
  this.UnitPrice = params.QuantityPerUnit
  this.UnitsInStock = params.UnitsInStock  
  this.UnitsOnOrder = params.UnitsOnOrder
  this.ReorderLevel = params.ReorderLevel
  this.Discontinued = params.Discontinued
}
function supplier(params) {
  this.SupplierID = params.SupplierID
  this.CompanyName = params.CompanyName
  this.ContactName = params.ContactName
  this.ContactTitle = params.ContactTitle
  this.Address = params.Address
  this.City = params.City
  this.Region = params.Region
  this.PostalCode = params.PostalCode
  this.Country = params.Country
  this.Phone = params.Phone
  this.Fax = params.Fax
  this.HomePage = params.HomePage
}

function shipper(params) {
 this.ShipperID= params.ShipperID
 this.CompanyName= params.CompanyName
 this.Phone= params.Phone
 }


module.exports.product = product;
module.exports.supplier = supplier;
module.exports.shipper = shipper;
