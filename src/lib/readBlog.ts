import { promises as fs } from 'fs';
import type { FrontMatterResult } from 'front-matter';
import fm from 'front-matter';
import dayjs from 'dayjs';

export interface BlogMeta {
    title: string;
    date: string;
    desc: string;
    unixDate: number;
    body: string;
    path: string;
    thumbnail?: string;
}

export const readBlog = async (fileName: string): Promise<BlogMeta> => {
    const blog = await fs.readFile(`src/blog/${fileName}.md`, 'utf-8');

    const metadataFrontMatter: FrontMatterResult<any> = fm(blog);

    console.log(metadataFrontMatter)

    return {
        title: metadataFrontMatter?.attributes?.title,
        desc: metadataFrontMatter?.attributes?.description?.replace('\n', '<br>'),
        unixDate: dayjs(metadataFrontMatter.attributes.date).unix(),
        date: dayjs(metadataFrontMatter.attributes.date).format('MM-DD-YYYY'),
        body: metadataFrontMatter?.body,
        path: fileName,
        thumbnail: metadataFrontMatter.attributes.thumbnail
    };
};
