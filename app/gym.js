angular.module('gym').component('gymService', {
        templateUrl: 'pages/members.html',
        controllerAs: 'vm',
        controller: function($scope, $firebaseArray){
            var vm = this;
            vm.members = [];
            debugger
            var gymdb = new Firebase('https://gym-bd-0509.firebaseio.com/');          

            vm.members = $firebaseArray(gymdb);
            
            vm.addMember = function (newMember){
               vm.members.$add(newMember);
               $scope.member = {};
            };
            
            vm.removeMember = function(member){
                debugger
                vm.members.$remove(member)
            }
        }
        })
        
     .component('addSome', {
        templateUrl: 'pages/deps.html',
        bindings: {
            member: '<',
        },
        controllerAs: 'vm',
        controller: function($scope){
            var sm = this;

            
            sm.addSome = function(someone){
                sm.member.someone = sm.member.someone || [];
                sm.member.someone.push(someone);
                console.log(sm.member);
                $scope.someone = {};
            };
        }
     })
     
