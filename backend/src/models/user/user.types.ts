import { Model } from "mongoose";

export interface User {
    email: string;
    password: string;
}
export interface UserModel extends User, Document { }

export type UserModelStatic = Model<UserModel>;