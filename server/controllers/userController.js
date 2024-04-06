import User from '../models/UserModel.js';

export const createUser = async (req, res) => {
  try {
    console.log('BODY', req.body);

    const user = await User.create({
      ...req.body,
    });

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
