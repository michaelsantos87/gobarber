import IParceMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParceMailTemplateDTO): Promise<string>;
}
