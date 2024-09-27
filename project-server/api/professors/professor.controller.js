const Professor = require('./professor.model');

const getProfessors = async(req, res) => {
    const {query} = req;
    try {
        const professors = await Professor.find();
        res.json(professors);
    }
    catch(error) {
        res.status(500).json({ error: error.toString() });
    }
}

const getProfessorsByName = async(req, res) => {

}

const createProfessor = async(req, res) => {

}

const deleteProfessor = async(req, res) => {

}

module.exports = {
    getProfessors,
    getProfessorsByName,
    createProfessor,
    deleteProfessor
}