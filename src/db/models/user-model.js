import { model } from "mongoose";
import { UserSchema } from "../schemas/user-schema.js";

const User = model("users", UserSchema);

export class UserModel {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findUserById(userId) {
    const user = await User.findOne({ _id: userId });
    if(await User.exists({_id : userId}) == null){
      throw new Error(`DB에 ${userId}는 존재하지 않습니다.`)
    }

    return user;
  }

  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  async findAll() {
    const users = await User.find({});
    return users;
  }

  async update({ userId, update }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  async deleteUser(userId){
    const targetUser = await User.findOne({_id: userId})
    
    if( await User.exists({_id: userId}) == null){
      throw new Error(`DB에 ${targetUser.userId}는 존재하지 않습니다.`)  
    }
    await User.deleteOne(targetUser)
  }

//   async dangerousDeleteAll() {
    
//     await User.deleteMany({});
// }
}

const userModel = new UserModel();

export { userModel };
