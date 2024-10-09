import { Router } from "express";
import { getAllLaws, getLawById, createLaw, updateLawById, deleteLawById } from "../controllers/LawDetail.controller.js";

const router = Router();

// Route to get all laws
router.route("/getAllLaws").get(getAllLaws);

// Route to get a law by ID
router.route("/:id").get(getLawById);

// Route to create a new law (secured)
router.route("/createlaw").post(createLaw);

// Route to update a law by ID (secured)
router.route("/:id").put(updateLawById);

// Route to delete a law by ID (secured)
router.route("/:id").delete(deleteLawById);

export default router;
