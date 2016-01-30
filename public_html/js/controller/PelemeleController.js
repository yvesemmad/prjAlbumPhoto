
function PelemeleController($scope,$location,$route,$routeParams){
    
    $scope.obj={flow:""};
    $scope.init=function(){
    };
    
    
    $scope.header = function(){
        return $location.path() == '/Pelemele';
    };
    
    $scope.urlData = function() {
        return $scope.data = $route.current.urldata;
    };
    
    $scope.urlParams = function() {
        $scope.params = {
            choose: $routeParams.choose,
            create: $routeParams.create
        };
        return $scope.params;
    };
    
    $scope.choix = function() {
        /*$scope.chx = $routeParams.choose != "";
        return $scope.chx;*/
        //console.info('choo ',$routeParams.choose);
        return $routeParams.choose;
    };
    
    $scope.create = function(type) {
        $location.path('/Pelemele/'+type);
    };
    
    $scope.checkFlow = function (){
        console.log('flow: ', ($scope.obj.flow.files));
        for(var i =0; i<$scope.obj.flow.files.length; i++){
            console.log('flow:'+i, ($scope.obj.flow.files[i]));
        }
        
    };
    //alert('urlParams:'+JSON.stringify($scope.choix()));
    
}
