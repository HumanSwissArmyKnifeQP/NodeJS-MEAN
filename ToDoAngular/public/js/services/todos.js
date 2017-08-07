// js/services/todos.js
angular.module( 'todoService', [] )

    // super simple service
    // each function returns a promise object 
    .factory( 'Todos', ( $http )=>( {
      get(){

        return $http.get( '/api/todos' );
            
      },
      create( todoData ){

        return $http.post( '/api/todos', todoData );
            
      },
      delete( id ){

        return $http.delete( `/api/todos/${  id }` );
            
      }
    } ) );
