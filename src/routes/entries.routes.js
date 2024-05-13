"use strict"
import { Router } from 'express';
import { addEntry, addEntryResponse, getEntries, getEntryResponses } from '../controllers/entries.controller.js';

const entriesRouter = Router();

entriesRouter.get("/entries", getEntries);
entriesRouter.get("/entryResponses/:entry_id", getEntryResponses);
entriesRouter.post("/addEntry", addEntry);
entriesRouter.post("/addEntryResponse", addEntryResponse);

export default entriesRouter;