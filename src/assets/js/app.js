/* global Angular: true */

(function () {
    "use strict";

    var app = angular.module('fiveThreeOneCalculator', []);

    function calculatorController($scope) {
        var self                = this,
            WEEK_1_SET_1_FACTOR = 0.65,
            WEEK_1_SET_2_FACTOR = 0.75,
            WEEK_1_SET_3_FACTOR = 0.85,
            WEEK_2_SET_1_FACTOR = 0.70,
            WEEK_2_SET_2_FACTOR = 0.80,
            WEEK_2_SET_3_FACTOR = 0.90,
            WEEK_3_SET_1_FACTOR = 0.75,
            WEEK_3_SET_2_FACTOR = 0.85,
            WEEK_3_SET_3_FACTOR = 0.95,
            WEEK_4_SET_1_FACTOR = 0.65,
            WEEK_4_SET_2_FACTOR = 0.75,
            WEEK_4_SET_3_FACTOR = 0.85;

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

            exercise.week_1_set_1 = self.calculateSetWeight(tm, WEEK_1_SET_1_FACTOR);
            exercise.week_1_set_2 = self.calculateSetWeight(tm, WEEK_1_SET_2_FACTOR);
            exercise.week_1_set_3 = self.calculateSetWeight(tm, WEEK_1_SET_3_FACTOR);
            exercise.week_2_set_1 = self.calculateSetWeight(tm, WEEK_2_SET_1_FACTOR);
            exercise.week_2_set_2 = self.calculateSetWeight(tm, WEEK_2_SET_2_FACTOR);
            exercise.week_2_set_3 = self.calculateSetWeight(tm, WEEK_2_SET_3_FACTOR);
            exercise.week_3_set_1 = self.calculateSetWeight(tm, WEEK_3_SET_1_FACTOR);
            exercise.week_3_set_2 = self.calculateSetWeight(tm, WEEK_3_SET_2_FACTOR);
            exercise.week_3_set_3 = self.calculateSetWeight(tm, WEEK_3_SET_3_FACTOR);
            exercise.week_4_set_1 = self.calculateSetWeight(tm, WEEK_4_SET_1_FACTOR);
            exercise.week_4_set_2 = self.calculateSetWeight(tm, WEEK_4_SET_2_FACTOR);
            exercise.week_4_set_3 = self.calculateSetWeight(tm, WEEK_4_SET_3_FACTOR);
        };

        this.calculateSetWeight = function (tm, factor) {
            if (typeof tm === 'undefined') {
                tm = 0;
            }

            return Math.round(tm * factor / 2.5) * 2.5;
        }
    }

    app.controller('CalculatorController', calculatorController);
})();