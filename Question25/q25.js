let app = angular.module("myapp",[]);

app.controller("myCtrl",($scope,$http)=>{
    let updateId = "";
    $scope.getData = ()=>{
        $http.get("/api/getTaskData").then((response)=>{
            $scope.tasks = response.data;
            console.log(response.data);
        });
    };

    $scope.addTask = ()=>{
        let obj = {
            task:$scope.task,
            status:$scope.status
        };
        console.log(obj);
        console.log("Add function");
        $http.post("/api/addTask",obj).then((response)=>{
            $scope.getData();
            $scope.task = "";
            $scope.status = false;
        });
    };

    $scope.updateTask = (obj)=>{
        updateId = obj._id;
        $scope.task = obj.task;
        $scope.status = obj.status;
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
            $scope.task = "";
            $scope.status = false;
            document.getElementById("formbutton1").style.display = "block";
            document.getElementById("formbutton2").style.display = "none";
        });
    }

    $scope.deleteTask = (obj)=>{
        $http.delete("/api/deleteTask/"+obj._id).then((response)=>{
            $scope.getData();
        });
    };
    $scope.status = false;
    $scope.getData();
});