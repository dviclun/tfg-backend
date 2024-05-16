"use strict"
import { Router } from 'express';
import { addEntry, addEntryResponse, deleteEntry, getEntries, getEntryResponses } from '../controllers/entries.controller.js';

const entriesRouter = Router();

entriesRouter.get("/entries", getEntries);
entriesRouter.get("/entryResponses/:entry_id", getEntryResponses);
entriesRouter.post("/addEntry", addEntry);
entriesRouter.post("/addEntryResponse", addEntryResponse);
entriesRouter.delete("/deleteEntry", deleteEntry);

export default entriesRouter;