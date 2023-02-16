import Trending from './Trending';
import '../styles/Home.css';
import QuickReadSection from './QuickReadSection';
import Blogs from './Blogs';
import { useLoaderData } from 'react-router-dom';

function Home() {
  const posts = useLoaderData();

  return (
    <div className='page-layout'>
      {posts && <Trending posts={posts} />}
      {posts && <QuickReadSection posts={posts} />}
      {posts && <Blogs posts={posts}/>}
    </div>
  )
}
export async function loader() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!res.ok) {
      throw new Error(`retreivng users resolved in a error code 
                ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
}

export default Home