import { getPostBySlug, getAllPosts } from '../../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export async function getStaticProps({ params }) {
  const { content, frontmatter } = getPostBySlug(params.slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function BlogPost({ frontmatter, mdxSource }) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <MDXRemote {...mdxSource} />
    </div>
  );
}
