import { BlogType } from "@/lib/blog";
import Blogcomponent from "../components/Blogcomponent";
import Link from "next/link"; 

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData(): Promise<BlogType[]> {
    const res = await fetch(BASE_URL);
    const dataRes = await res.json();
    return dataRes;
}

export default async function BlogPage() {
    const posts = await fetchData();

    return (
        <div className="container gap-10 m-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((p) => (
                <Link href={`/blog/${p.id}`} key={p.id} className="hover:scale-[1.02] transition-transform duration-200">
                    <Blogcomponent
                        id={p.id}
                        userId={p.userId}
                        title={p.title}
                        body={p.body}
                    />
                </Link>
            ))}
        </div>
    );
}
