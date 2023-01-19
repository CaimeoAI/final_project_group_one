import mongoose, { Schema } from "mongoose";

const classSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    field: { type: String, required: true },
    
    
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);

export default Class;
