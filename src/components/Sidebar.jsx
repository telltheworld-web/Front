import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // ✅ 추가

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-187px")}; /* ✅ 사이드바 너비 조정 */
  width: 187px; /* ✅ 원하는 너비 적용 */
  height: 640px; /* ✅ 원하는 높이 적용 */
  background: var(--GrayScale-Gray000, #F9FCFC);
  border-right: 2px solid var(--GrayScale-Gray100, #EDF2F2);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 9999;

  @media (max-width: 768px) {
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-100vw")}; /* ✅ 모바일에서 전체 화면 */
    width: 187px; /* ✅ 원하는 너비 적용 */
    height: 640px;
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuItem = styled.li`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const menuItems = [
  { name: "홈", icon: "/images/sidebar_book.svg", route:"/" },
  { name: "데이터 윤리 퀴즈", icon: "/images/sidebar_book.svg", route:"/start" },
  { name: "팀 소개", icon: "/images/sidebar_device-desktop-search.svg", route:"/team" },
  { name: "기사 보기", icon: "/images/sidebar_world-latitude.svg", route: "/articles" }, /* ✅ 요청한 이미지 반영 */
  { name: "한국", icon: "/images/sidebar_world-cog.svg" } /* ✅ 요청한 이미지 반영 */
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate(); // ✅ 라우터 내비게이터

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // ✅ 바깥 영역 클릭 시 닫힘 적용
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <img src="./images/sidebar_menu-2.svg" alt="메뉴 열기" width="36" height="36" /> {/* ✅ 경로 수정 */}
      </MenuButton>
      <SidebarContainer $isOpen={isOpen} ref={sidebarRef}>
        <MenuList>
          {menuItems.map(({ name, icon, route }) => (
            <MenuItem key={name} onClick={() => navigate(route)}>
              <img src={icon} alt={name} width="19" height="18" /> {name}
            </MenuItem>
          ))}
        </MenuList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;