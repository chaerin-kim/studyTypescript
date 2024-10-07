import React, { useState, createContext, useContext, useEffect } from 'react';

// 테마 모드 및 폰트 크기 설정
export type ThemeContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
};

// 초기 값 설정
export const ThemeContext = createContext<ThemeContextValue>({
  isDarkMode: false,
  toggleDarkMode:() => {},
  fontSize: 'medium',
  setFontSize: (size: 'small' | 'medium' | 'large') => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // 상태가 변경될 때마다 로그 출력
  useEffect(() => {
    console.log('Dark mode status changed:', isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode, 
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
