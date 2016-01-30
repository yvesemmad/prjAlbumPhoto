
function MainController($scope,$location){
    
    $scope.app = {
        Title: '... Album Photo'
    }
    $scope.header = function(){
        return $location.path() == '/Home';
    }
}
