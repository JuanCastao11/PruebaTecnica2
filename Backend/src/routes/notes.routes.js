import { Router } from "express";
import { createNote,getNote,updateNote,deleteNote} from "../controllers/notes.controller.js"

const router = Router();

router.post('/notes',createNote);
router.get('/notes',getNote);
router.put('/notes/:id',updateNote);
router.delete('/notes/:id',deleteNote);

export default router;