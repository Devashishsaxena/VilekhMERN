import express from 'express';
const router = express.Router();

import * as UserController from '../controller/userController.js';

router.post("/save", UserController.save);

router.get("/fetch",UserController.fetch);

router.delete("/delete",UserController.deleteUser);

router.patch("/update",UserController.updateUser);

router.post("/login",UserController.login);


export default router;