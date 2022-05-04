import appConfig from '../config';

type DeeplResponse = {
  deeplText: string | undefined;
  status: number;
  errMsg?: string;
};

const execTranslate = async (sourceText: string): Promise<DeeplResponse> => {
  const url = appConfig.app.deeplHost;
  const queryParams: URLSearchParams = new URLSearchParams({
    auth_key: appConfig.app.deeplAuthKey,
    source_lang: appConfig.app.deeplSourceLang,
    target_lang: appConfig.app.deeplTargetLang,
    text: sourceText,
  });

  const res = await fetch(url + queryParams);

  if (res.ok) {
    const data: any = await res.json();
    const text: string = data.translations[0].text;
    if (text) {
      // Normal
      return {
        deeplText: text,
        status: res.status,
      };
    }
    // Error
    return {
      deeplText: undefined,
      status: res.status,
      errMsg: 'Translated but NO text',
    };
  }
  // Error
  return {
    deeplText: undefined,
    status: res.status,
    errMsg: 'Server error on DeepL',
  };
};

export default execTranslate;
