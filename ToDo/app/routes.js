const Todo = require( './models/todo' );

function router( app ){

  app.get( '/api/todos', ( req, res )=>{

    Todo.find( ( err, todos )=>{

      if ( err ){

        res.send( err );

      }

      return res.json( todos );

    } );

  } );

  app.post( '/api/todos', ( req, res )=>{

    Todo.create( {
      text: req.body.text,
      done: false
    }, ( err )=>{

      if ( err ){

        res.send( err );

      }

      Todo.find( ( err, todos )=>{

        if ( err ){

          res.send( err );
        
        }
        
        return res.json( todos );
            
      } );
        
    } );

  } );

  app.delete( '/api/todos/:todo_id', ( req, res )=>{

    Todo.remove( {
      _id: req.params.todo_id
    }, ( err )=>{

      if ( err ){

        res.send( err );

      }

      Todo.find( ( err, todos )=>{

        if ( err ){

          res.send( err );

        }

        return res.json( todos );
            
      } );
        
    } );
    
  } );

}

module.exports = router;
