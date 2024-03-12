import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            O biurze
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Współpraca
          </SidebarLink>
          <SidebarLink to="more" onClick={toggle}>
            Dodatkowe informacje
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Oferta
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Nasz zespół
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Skontaktuj się</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
