// receive rule list return true if pass validation
// and false with error msg if otherwise.

import { ruleType } from './ruleType';

export type rule = {
  type: ruleType;
  value?: number;
  errorMsg?: string;
};

type returnValue = {
  isValid: boolean;
  msg: string;
};

export default function validate(value: string, ruleList: rule[]): returnValue {
  for (const rule of ruleList) {
    switch (rule.type) {
      case ruleType.Required:
        if (value === '') {
          const result = {
            isValid: false,
            msg: rule.errorMsg ? rule.errorMsg : 'Required',
          };
          return result;
        }
        break;
      case ruleType.MaxLength:
        if (rule.value && value.length >= rule.value) {
          const result = {
            isValid: false,
            msg: rule.errorMsg ? rule.errorMsg : `Maximum length is ${rule.value}`,
          };
          return result;
        }
        break;
      default:
        break;
    }
  }

  return {
    isValid: true,
    msg: '',
  };
}
