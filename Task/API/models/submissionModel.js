import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubmissionSchema = mongoose.Schema({
  _id: Number,
    submissiontitle: {
    type: String,
    required: [true,"Submission Title is required"],
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: [true,"Project Description is required"],
    lowercase: true,
    trim: true
  },
  gname: {
    type: String,
    required: [true,"Group name is required"],
    trim: true
  },
  filename: {
    type: String,
    required: [true,"File name is required"],
    trim: true
  },
  info: String
});

// Apply the uniqueValidator plugin to TAsk++Schema.
SubmissionSchema.plugin(uniqueValidator);

// compile schema to model
const SubmissionSchemaModel = mongoose.model('submission_collection',SubmissionSchema);

export default SubmissionSchemaModel