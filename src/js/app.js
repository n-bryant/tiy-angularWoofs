"use strict";

const app = angular.module('woofApp', ['ui.router', 'LocalStorageModule']);

// config, $stateProvider, and $urlRouterProvider are provided by angular-ui-router
app.config(function($stateProvider, $urlRouterProvider) {

  // setting default url path
  $urlRouterProvider.otherwise('/');

  // declaring states
  $stateProvider.state('woofParent', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>'
  }).state('woofParent.newWoof', { // nested child states are defined using dot notation to tie back to their parent
    url: 'new-woof',
    controller: 'NewWoofController as newWoof',
    templateUrl: './templates/new.html'
  }).state('woofParent.listWoofs', {
    url: 'list-woofs?filter',
    controller: 'ListController as listCtrl',
    templateUrl: './templates/list.html'
  });
 });
