ngDescribe({
    name: 'Calculator Service test',
    modules: 'fiveThreeOneCalculator',
    inject: 'CalculatorService',
    tests: function(deps) {
        it('calculates set weight from integer', function () {
            expect(deps.CalculatorService.calculateSetWeight(100, 0.9)).toEqual(90);
        });

        it('calculates set weight from decimal', function () {
            expect(deps.CalculatorService.calculateSetWeight(97.5, 0.9)).toEqual(87.5);
        });

        it('rounds to nearest 2.5kg', function () {
            expect(deps.CalculatorService.calculateSetWeight(102.5, 0.95)).toEqual(97.5);
            expect(deps.CalculatorService.calculateSetWeight(70, 0.95)).toEqual(67.5);
        });
    }
});