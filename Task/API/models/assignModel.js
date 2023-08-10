import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProjectSchema = mongoose.Schema({
  _id: Number,
  ptitle: {
    type: String,
    required: [true,"Project Title is required"],
    lowercase: true,
    trim: true,
  },
  group: {
    type: Number,
    required: [true,"Group number is required"],
    unique: true,
  },
  pdescription: {
    type: String,
    required: [true,"Project Description is required"],
    trim: true
  },
  startDate: {
    type: String,
    required: [true,"Starting Date is required"],
    trim: true
  },
  endDate: {
    type: String,
    required: [true,"Ending Date is required"],
    trim: true
  },
  info: String
});

// Apply the uniqueValidator plugin to Project++Schema.
ProjectSchema.plugin(uniqueValidator);

// compile schema to model
const ProjectSchemaModel = mongoose.model('assign_collection',ProjectSchema);

export default ProjectSchemaModel