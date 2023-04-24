import { useState } from 'react';
import { Form, Input, Icon } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" />
      <button type="submit">
        <Icon />
        Search
      </button>
    </Form>
  );
};

export default SearchBox;
