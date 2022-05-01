const StudentService = require('./../../lib/services/StudentService');
const Reader = require('./../../lib/utils/Reader');

describe('Test Suits for StudentService.test.js', () => {
    const explorers = Reader.readJsonFile('students.json');

    test('1) Get all students', () => {
        const results = StudentService.getStudents(explorers);        

        expect(results).not.toBeUndefined();
    });

    test('2) Get students emails where haveCertification is true', () => {
        const results = StudentService.getStudentsEmailsByCertification(explorers);        

        expect(results).not.toBeUndefined();
    });

    test('3) Get students credits > 500', () => {
        const results = StudentService.getStudentsCreditsGreaterThan500(explorers);        

        expect(results).not.toBeUndefined();
    });
});