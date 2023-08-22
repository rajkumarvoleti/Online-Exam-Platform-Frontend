import { IAutoCompleteOption, IInputProps } from "@/interfaces/inputInterfaces";
import { useFormikContext } from "formik";
import Input from "./Input";
import PhoneInput from "./PhoneInput";
import CheckboxInput from "./CheckboxInput";
import AutoCompleteInput from "./AutoCompleteInput";

export function FormikInput(props: IInputProps) {
  const formikContext = useFormikContext();
  const fieldMeta = formikContext.getFieldMeta(`${props.name}`);

  if(props.type === "phoneNumber"){
    return (
      <PhoneInput
        {...props}
        value={`${fieldMeta.value}`}
        onChange={props.onChange ?? formikContext.handleChange}
        onBlur={props.onBlur ?? formikContext.handleBlur}
        label={props.label}
        placeholder={props.placeholder}
        error={
          fieldMeta && fieldMeta.error && fieldMeta.touched
            ? fieldMeta.error
            : undefined
        }    
      />
    )
  }

  if(props.type === "autocomplete"){
    const value = fieldMeta.value as IAutoCompleteOption;
    return (
      <AutoCompleteInput
        {...props}
        autoCompleteOption={props.autoCompleteOption}
        onChange={props.onChange ?? formikContext.handleChange}
        onBlur={props.onBlur ?? formikContext.handleBlur}
        label={props.label}
        placeholder={props.placeholder}
        error={
          fieldMeta && fieldMeta.error && fieldMeta.touched
            ? fieldMeta.error
            : undefined
        }
        
      />
    )
  }

  if(props.type === "checkbox"){
    return (
      <CheckboxInput
        {...props}
        value={`${fieldMeta.value}`}
        onChange={props.onChange ?? formikContext.handleChange}
        onBlur={props.onBlur ?? formikContext.handleBlur}
        label={props.label}
        placeholder={props.placeholder}
        error={
          fieldMeta && fieldMeta.error && fieldMeta.touched
            ? fieldMeta.error
            : undefined
        }    
      />
    )
  }

  return (
    <Input
      {...props}
      value={`${fieldMeta.value}`}
      onChange={props.onChange ?? formikContext.handleChange}
      onBlur={props.onBlur ?? formikContext.handleBlur}
      label={props.label}
      placeholder={props.placeholder}
      error={
        fieldMeta && fieldMeta.error && fieldMeta.touched
          ? fieldMeta.error
          : undefined
      }
      InputImage={props.InputImage}
    />
  );
}
