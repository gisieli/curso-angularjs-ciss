myApp.controller('FormCtrl', function($scope){

	$scope.indexTarefa = 0;
	$scope.clicouEditar = false;

	$scope.pessoa = {
		name: "Gisiéli", 
		lastname: "Oliveira",
		age: 22,
		phonenumber: 4699732713,
		email:'gisielioliveira@ciss.com.br'
	};

	$scope.list = [
	{
		nomeTarefa: "Tarefa teste",
		dataTarefa: '2016-03-15T05:00:58.149Z'
	},
	{
		nomeTarefa: "Limpar a casa",
		dataTarefa: '2016-03-15T05:00:58.149Z'
	},
	{
		nomeTarefa: "Lavar a louça",
		dataTarefa: '2016-03-15T05:00:58.149Z'
	},
	{
		nomeTarefa: "Lavar a casa",
		dataTarefa: '2016-03-15T05:00:58.149Z'
	},
	{
		nomeTarefa: "Trabalhar - teste",
		dataTarefa: '2016-03-15T05:00:58.149Z'
	}

	];

	$scope.cadastraTarefa = function( data ) {
		if (!!data) {
			$scope.list.push({
				nomeTarefa: data,
				dataTarefa: '2016-03-15T05:00:58.149Z'
			});

			$scope.tarefa = undefined;
		}
	};

	$scope.editaTarefa = function ( dataIndex ){
		$scope.clicouEditar = true;
		$scope.indexTarefa = dataIndex;
		$scope.renomear = $scope.list[dataIndex].nomeTarefa;
	};

	$scope.renomearTarefa = function ( novoNome ){
		var editObj= {};
		editObj = {
			'nomeTarefa' : novoNome,
			'dataTarefa' : $scope.list[$scope.indexTarefa].dataTarefa


		}

		$scope.list[$scope.indexTarefa] = editObj;
		//$scope.indexTarefa = undefined;
		//$scope.renomear =  undefined;
		$scope.clicouEditar = false;
	}

	$scope.removeTarefa = function ( remove ){
		 $scope.list.splice(remove, 1);

	}

	$scope.cancelarEdicao = function ( cancelar ){
		$scope.clicouEditar = false;
	}
});