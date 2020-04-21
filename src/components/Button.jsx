import styled from "styled-components"

// its an styled Component definded as ButtonContainer

// text transform capitalize
// fontsize 1.4rem
// background trasparent 
// border0.009 lightblue
// your Color 
// border radius to 0.rem 
// curson pointer 
// margin .2.5.2 0 rem 
// transition all .5 seg ease-in-out 
// &:hover change color and background, do not forget the brackets 
// &:focus outline none

const ButtonCont = styled.button`
  text-transform:capitalize;
  font-size:1.4rem;
  background: transparent;
  border:solid 1px var(--falcon);
  border-radius:.4rem;
  color:(--falcon);
  cursor:pointer;
  margin:0.2 0.5 0.2 0;
  transition: all 0.5 sec ease-in-out;
  &:hover{
    color:var(--brown);
    background-color:var(--pastelBlue);
  }
  &:focus{
    outline:none;
  }

`
export default ButtonCont