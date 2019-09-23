import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, SearchBar } from './styles';

export default function Home() {
  return (
    <Container>
      <p>Just search and have fun! </p>
      <SearchBar>
        <input placeholder="Search a Github Profile ;)" />
        <button type="submit">
          <MdSearch size="24px" />
        </button>
      </SearchBar>
    </Container>
  );
}
