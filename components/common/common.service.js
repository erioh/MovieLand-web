(function () {
  'use strict';

  angular.module('common')
    .service('CommonService', CommonService);

  CommonService.$inject = ['$http', '$rootScope'];
  function CommonService($http, $rootScope) {
    var service = this;

    service.getMovieWithCurrency = function (movieId, currency) {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/movie/" + movieId),
        params: {currency: currency}
      });
    };

    service.getMovies = function () {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/movie")
      });
    };

    service.getMoviesWithSort = function (sortType) {

      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/movie"),
        params: getSortParam(sortType)
      });
    };

    service.getMoviesByGenreIdWithSort = function (genreId, sortType) {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/movie/genre/" + genreId),
        params: getSortParam(sortType)
      });
    };

    function getSortParam(sortType) {
      var params;
      if (sortType === "priceAsc") {
        params = {"price": "asc"}
      } else if (sortType === "priceDesc") {
        params = {"price": "desc"}
      } else {
        params = {"rating": "desc"}
      }
      return params;
    }

    service.getRandomMovies = function () {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/movie/random")
      });
    };

    service.getMoviesByGenreId = function (genreId) {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/movie/genre/" + genreId)
      });
    };

    service.getMovieById = function (movieId) {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/movie/" + movieId)
      });
    };

    service.getGenres = function () {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/genre")
      });
    };


    service.getCountries = function () {
      return $http({
        method: "GET",
        url: ("http://localhost:8080/v1/country")
      });
    };


    service.addReview = function (review) {
      return $http({
        method: "POST",
        url: ("http://localhost:8080/v1/review/"),
        data: review,
        headers: {
          'uuid': $rootScope.user.uuid
        }
      });
    };

    service.removeReview = function (reviewId) {
      return $http({
        method: "DELETE",
        url: ("http://localhost:8080/v1/review/" + reviewId),
        headers: {
          'uuid': $rootScope.user.uuid
        }
      });
    };
  }


})();

