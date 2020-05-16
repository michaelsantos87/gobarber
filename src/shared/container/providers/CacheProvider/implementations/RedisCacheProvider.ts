import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';
import ICacheProvider from 'shared/container/providers/CacheProvider/models/ICacheProvider';
import { parse } from 'date-fns';

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    this.client.set(key, JSON.stringify(value));
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }
    const parseData = JSON.parse(data) as T;

    return parseData;
  }

  public async invalidate(key: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
