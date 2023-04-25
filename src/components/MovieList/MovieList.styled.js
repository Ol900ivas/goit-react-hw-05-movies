import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 16px;
  margin-top: 16px;
`;

export const CardWrapper = styled.div`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  padding: 8px;
  color: #000000;
`;

// From imageFinder=====================
// export const Img = styled.img`
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover {
//     transform: scale(1.03);
//     cursor: zoom-in;
//   }
// `;

// margin-top: 8px;
//   margin-bottom: 0;
