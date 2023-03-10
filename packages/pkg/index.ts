import { createClient } from '@redis/client';

const client = createClient({
	socket: {
		hostname: 'localhost',
		port: 6379,
	},
});

export function getClient() {
	return client;
}
