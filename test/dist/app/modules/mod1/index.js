var controller=require("./mod1.Ctrl");angular.module("module1.controller",[]).controller("mod1Ctrl",controller);var service=require("./mod1.Srvice");angular.module("module1.service",[]).factory("fac",service);var app=angular.module("module1",["module1.controller","module1.service"]);app.config(function(e,r){e.state("page1",{url:"/page1",templateUrl:"./modules/mod1/index.html",controller:"mod1Ctrl"})}),module.exports=app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvbW9kMS9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb250cm9sbGVyIiwicmVxdWlyZSIsImFuZ3VsYXIiLCJtb2R1bGUiLCJzZXJ2aWNlIiwiZmFjdG9yeSIsImFwcCIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUVBLEdBQUlBLFlBQWFDLFFBQVEsY0FPekJDLFNBQVFDLE9BQU8seUJBQ1ZILFdBQVcsV0FBWUEsV0FRNUIsSUFBSUksU0FBVUgsUUFBUSxnQkFPdEJDLFNBQVFDLE9BQU8sc0JBQ2JFLFFBQVEsTUFBT0QsUUFFakIsSUFBSUUsS0FBTUosUUFBUUMsT0FBTyxXQUFZLHFCQUFzQixtQkFHM0RHLEtBQUlDLE9BQU8sU0FBU0MsRUFBZ0JDLEdBQ2hDRCxFQUNLRSxNQUFNLFNBQ0hDLElBQUssU0FDTEMsWUFBYSw0QkFDYlosV0FBWSxlQUl4QkcsT0FBT1UsUUFBVVAiLCJmaWxlIjoibW9kdWxlcy9tb2QxL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVxdWlyZSgnLi9zdHlsZS5sZXNzJyk7XG5cbnZhciBjb250cm9sbGVyID0gcmVxdWlyZSgnLi9tb2QxLkN0cmwnKTtcbi8vIHJlcXVpcmUoJy4vaW5kZXguaHRtbCcpO1xuLyoqXG4gKiBtb2R1bGUxIE1vZHVsZVxuICpcbiAqIERlc2NyaXB0aW9uXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdtb2R1bGUxLmNvbnRyb2xsZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignbW9kMUN0cmwnLCBjb250cm9sbGVyKVxuXG4vKipcbiAqIG1vZHVsZTEgTW9kdWxlXG4gKlxuICogRGVzY3JpcHRpb25cbiAqL1xuXG52YXIgc2VydmljZSA9IHJlcXVpcmUoJy4vbW9kMS5TcnZpY2UnKTtcblxuLyoqXG4qIG1vZHVsZTEuc2VydmljZSBNb2R1bGVcbipcbiogRGVzY3JpcHRpb25cbiovXG5hbmd1bGFyLm1vZHVsZSgnbW9kdWxlMS5zZXJ2aWNlJywgW10pXG5cdC5mYWN0b3J5KCdmYWMnLCBzZXJ2aWNlKVxuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ21vZHVsZTEnLCBbJ21vZHVsZTEuY29udHJvbGxlcicsICdtb2R1bGUxLnNlcnZpY2UnXSlcblxuXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ3BhZ2UxJywge1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2UxJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi9tb2R1bGVzL21vZDEvaW5kZXguaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnbW9kMUN0cmwnXG4gICAgICAgIH0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==