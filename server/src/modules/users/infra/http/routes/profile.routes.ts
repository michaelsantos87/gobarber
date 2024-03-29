import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileRouterController = new ProfileController();

profileRouter.use(ensureAuthenticaded);

profileRouter.get('/', profileRouterController.show);
profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  profileRouterController.update,
);

export default profileRouter;
