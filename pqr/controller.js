let app = angular.module("myapp",[]);
app.controller("myCtrl",($scope,$http)=>{
    $scope.getData = ()=>{
        $http.get("/api/getTaskData").then((response)=>{
            $scope.tasks = response.data;
            console.log(response.data);
        });
    };
    $scope.addTask = ()=>{
        let obj = {
            Name:$scope.Name,
            age:$scope.age
        };
        console.log(obj);
        console.log("Add function");
        $http.post("/api/addTask",obj).then((response)=>{
            $scope.getData();
            $scope.task = "";

        });
    };
    $scope.updateTask = (obj)=>{
        updateId = obj._id;
        $scope.Name = obj.Name;
        $scope.age = obj.age;
        console.log("Update function first");
        console.log(obj);
        document.getElementById("formbutton1").style.display = "none";
        document.getElementById("formbutton2").style.display = "block";
    };
    $scope.updateTaskData = ()=>{
        let obj = {
            task:$scope.task,
            status:$scope.status
        };
        console.log("Update function second");
        console.log(updateId);
        $http.put("/api/updateTask/"+updateId,obj).then((response)=>{
            $scope.getData();
            $scope.Name = "";
            $scope.age = "";
            document.getElementById("formbutton1").style.display = "block";
            document.getElementById("formbutton2").style.display = "none";
        });
    }
    $scope.deleteTask = (obj)=>{
        $http.delete("/api/deleteTask/"+obj._id).then((response)=>{
            $scope.getData();
        });
    };
    $scope.getData()
})