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
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            exact="true"
            offset={-80}
          >
            O biurze
          </SidebarLink>
          <SidebarLink
            to="discover"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            exact="true"
            offset={-80}
          >
            Współpraca
          </SidebarLink>
          <SidebarLink
            to="more"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            exact="true"
            offset={-80}
          >
            Dodatkowe informacje
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            exact="true"
            offset={-80}
          >
            Oferta
          </SidebarLink>
          <SidebarLink
            to="team"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            exact="true"
            offset={-80}
          >
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
