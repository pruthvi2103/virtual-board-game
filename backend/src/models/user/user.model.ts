// src/models/user.ts

import mongoose, { Schema } from 'mongoose';
import { User, UserModelStatic } from './user.types';

export interface UserModel extends User, Document { }

const userSchema = new Schema < UserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model<UserModel, UserModelStatic>('User', userSchema);

