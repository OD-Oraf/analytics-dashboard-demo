import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: 'https://subtle-jackass-19794.upstash.io',
    token: process.env.REDIS_KEY!,
})

// await redis.set('foo', 'bar');
// const data = await redis.get('foo');