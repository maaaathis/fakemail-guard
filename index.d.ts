declare module 'levenstein' {
    function levenstein(a: string, b: string): number;
    export = levenstein;
  }
  
  declare module '*.json' {
    const value: any;
    export default value;
  }
  
  interface EmailValidationOptions {
    whitelist?: string[];
    blacklist?: string[];
    allowFreemail?: boolean;
    allowDisposable?: boolean;
  }
  
  interface EmailValidationResult {
    email: string;
    domain: string | null;
    valid: boolean;
    errors: string[];
    typo: string | null;
  }
  
  declare class EmailValidation {
    constructor(options?: EmailValidationOptions);
    check(email: string): EmailValidationResult;
    whitelist(domain: string): void;
    blacklist(domain: string): void;
    setOptions(options: EmailValidationOptions): void;
  }
  
  export = EmailValidation;
  