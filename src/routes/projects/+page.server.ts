//this endpoint is going to return all the paths of the blogs, in order with date

//fricking bug with vite, gonna fix this later
import { promises as fs } from 'fs';
import type { PageServerLoad } from './$types';

import { readPage } from "$lib/server/PageGeneration";
import type { PageMeta } from "$lib/server/PageGeneration";

export const load: PageServerLoad = async () => {
    const files = await fs.readdir( 'static/projects');
    const blogData: PageMeta[] = [];

    for (const file of files) {
        const fileNoExtension = file.substring(0, file.lastIndexOf('.'));
        blogData.push(await readPage(fileNoExtension, 'projects'));
    }

    //sorts from biggest to smallest based on unix date
    blogData.sort((a: { unixDate: number }, b: { unixDate: number }) => b.unixDate - a.unixDate);

    return {blogData: blogData};
};
