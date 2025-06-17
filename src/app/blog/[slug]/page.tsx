import Blogcomponent from "@/app/components/Blogcomponent";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData(params: number) {
    const res = await fetch(`${BASE_URL}/${params}`);
    const dataRes = await res.json();
    return dataRes;
}

export default async function Page({
    params,
}: {
    params: { slug: number };
}) {
    const post = await fetchData(params.slug);

    return (
        <Blogcomponent
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
        />
    );
}
