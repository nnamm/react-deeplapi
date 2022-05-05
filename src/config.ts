const convertString = (raw: string | undefined): string => {
  if (!raw) {
    console.log('env value not found');
    return 'NULL';
  }
  return String(raw);
};

type AppConfig = {
  app: {
    deeplHost: string;
    deeplAuthKey: string;
    deeplSourceLang: string;
    deeplTargetLang: string;
    textAreaMaxHeight: number;
  };
};

const appConfig: AppConfig = {
  app: {
    deeplHost: convertString(process.env.REACT_APP_DEEPL_HOST),
    deeplAuthKey: convertString(process.env.REACT_APP_DEEPL_AUTH_KEY),
    deeplSourceLang: convertString(process.env.REACT_APP_DEEPL_SOURCE_LANG),
    deeplTargetLang: convertString(process.env.REACT_APP_DEEPL_TARGET_LANG),
    textAreaMaxHeight: Number(convertString(process.env.REACT_APP_TEXTAREA_MAXHEIGHT)),
  },
};

export default appConfig;
