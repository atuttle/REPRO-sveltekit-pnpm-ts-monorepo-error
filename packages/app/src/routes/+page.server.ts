import type { PageServerLoad } from './$types';

import { getClient } from '@example/pkg';


export const load = (async ({ params }) => {
	const redis = getClient();
	return {
		data: await redis.get('some-key') ?? 'default-value'
	};
}) satisfies PageServerLoad;
