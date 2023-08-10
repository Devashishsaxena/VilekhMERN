import express from 'express';
const router = express.Router();

import * as submissionController from '../controller/submissionController.js';

router.post("/save", submissionController.save);

router.get("/fetch",submissionController.fetch);

router.delete("/delete",submissionController.sdelete);

router.patch("/update",submissionController.update);

export default router;