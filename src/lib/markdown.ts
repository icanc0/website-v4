import {unified} from 'unified'
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import remark2rehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeFigure from 'rehype-figure';

export const processMarkdown = async (rawJSON: any) => {
    const parser = unified().use(remarkParse).use(remarkGfm);
    const tree = parser.parse(rawJSON.body);
    const processor = unified()
        .use(remark2rehype)
        .use(rehypeFigure)
        .use(rehypeStringify)
        .use(rehypeHighlight);
    rawJSON.body = await processor.run(tree);
    rawJSON.body = processor.stringify(rawJSON.body);

    return rawJSON;
};
