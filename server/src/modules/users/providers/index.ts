import { container } from 'tsyringe';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptHasgProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHasgProvider);
