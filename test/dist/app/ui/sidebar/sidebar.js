"use strict";angular.module("ui").directive("sidebar",["$location",function(){return{templateUrl:"/ui/sidebar/sidebar.html",restrict:"E",replace:!0,scope:{},controller:function(l){l.selectedMenu="dashboard",l.collapseVar=0,l.multiCollapseVar=0,l.check=function(e){e==l.collapseVar?l.collapseVar=0:l.collapseVar=e},l.multiCheck=function(e){e==l.multiCollapseVar?l.multiCollapseVar=0:l.multiCollapseVar=e}}}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NpZGViYXIvc2lkZWJhci5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwidGVtcGxhdGVVcmwiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJzY29wZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJzZWxlY3RlZE1lbnUiLCJjb2xsYXBzZVZhciIsIm11bHRpQ29sbGFwc2VWYXIiLCJjaGVjayIsIngiLCJtdWx0aUNoZWNrIiwieSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFTQUEsU0FBUUMsT0FBTyxNQUNWQyxVQUFVLFdBQVksWUFBYSxXQUNoQyxPQUNJQyxZQUFhLDJCQUNiQyxTQUFVLElBQ1ZDLFNBQVMsRUFDVEMsU0FDQUMsV0FBWSxTQUFTQyxHQUNqQkEsRUFBT0MsYUFBZSxZQUN0QkQsRUFBT0UsWUFBYyxFQUNyQkYsRUFBT0csaUJBQW1CLEVBRTFCSCxFQUFPSSxNQUFRLFNBQVNDLEdBRWhCQSxHQUFLTCxFQUFPRSxZQUNaRixFQUFPRSxZQUFjLEVBRXJCRixFQUFPRSxZQUFjRyxHQUc3QkwsRUFBT00sV0FBYSxTQUFTQyxHQUVyQkEsR0FBS1AsRUFBT0csaUJBQ1pILEVBQU9HLGlCQUFtQixFQUUxQkgsRUFBT0csaUJBQW1CSSIsImZpbGUiOiJ1aS9zaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgaXp6eXBvc1dlYkFwcC5kaXJlY3RpdmU6YWRtaW5Qb3NIZWFkZXJcbiAqIEBkZXNjcmlwdGlvblxuICogIyBhZG1pblBvc0hlYWRlclxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCd1aScpXG4gICAgLmRpcmVjdGl2ZSgnc2lkZWJhcicsIFsnJGxvY2F0aW9uJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy91aS9zaWRlYmFyL3NpZGViYXIuaHRtbCcsXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZE1lbnUgPSAnZGFzaGJvYXJkJztcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29sbGFwc2VWYXIgPSAwO1xuICAgICAgICAgICAgICAgICRzY29wZS5tdWx0aUNvbGxhcHNlVmFyID0gMDtcblxuICAgICAgICAgICAgICAgICRzY29wZS5jaGVjayA9IGZ1bmN0aW9uKHgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PSAkc2NvcGUuY29sbGFwc2VWYXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY29sbGFwc2VWYXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY29sbGFwc2VWYXIgPSB4O1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVjayA9IGZ1bmN0aW9uKHkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoeSA9PSAkc2NvcGUubXVsdGlDb2xsYXBzZVZhcilcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tdWx0aUNvbGxhcHNlVmFyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm11bHRpQ29sbGFwc2VWYXIgPSB5O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
