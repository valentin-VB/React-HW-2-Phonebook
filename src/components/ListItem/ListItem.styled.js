import styled from 'styled-components';

export const ListEl = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  max-width: 350px;
  margin-bottom: 15px;
  padding: 10px;
  border: ${p => p.theme.borders.normal} gray;
  background-color: aliceblue;
  border-radius: ${p => p.theme.radii.lg};
`;
