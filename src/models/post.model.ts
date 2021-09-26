import mongoose, { Model, Schema } from "mongoose";
import { Post } from "../interfaces/post.interface";

const PostSchema: Schema<Post> = new Schema({
  title: String,
  caption: String,
  date: String,
  time: String,
  phone: String,
  Wilaya: String,
  type: String,
  quantity: Intl,
  offre: String,
});
const PostModel = mongoose.model<Post>("posts", PostSchema);
export default PostModel;
