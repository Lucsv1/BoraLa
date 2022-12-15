
import {
  PlaceForm,
  PlaceLabel,
  PlaceInput,
} from "../../../../style/components/StyledPlaceText";
import { useState } from "react";

export const PlaceText = (props) => {
  

  return (
    <PlaceForm >
      <PlaceLabel htmlFor="">{props.label}</PlaceLabel>
      <PlaceInput
        name={props.name}
        required={props.obrigatorio}
        type={props.type}
        placeholder={props.placeholder}
      />
    </PlaceForm>
  );
};
