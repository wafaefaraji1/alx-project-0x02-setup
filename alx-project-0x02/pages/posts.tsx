import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div>
      <Header />
      <main className="p-4 container mx-auto">
        <h1 className="text-2xl font-bold mb-4">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, index) => (
            <PostCard 
              key={index} 
              title={post.title} 
              content={post.content || post.body} // API uses 'body', interface uses 'content'
              userId={post.userId} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts: posts.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId
      })),
    },
  };
}

export default Posts;