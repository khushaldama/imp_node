let app = angular.module('myapp', []);

app.controller('myCtrl', function ($scope) {
    $scope.amount = 1;
    $scope.fromCurrency = 'USD';
    $scope.toCurrency = 'EUR';

    var exchangeRates = {
        'USD': 1.0,
        'EUR': 0.85,
        'GBP': 0.73,
    };

    $scope.convertCurrency = function () {
        var rate = exchangeRates[$scope.fromCurrency] / exchangeRates[$scope.toCurrency];
        $scope.convertedAmount = $scope.amount * rate;
    };
});