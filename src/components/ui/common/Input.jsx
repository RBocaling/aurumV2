import { Input } from "@nextui-org/react";
import { styles } from "./styles";
const CustomInput = () => {
  return (
    <div>
      <Input label="test" className={{ styles }} />
    </div>
  );
};

// Exporting CustomInput as Input
export default CustomInput;
