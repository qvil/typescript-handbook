import styled from "styled-components";

export const RootConatiner = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

export const List = styled.li`
  cursor: pointer;
`;
