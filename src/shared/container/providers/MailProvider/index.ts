// import EtherealMailProvider from '@shared/container/providers/MailProvider/implementations/EtherealMailProvider';
// import SESMailProvider from '@shared/container/providers/MailProvider/implementations/SESMailProvider';

// export default {
//   etheral: EtherealMailProvider,
//   ses: SESMailProvider,
// };

import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import EtherealMailProvider from '@shared/container/providers/MailProvider/implementations/EtherealMailProvider';
import SESMailProvider from '@shared/container/providers/MailProvider/implementations/SESMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};
container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
