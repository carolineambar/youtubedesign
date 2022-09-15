import React from 'react';
import { Container, Title, SectionLink, Image } from './NavSection.styles';

type Section = {
  id: string;
  label?: string;
};

type Link = {
  id: string;
  url: string;
  label: string;
  section: string;
  icon: string;
};

type NavSectionProps = {
  section: Section;
  links: Array<Link>;
};

const NavSection: React.FC<NavSectionProps> = ({ section, links }) => (
  <Container>
    <Title>{section.label}</Title>
    {links.map((link) => (
      <SectionLink to={link.url}>
        {link.icon && <Image src={link.icon} alt='Icon' />}
        {link.label}
      </SectionLink>
    ))}
  </Container>
);

export default NavSection;
