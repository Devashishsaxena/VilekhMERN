import express from 'express';
const router = express.Router();

import * as assignController from '../controller/assignController.js';

router.post("/save", assignController.save);

router.get("/fetch",assignController.fetch);

router.delete("/delete",assignController.deleteProject);

router.patch("/update",assignController.updateProject);

export default router;