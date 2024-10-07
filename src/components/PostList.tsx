
const PostList = ({ children }) => {
  return (
    <>
      <div className="pb-5 list-group">
        {children}
      </div>
    </>
  );
};

export default PostList;