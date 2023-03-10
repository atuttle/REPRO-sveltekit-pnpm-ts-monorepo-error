import * as _redis_client from '@redis/client';

declare function getClient(): _redis_client.RedisClientType<_redis_client.RedisModules, _redis_client.RedisFunctions, _redis_client.RedisScripts>;

export { getClient };
