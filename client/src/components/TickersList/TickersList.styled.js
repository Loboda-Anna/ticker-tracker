import styled from "@emotion/styled";

export const TickersTable = styled.table`
display: table;
width: 70%;
margin: 30px auto;
background-color: white;
border-collapse: collapse;
box-shadow: 10px 10px 15px -5px rgba(120,111,111,0.66); 

thead {
  background: linear-gradient(90deg, rgba(121,121,238,1) 0%, rgba(0,212,255,1) 100%);
  border-color: rgba(0, 0, 18, 0.39);
  text-transform:uppercase;
  color: white;
  
}
th{
    padding: 10px;
   

}
tbody{
    width:100%; 
    
}
tr{
    :nth-of-type(2n) {
  background-color: RGBA(0,0,0,0.08);
}
td{
    padding: 8px 0 ;
    color: rgba(0, 0, 18, 0.77);
    text-align:center;
    font-size: 16px;
}
`;
