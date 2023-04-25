import PropTypes from 'prop-types';
import { Form, Input, Icon, Button } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" placeholder="Search movies" />
      <Button type="submit">
        <Icon />
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
