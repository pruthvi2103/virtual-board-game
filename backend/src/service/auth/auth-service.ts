import bcrypt from 'bcrypt';
import { UserModel } from '../../models/user/user.model';

export async function registerUser(email: string, password: string): Promise<UserModel> {
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({ email, password: hashedPassword });

    // Save the user to the database
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(email: string, password: string): Promise<UserModel | null> {
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
}