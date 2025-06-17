import { BlogType } from "@/lib/blog";

export default function Blogcomponent(
    {
        id,
        userId,
        title,
        body
    }: BlogType
) {
    return (
        <div className="bg-gray-100 rounded-lg border shadow-md">
            <h1>User id : {userId} </h1>
            <hr />
            <h2>Blog id : {id} </h2>
            <hr />
            <h3>Blog title : {title} </h3>
            <hr />
            <p>Blog body : {body} </p>
            <hr />
        </div>

    )

}