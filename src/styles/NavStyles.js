import styled from 'styled-components';


export const NavContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content:space-between;

`;

export const NavMenu = styled.div`
  padding:15px 0;
  ul{
    li{
      display:inline-block;
      a{
        color:#fff;
        font-size:20px;
        padding: 10px;
        margin:0 5px;
      }
    }
  }
`;

export const Logo = styled.div`
  a{
    color: #08d665;
    font-size:40px;
    font-weight: 700;
    span{
      color: #fff;
    }
  }
`


