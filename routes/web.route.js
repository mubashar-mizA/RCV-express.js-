import express from "express";
const router = express.Router()
import { homeController } from '../controller/home.controller.js'
import { aboutController } from '../controller/about.controller.js'
import { contactController } from '../controller/contact.controller.js'

router.get('/', homeController)
router.get('/about', aboutController)
router.get('/contact', contactController)
export default router