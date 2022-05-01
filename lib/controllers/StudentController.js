const StudentService = require('../services/StudentService');
const Reader = require('../utils/Reader');

class StudentController {
    static getStudents() {
        const explorers = Reader.readJsonFile('students.json');
        return StudentService.getStudents(explorers);
    }

    static getStudentsEmailsByCertification() {
        const explorers = Reader.readJsonFile('students.json');
        return StudentService.getStudentsEmailsByCertification(explorers);
    }

    static getStudentsCreditsGreaterThan500() {
        const explorers = Reader.readJsonFile('students.json');
        return StudentService.getStudentsCreditsGreaterThan500(explorers);
    }
}

module.exports = StudentController;