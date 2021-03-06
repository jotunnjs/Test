var app = angular
    .module('dashboard.main', [
        'oc.lazyLoad',
        'ui.router'
        // 'ui.bootstrap'
        // 'angular-loading-bar',
    ])

app.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: '/pages/main/index.html',
            resolve: {
                loadMyDirectives: function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'dashboard.main'
                        ,
                        files: [

                            '/ui/header/header.js',
                            '/ui/header/header-notification/header-notification.js',
                            '/ui/sidebar/sidebar.js',
                            '/ui/sidebar/sidebar-search/sidebar-search.js'

                        ]
                    })
                }
            }
        })
})

// app.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

//   $ocLazyLoadProvider.config({
//     debug:false,
//     events:true,
//   });

// $urlRouterProvider.otherwise('/dashboard/home');

// $stateProvider
//   .state('dashboard', {
//     url:'/dashboard',
//     templateUrl: '/app/pages/main/index.html',
// resolve: {
//     loadMyDirectives:function($ocLazyLoad){
//         return $ocLazyLoad.load(
//         {
//             name:'dashboard',
//             files:[
//             '/ui/header/header.js',
//             'scripts/directives/header/header-notification/header-notification.js',
//             '/ui/sidebar/sidebar.js',
//             '/ui/sidebar/sidebar-search/sidebar-search.js'
//             ]
//         })
// ,
// $ocLazyLoad.load(
// {
//    name:'toggle-switch',
//    files:["../bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
//           "../bower_components/angular-toggle-switch/angular-toggle-switch.css"
//       ]
// }),
// $ocLazyLoad.load(
// {
//   name:'ngAnimate',
//   files:['../bower_components/angular-animate/angular-animate.js']
// })
// $ocLazyLoad.load(
// {
//   name:'ngCookies',
//   files:['../bower_components/angular-cookies/angular-cookies.js']
// })
// $ocLazyLoad.load(
// {
//   name:'ngResource',
//   files:['../bower_components/angular-resource/angular-resource.js']
// })
// $ocLazyLoad.load(
// {
//   name:'ngSanitize',
//   files:['../bower_components/angular-sanitize/angular-sanitize.js']
// })
// $ocLazyLoad.load(
// {
//   name:'ngTouch',
//   files:['../bower_components/angular-touch/angular-touch.js']
// })
// }
// }
//    })
// }]);

module.exports = app;
