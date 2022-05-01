const StudentController = require('./../../lib/controllers/StudentController');

describe('Test Suits for StudentController.js', () => {
    test('1) Get all students', () => {
        const results = StudentController.getStudents();        

        expect(results).not.toBeUndefined();
    });

    test('2) Get students emails where haveCertification is true', () => {
        const results = StudentController.getStudentsEmailsByCertification();        

        expect(results).not.toBeUndefined();
    });

    test('3) Get students credits > 500', () => {
        const results = StudentController.getStudentsCreditsGreaterThan500();        

        expect(results).not.toBeUndefined();
    });
});