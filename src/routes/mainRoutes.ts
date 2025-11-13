import { Router } from "express";
import * as customerControllers from "../controllers/customerControllers.ts";
import * as productsControllers from "../controllers/productControllers.ts"
import * as orderControllers from "../controllers/orderControllers.ts"
import * as registerControllers from "../controllers/registerControllers.ts"


const router = Router(); // экземпляр роутера
// Customers
router.get("/getAllCustomers", customerControllers.getAllCustomers);
router.get("/getByIdCustomer/:id", customerControllers.getByIDCustomer);
router.post("/createNewCustomer", customerControllers.createNewCustomer);
router.put("/updateCustomer/:id", customerControllers.updateCustomerById);
router.delete("/deleteCustomer/:id", customerControllers.deleteCustomerById);


//Products
router.get("/getAllProducts", productsControllers.getAllProducts)
router.get("/getByIdProduct/:id", productsControllers.getProduct)
router.post("/addNewProdact", productsControllers.addProduct)
router.put("/updateProduct", productsControllers.updataProduct)
router.delete("/deleteProduct", productsControllers.deleteProduct)


// Order
router.get("/getAllOrders", orderControllers.getAllOrders)
router.get("/getByIdOrder/:id", orderControllers.getByIdOrder)
router.post("/addNewOrder", orderControllers.addNewOrder)
router.put("/updateOrder", orderControllers.updataOrder)
router.delete("/deleteOrder", orderControllers.deleteOrder)



// Register
router.post("/register", registerControllers.default)
export default router;
