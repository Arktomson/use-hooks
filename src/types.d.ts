declare interface NodeRequire {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
  ) => {
    keys(): string[];
    (key: string): any;
  };
}
