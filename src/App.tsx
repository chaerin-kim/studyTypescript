import { useContext } from "react";
import PostList from "./components/PostList";
import PostProvider, { PostContext } from "./contexts/PostProvider";
import UserSelectDropdown from "./components/UserSelectDropdown";
import PostListItem from "./components/PostListItem";
import Spinner from "./components/Spinner";
import DarkMode from "./components/DarkMode";
import FontSize from "./components/FontSize";
import ThemeProvider, { ThemeContext } from "./contexts/ThemeProvider";

const App = () => {
  // const { isDarkMode, fontSize } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ isDarkMode, fontSize }) => {
          return (
            <PostProvider>
              <PostContext.Consumer>
                {({
                  isLoading,
                  posts,
                  getPostsForUserWithId,
                  deletePostWithId,
                }) => (
                  <div
                    className={`flex items-center justify-center min-h-screen ${
                      isDarkMode ? "bg-gray-100" : "bg-gray-900"
                    }`}
                  >
                    <div
                      className="w-full max-w-3xl p-4"
                      style={{ fontSize: getFontSizeStyle(fontSize) }}
                    >
                      <div className="space-y-4">
                        {/* 다크 모드 토글 */}
                        <DarkMode />
                        {/* 폰트 크기 선택 */}
                        <FontSize />
                        <UserSelectDropdown
                          handleChange={(userId: string) =>
                            getPostsForUserWithId(userId)
                          }
                        />
                        {isLoading ? (
                          <Spinner />
                        ) : (
                          <div className="space-y-4 overflow-y-auto">
                            <PostList>
                              {posts.map((post) => (
                                <PostListItem
                                  key={post.id}
                                  {...post}
                                  handleDeleteClicked={deletePostWithId}
                                />
                              ))}
                            </PostList>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </PostContext.Consumer>
            </PostProvider>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

// 폰트 크기 설정 함수
const getFontSizeStyle = (fontSize: "small" | "medium" | "large") => {
  switch (fontSize) {
    case "small":
      return "12px";
    case "medium":
      return "16px";
    case "large":
      return "20px";
    default:
      return "16px";
  }
};

export default App;