import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-187px")};
  width: 187px;
  height: 100vh;
  background: #f9fcfc;
  border-right: 2px solid #edf2f2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 9999;
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
  margin-top: 60px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MenuItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;

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
  const location = useLocation();

  // 페이지가 바뀔 때마다 사이드바 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // 사이드바 밖 클릭 시 닫기
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
      <MenuButton onClick={() => setIsOpen(true)} $isOpen={isOpen}>
        <img src="/images/sidebar_menu-2.svg" width="36" height="36" alt="menu" />
      </MenuButton>
      <SidebarContainer $isOpen={isOpen} ref={sidebarRef}>
        <MenuList>
          {menuItems.map(({ name, icon, route }) => (
            <MenuItem
              key={name}
              onClick={() => {
                if (route) {
                  navigate(route);
                  setIsOpen(false);
                }
              }}
            >
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
