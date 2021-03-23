import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 15px 0px 0px 10px;
  display: flex;
  height: 90vh;
  list-style: none;
  background-color: #fff;
  width: 50vw;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  top: 60px;
  right: 0px;
  background-color: grey;
  opacity: 1;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  border-bottom: 1px solid #ccc;
  font-weight: 500;
  font-size: 20px;
  display: flex;

  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: inherit;
`;

// const Marginer = styled.div`
//   height: 2em;
// `;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
         <LinksWrapper>
         <LinkItem>
           <Link href="#services" onClick={()=>{setOpen(false)}}>Services</Link>
         </LinkItem>
         <LinkItem>
           <Link href="#about">About</Link>
         </LinkItem>
         <LinkItem>
           <Link href="#testimonials">Testimonials</Link>
         </LinkItem>
         <LinkItem>
           <Link href="#carousel">Recents</Link>
         </LinkItem>
         <LinkItem>
           <Link href="#team">Team</Link>
         </LinkItem>
         <LinkItem>
           <Link href="#contact">Contact</Link>
         </LinkItem>
         <Accessibility/>
       </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
