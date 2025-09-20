import React, { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const FixedNavigation = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isMainPage, setIsMainPage] = useState(false);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const checkMainPage = () => {
      // 메인 페이지인지 확인 (FirstLook에서 온 경우 또는 AboutUs에서 돌아온 경우 포함)
      const isOnMainPage =
        location.pathname === "/" &&
        (searchParams.get("main") === "true" ||
          window.location.search.includes("main=true") ||
          // App 컴포넌트에서 설정한 전역 상태 확인
          document.body.hasAttribute("data-main-page"));

      setIsMainPage(isOnMainPage);
    };

    // 초기 확인
    checkMainPage();

    // MutationObserver로 data-main-page 속성 변화 감지
    const observer = new MutationObserver(checkMainPage);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-main-page"],
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      // App 컨테이너에서 스크롤 위치 가져오기
      const appContainer = document.querySelector(".App");

      if (!appContainer) {
        return;
      }

      const scrollTop = appContainer.scrollTop;

      // 섹션 높이 기준으로 현재 섹션 계산
      const sectionHeight = window.innerHeight;
      const section = Math.floor(scrollTop / sectionHeight) + 1;
      setCurrentSection(section);
    };

    // App 컨테이너에서 스크롤 이벤트 등록
    const appContainer = document.querySelector(".App");

    if (appContainer) {
      appContainer.addEventListener("scroll", handleScroll, { passive: true });

      // 초기값 설정
      setTimeout(() => {
        handleScroll();
      }, 100);
    }

    return () => {
      if (appContainer) {
        appContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMainPage]); // isMainPage가 변경될 때마다 스크롤 리스너 재설정

  // 네비게이션 표시 조건
  const isVisible =
    location.pathname === "/about" || // AboutUs 페이지에서는 항상 표시
    (location.pathname === "/" && isMainPage && currentSection >= 2); // 메인 페이지에서는 섹션 2부터 표시

  return (
    <div
      className="fixed top-6 left-1/2 transition-all duration-500"
      style={{
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transform: `translateX(-50%) translateY(${isVisible ? 0 : -20}px)`,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="bg-black/80 backdrop-blur-lg border border-white/30 rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link to="/?main=true" className="flex items-center gap-3">
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <img
              alt="NOOS Logo"
              className="block max-w-none h-full w-full object-contain"
              src={`${process.env.PUBLIC_URL}/icon.png`}
            />
          </div>
          <span className="font-cardinal-fruit text-sm text-white">
            Project : NOOS
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          <button className="font-cardinal-fruit text-sm text-white/80 hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10">
            Functions
          </button>
          <Link
            to="/about"
            className="font-cardinal-fruit text-sm text-white/80 hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
          >
            About us
          </Link>
          <button className="font-cardinal-fruit text-sm text-white/80 hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedNavigation;
