import { Router } from 'express';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileRouterController = new ProfileController();

profileRouter.use(ensureAuthenticaded);

profileRouter.get('/', profileRouterController.show);
profileRouter.put('/', profileRouterController.update);

export default profileRouter;
