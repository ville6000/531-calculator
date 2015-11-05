/* global Angular: true */

(function () {
    "use strict";

    var app = angular.module('fiveThreeOneCalculator', []);

    function CalculatorController($scope, CalculatorService) {
        var self     = this,
            factors  = {
                WEEK_1_SET_1: 0.65,
                WEEK_1_SET_2: 0.75,
                WEEK_1_SET_3: 0.85,
                WEEK_2_SET_1: 0.70,
                WEEK_2_SET_2: 0.80,
                WEEK_2_SET_3: 0.90,
                WEEK_3_SET_1: 0.75,
                WEEK_3_SET_2: 0.85,
                WEEK_3_SET_3: 0.95,
                WEEK_4_SET_1: 0.65,
                WEEK_4_SET_2: 0.75,
                WEEK_4_SET_3: 0.85
            },
            maxWeeks = 4,
            maxSets  = 3;

        $scope.tms = {};
        $scope.exercises = {
            bench:    {},
            ohp:      {},
            squat:    {},
            deadlift: {}
        };

        $scope.calculateWeights = function (exercise_name) {
            var exercise = $scope.exercises[exercise_name],
                tm       = $scope.tms[exercise_name];

            for (var weekIdx = 0; weekIdx < maxWeeks; weekIdx++) {
                for (var setIdx = 0; setIdx < maxSets; setIdx++) {
                    exercise[self.getSetKey(weekIdx, setIdx)] = CalculatorService.calculateSetWeight(tm, self.getFactor(weekIdx, setIdx));
                }
            }
        };

        this.getSetKey = function (weekIdx, setIdx) {
            return "week_" + ( weekIdx + 1) + "_set_" + ( setIdx + 1);
        };

        this.getFactor = function (weekIdx, setIdx) {
            return factors[this.getSetKey(weekIdx, setIdx).toUpperCase()];
        };
    }

    app.controller('CalculatorController', ['$scope', 'CalculatorService', CalculatorController]);

    function CalculatorService() {
        this.calculateSetWeight = function (tm, factor) {
            if (typeof tm === 'undefined') {
                tm = 0;
            }

            return Math.round(tm * factor / 2.5) * 2.5;
        }
    }

    app.service('CalculatorService', CalculatorService);
})();