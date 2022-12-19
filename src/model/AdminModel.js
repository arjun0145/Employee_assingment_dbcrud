import mongoose, { Schema } from "mongoose";

let adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true }
});

export const AdminModel = mongoose.model("admin", adminSchema);
