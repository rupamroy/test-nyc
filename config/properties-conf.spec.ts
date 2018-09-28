describe('Properties Conf', () => {
    let moduleUnderTest;
    const moduleUnderTestPath = './properties-conf';

    beforeEach(() => {
        // Load the module under test
        moduleUnderTest = require(moduleUnderTestPath);
    });
    describe('The module', () => {
        it('should exist', () => {
            // Assert
            expect(moduleUnderTest).toBeDefined();
        });
    });
});
