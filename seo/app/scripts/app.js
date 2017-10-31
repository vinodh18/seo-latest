'use strict';

/**
 * @ngdoc overview
 * @name seoApp
 * @description
 * # seoApp
 *
 * Main module of the application.
 */
 
angular
  .module('seoApp', ['chart.js','ngCookies','ngResource','ngRoute', 'ui.bootstrap', 'simple-angular-dialog',
          'angularMoment','ngBootstrap','720kb.datepicker', 'ui.router', 'xeditable','cp.ngConfirm',
          'infinite-scroll', 'tagged.directives.infiniteScroll', 'angularUtils.directives.dirPagination'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');    

     $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'views/main.html',
           controller: 'MainCtrl',
          
      })
     
       .state('create', {
          url: '/create-competitor',
          templateUrl: 'views/tabs/create_competitor.html',
           controller: 'MainCtrl',
           
      });
        /* .state('view', {
          url: '/view',
          templateUrl: 'views/tabs/reports_and_trends_view.html',
           controller: 'MainCtrl',
           
      })*/

      /*.state('home.about', {
          url: 'about',
          templateUrl: 'views/about.html',
           controller: 'AboutCtrl',
           
      })*/
    
  });
