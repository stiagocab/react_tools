import React from "react";
import styled from "styled-components";

export default function Select({id, options, name, placeholder, defaultValue, change}) {
   return (
      <SelectedContainer>
         <SelectStyled required id={id} name={name} defaultValue={defaultValue} onChange={change}>
            {placeholder && (
               <option value={placeholder.value} disabled>
                  {placeholder.name}
               </option>
            )}
            {options &&
               options.map((item) => (
                  <option value={item.value} key={`${name}${item.value}`}>
                     {item.name}
                  </option>
               ))}
         </SelectStyled>
         <img src={require("../../assets/icons/down_bread.png")} className="arrow" alt="" />
         {/* <img src={require("../assets")} className="arrow" alt="" /> */}
      </SelectedContainer>
   );
}

Select.defaultProps = {
   defaultValue: "0",
   placeholder: {value: "0", name: ""},
   options: [],
   name: "name",
   id: "id",
};

const SelectedContainer = styled.div`
   width: 100%;
   margin: 1em 0;
   position: relative;
   width: 100%;

   & .arrow {
      position: absolute;
      /* border: solid black;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg); */
      right: 0.5em;
      top: 40%;
      width: 10px;
      height: 10px;
   }
`;

const SelectStyled = styled.select`
   width: 100%;
   height: 100%;
   display: block;
   border: none;
   outline: none;
   color: ${(props) => props.theme.primary}};
   font-size: 2em;
   font-weight: 300;
   padding: 0.8em;
   background-color: white;
   outline: none;
   appearance: none;
   position: relative;
   background: ${(props) => props.theme.background};
   border-radius: 0.5em;

   option {
      font-size: 1.4em;
      font-weight: 200;
      font-family: Montserrat, Arial;
   }

   @media screen and (max-width: 1600px) {
      font-size: 0.9em;
   }
`;
