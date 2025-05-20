import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-187px")};
  width: 187px;
  height: 100vh; /* 화면 전체 높이 */
  background: var(--GrayScale-Gray000, #F9FCFC);
  border-right: 2px solid var(--GrayScale-Gray100, #EDF2F2);
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 9999;

  @media (max-width: 768px) {
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-100vw")};
    width: 187px;
    height: 100vh;
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
  z-index: 10000;
  display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`;


const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 60px 0 0 0; /* 위쪽 공간 띄우기 */
  padding: 0;
  gap: 30px; /* 메뉴 항목 사이 간격 넉넉히 */
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
  { name: "데이터 윤리 퀴즈", icon: "/images/sidebar_device-desktop-search.svg", route: "/" },
  { name: "팀 소개", icon: "/images/sidebar_world-latitude.svg", route: "/team" },
  { name: "기사 보기", icon: "/images/sidebar_book.svg", route: "/articles" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
          <img src="/images/sidebar_menu-2.svg" width="36" height="36" />
      </MenuButton>
      <SidebarContainer $isOpen={isOpen} ref={sidebarRef}>
        <MenuList>
          {menuItems.map(({ name, icon, route }) => (
            <MenuItem key={name} onClick={() => route && navigate(route)}>
              <img src={icon} alt={name} width="19" height="18" />
              {name}
            </MenuItem>
          ))}
        </MenuList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
