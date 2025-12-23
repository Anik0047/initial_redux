import React from "react";
import { useGetPostByIdQuery, useGetPostsQuery } from "../redux/features/api/basaApi";
import PostCard from "../components/tasks/PostCard";

const Feed = () => {
    //   const { data: posts, isLoading, isError, error } = useGetPostsQuery();
      const { data: post, isLoading, isError, error } = useGetPostByIdQuery(1);
    
  return (
    <div>
      <h1>Feed</h1>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => ( */}
          <PostCard key={post?.id} post={post} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Feed;
