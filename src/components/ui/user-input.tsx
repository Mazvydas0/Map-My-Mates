import { Input } from "./input";
import { Label } from "./label";

type Props = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  register: any;
  error: any;
};

export default function InputComponent({
  id,
  type,
  label,
  placeholder,
  register,
  error,
}: Props) {
  const hasError = error !== undefined;
  return (
    <div className="w-full flex flex-col justify-start gap-y-1">
      <Label className="text-[14px] font-normal text-light-green" htmlFor={id}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        className={`border ${hasError ? "border-[#FF0000] " : ""}`}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <span className="text-[#FF0000] text-[12px] font-myfontRegular">
          {error.message}
        </span>
      )}
    </div>
  );
}

