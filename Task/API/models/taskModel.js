import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const TaskSchema = mongoose.Schema({
  _id: Number,
    tasktitle: {
    type: String,
    required: [true,"Project Title is required"],
    lowercase: true,
    trim: true,
  },
  tdescription: {
    type: String,
    required: [true,"Project Description is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to TAsk++Schema.
TaskSchema.plugin(uniqueValidator);

// compile schema to model
const TaskSchemaModel = mongoose.model('task_collection',TaskSchema);

export default TaskSchemaModel