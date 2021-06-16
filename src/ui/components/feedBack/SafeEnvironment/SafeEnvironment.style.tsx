import { experimentalStyled as styled } from "@material-ui/core/styles";
// STYLED AINDA NÃO LANÇADO OFICIALMENTE PELO MATERIAL-UI, QUANDO LANÇADO RETIRAR "experimentalStyled"

export const SafeEnvironmentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
`;
