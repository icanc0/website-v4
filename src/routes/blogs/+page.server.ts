//this endpoint is going to return all the paths of the blogs, in order with date

//fricking bug with vite, gonna fix this later
import { promises as fs } from 'fs';
import { readBlog } from '$lib/readBlog';
import type { BlogMeta } from '$lib/readBlog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const files = await fs.readdir('src/blogs');
    const blogData: BlogMeta[] = [];

    for (const file of files) {
        const fileNoExtension = file.substring(0, file.lastIndexOf('.'));
        blogData.push(await readBlog(fileNoExtension));
    }

    //sorts from biggest to smallest based on unix date
    blogData.sort((a: { unixDate: number }, b: { unixDate: number }) => b.unixDate - a.unixDate);

    return blogData;
};
