let app = angular.module("myApp" , [])

app.controller("myCtr" , ($scope , $http)=> {
    $scope.names = ['test 1' , 'test 2' , 'agsdgsgsf' , 'Vbdsfhdfhdf'];
    $scope.degrees = [30 ,50 ,90 , 190]

    $scope.Customers = [
        { Name: "John Hammond", Country: "United States" },
        { Name: "Mudassar Khan", Country: "India" },
        { Name: "Suzanne Mathews", Country: "France" },
        { Name: "Robert Schidner", Country: "Russia" }
       ];
    $http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eda1636bfb0ecf2ce51b2d705926750e&page=1`)
    .then(myData => {
        $scope.movies = myData.data.results
    })
     $scope.note = {
        title : "" ,
        desc : ""
    }
    $scope.checked = false;
     $scope.change = function(){
        $scope.note.noteTitle = document.getElementsByName("title")[0].value;
        $scope.note.noteDesc = document.getElementsByName("desc")[0].value;
    }

    $scope.getData = function() {
        $scope.checked = true;
        setTimeout(() => {
            $scope.checked = false;
        }, 50);
    }
})