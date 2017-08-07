/* eslint-disable no-console */
angular.module( 'todoController', [] )

  .controller( 'mainController', ( $scope, $http )=>{

    $scope.formData = {};

    $http.get( '/api/todos' )
    .success( ( results )=>{

      $scope.todos = results;
    
    } )
    .error( ( err )=>{

      console.log( `Error: ${  err }` );
    
    } );

    $scope.createTodo = ()=>{

      $http.post( '/api/todos', $scope.formData )
      .success( ( results )=>{

        $scope.formData = {};
        $scope.todos = results;
      
      } )
      .error( ( err )=>{

        console.log( `Error: ${  err }` );
      
      } );
      
    };

    $scope.deleteTodo = ( id )=>{

      $http.delete( `/api/todos/${  id }` )
      .success( ( results )=>{

        $scope.todos = results;
      
      } )
      .error( ( err )=>{

        console.log( `Error: ${  err }` );
      
      } );
      
    };

  } );
