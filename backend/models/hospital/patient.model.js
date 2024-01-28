import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    diagnoseWith: {
      type: String,
      require: true,
    },
    bloodGroup: {
      type: String,
      require: true,
    },
    admittedIn:{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Hospital'
    }
  },
  { timestamps }
);

export const Patient = mongoose.model("Patient", patientSchema);
