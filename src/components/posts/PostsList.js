import PostsListItem from "./PostsListItem";

function PostsList({ posts }) {
  const renderedPostItems = posts.map((post) => {
    return <PostsListItem post={post} key={post.id}></PostsListItem>;
  });

  return <div>{renderedPostItems}</div>;
}

export default PostsList;
