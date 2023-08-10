import express from 'express';
const router = express.Router();

import * as taskController from '../controller/taskController.js';

router.post("/save", taskController.save);

router.get("/fetch",taskController.fetch);

router.delete("/delete",taskController.deleteTask);

router.patch("/update",taskController.updateTask);

export default router;