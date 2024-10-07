import React, { useState, useEffect } from 'react';
import {
  deletePostFromDatabaseWithId,
  getPostsFromDatabase,
  getPostsFromDatabaseForUserWithId,
} from '../api';

export const PostContext = React.createContext<PostContextValue>({
  isLoading: false,
  posts: [],
  isPostCheckedList: [],
  getPostsForUserWithId: (userId: string) => {},
  deletePostWithId: (postId: number) => {},
  handleCheckboxChange: (postId: number) => {},
});

export type PostContextValue = {
  isLoading: boolean;
  posts: {
    id: number;
    body: string;
    title: string;
    userId: number;
  }[];
  isPostCheckedList: boolean[];
  getPostsForUserWithId: (userId: string) => void;
  deletePostWithId: (postId: number) => void;
  handleCheckboxChange: (postID: number) => void;
};

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isPostCheckedList, setIsPostCheckedList] = useState<boolean[]>([]);

  async function getAllPosts() {
    setIsLoading(true);
    const postsResponse = await getPostsFromDatabase();
    setPosts(postsResponse);
    setIsLoading(false);
  }

  async function getPostsForUserWithId(userId: string) {
    setIsLoading(true);
    const postsResponse = await getPostsFromDatabaseForUserWithId(userId);
    setPosts(postsResponse);
    setIsLoading(false);
  }

  async function deletePostWithId(postId: number) {
    setIsLoading(true);
    await deletePostFromDatabaseWithId(postId);
    setIsLoading(false);
  }

  //체크박스 상태 관리
  const handleCheckboxChange = async (postID: number) => {
    setIsPostCheckedList(
      //토글 기능
      isPostCheckedList.map((checked, index) =>
        postID === index ? !checked : checked
      )
    );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        isLoading,
        posts,
        isPostCheckedList,
        getPostsForUserWithId,
        deletePostWithId,
        handleCheckboxChange,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
