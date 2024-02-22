//this endpoint is going to return all data for a specific blog,
//based on the slug

import { readBlog } from '$lib/readBlog';
import { processMarkdown } from '$lib/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;
    console.log(slug);
    let rawJSON = await readBlog(slug);
    rawJSON = await processMarkdown(rawJSON);

    return { rawJSON };
};
