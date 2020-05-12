import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import UsersController from '@modules/users/infra/http/controllers/UsersController';
import UserAvatarController from '@modules/users/infra/http/controllers/UserAvatarController';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const users = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

users.post('/', usersController.create);

users.patch(
  '/avatar',
  ensureAuthenticaded,
  upload.single('avatar'),
  userAvatarController.update,
);

export default users;
