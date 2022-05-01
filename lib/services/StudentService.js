class StudentService {
    static getStudents(explorers) {
        return explorers;
    }

    static getStudentsEmailsByCertification(explorers) {
        const explorersCertifications = explorers.filter((explorer) => explorer.haveCertification);
        return explorersCertifications.map((explorers) => explorers.email);
    }

    static getStudentsCreditsGreaterThan500(explorers) {
        return explorers.filter((explorer) => explorer.credits > 500);
    }
}

module.exports = StudentService;