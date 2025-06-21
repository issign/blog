import { createContext, useEffect, useState } from "react";

// React Context API를 이용해 현재 경로 (currentPath)를 저장하고 경로 변경 함수 (navigate)를 제공
// 전역에서 공유할 라우팅 정보 (경로 상태)를 담을 Context 객체를 만든다.
// 이 Context로 하위 컴포넌트들이 현재 URL을 읽거나 navigate를 이용가능
const NavigationContext = createContext();

function NavigationProvider({ children }) {
  // 현재 경로를 State로 저장
  // 초기값 : 현재 브라우저의 주소창 경로
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // 뒤로 가기 대응
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    // popstate event : 브라우저의 뒤로가기 / 앞으로가기 동작이 일어났을 때 발생
    // 브라우저의 경로가 바뀌면 currentPath를 다시 설정
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  // 주소창의 URL을 바꾸지만 page load는 하지 않음
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
