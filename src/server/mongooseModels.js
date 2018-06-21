import mongoose from 'mongoose'

var todoSchema = mongoose.Schema({
    text: String
  })
var Todo = mongoose.model( 'Todo', todoSchema )

var mongooseModels = {
    Todo: Todo
}

export default mongooseModels