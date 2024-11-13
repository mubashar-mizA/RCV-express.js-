import express from "express";

import { createStudent, allStudents, updateStudent, deleteStudent } from '../controller/student.controller.js'

const router = express.Router()

router.get('/create', createStudent)
router.get('/all', allStudents)
router.get('/update', updateStudent)
router.get('/delete/:id([0-9]{2})', deleteStudent)

export default router
