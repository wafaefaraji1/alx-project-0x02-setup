import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { CardProps } from '@/interfaces';

const Home = () => {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Add Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {isModalOpen && (
          <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
        )}
      </main>
    </div>
  );
};

export default Home;