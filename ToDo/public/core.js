/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const bogoTodo = angular.module( 'bogoTodo', [] );

// eslint-disable-next-line no-unused-vars
function mainController( $scope, $http ){

  $scope.formData = {};

  $http.get( '/api/todos' )
    .success( ( results )=>{

      $scope.todos = results;
      console.log( results );

    } )
    .error( ( err )=>{

      console.log( `Error: ${  err }` );

    } );

  $scope.createTodo = ()=>{

    $http.post( '/api/todos', $scope.formData )
      .success( ( results )=>{

        $scope.formData = {};
        $scope.todos = results;
        console.log( results );

      } )
      .error( ( err )=>{

        console.log( `Error: ${  err }` );

      } );

  };

  $scope.deleteTodo = ( id )=>{

    $http.delete( `/api/todos/${  id }` )
      .success( ( results )=>{

        $scope.todos = results;
        console.log( results );

      } )
      .error( ( results )=>{

        console.log( `Error: ${  results }` );

      } );

  };

}
