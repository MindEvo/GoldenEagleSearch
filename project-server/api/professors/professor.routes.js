const router = require('express').Router();
const controller = require('./professor.controller');

router.get('/', controller.getProfessors);
router.get('/:name', controller.getProfessorsByName);

// admin use only
router.post('/', controller.createProfessor);
router.delete('/:name', controller.deleteProfessor);

module.exports = router;