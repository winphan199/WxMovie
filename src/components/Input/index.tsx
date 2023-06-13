import React, { useLayoutEffect, useState } from 'react';

import validate, { rule } from '~/utils/validate';

type typeInput = 'text' | 'radio';

interface RadioItem {
  id: string;
  label: string;
  value: string;
}

interface InputProps {
  label: string;
  type: typeInput;
  name: string;
  placeholder?: string;
  radioList?: RadioItem[];
  state: { inputValue: string; isValid: boolean };
  setState: React.Dispatch<
    React.SetStateAction<{
      inputValue: string;
      isValid: boolean;
    }>
  >;
  validateSchema?: rule[];
}

function Input({
  label = '',
  type = 'text',
  name = '',
  placeholder,
  radioList,
  state,
  setState,
  validateSchema,
}: InputProps) {
  const [isRadioType, setIsRadioType] = useState(false);
  const [msg, setMsg] = useState<string>('');

  useLayoutEffect(() => {
    if (type === 'radio') {
      setIsRadioType(true);
    } else {
      setIsRadioType(false);
    }
  }, [type]);

  const handleValidate = (value: string) => {
    if (validateSchema) {
      const result = validate(value, validateSchema);
      setState((prev) => ({ ...prev, isValid: result.isValid }));
      setMsg(result?.msg);
    }
  };

  return (
    <div className="flex flex-col mb-2">
      {!isRadioType && (
        <>
          <label htmlFor={name} className="text-base uppercase mb-2 font-medium w-full">
            {label}
          </label>
          <input
            className="py-2 px-4 outline-none border border-solid border-[#ddd] rounded text-lg w-full"
            type={type}
            id={name}
            name={name}
            placeholder={placeholder ? placeholder : ''}
            onChange={(e) => {
              handleValidate(e.target.value);
              setState((prev) => {
                return { ...prev, inputValue: e.target.value };
              });
            }}
            value={state?.inputValue}
            onFocus={(e) => {
              handleValidate(e.target.value);
            }}
          />
          <p className="text-sm h-5 text-red-600 w-full">{msg}</p>
        </>
      )}
      {isRadioType && (
        <>
          <label htmlFor={name} className="text-base uppercase mb-2 font-medium w-full">
            {label}
          </label>
          <div className="flex flex-wrap">
            {radioList?.map((radioItem) => (
              <div key={radioItem.id} className="flex items-center mr-3">
                <input
                  className="w-5 h-5 mr-1"
                  type={type}
                  name={name}
                  id={radioItem.id}
                  value={radioItem.value}
                  checked={state?.inputValue === radioItem.value}
                  onChange={(e) => {
                    handleValidate(e.target.value);
                    if (setState) {
                      setState((prev) => {
                        return { ...prev, inputValue: e.target.value };
                      });
                    }
                  }}
                />
                <label htmlFor={radioItem.id} className="text-base">
                  {radioItem.label}
                </label>
              </div>
            ))}
          </div>
          <p className="text-sm h-5 text-red-600">{msg}</p>
        </>
      )}
    </div>
  );
}

export default Input;
