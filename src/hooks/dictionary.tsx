'use client'

import en from '@/assets/i18n/en';
import ptBr from '@/assets/i18n/pt-br';

export type LocaleFunction = (keyPath: string, args?: Record<string, any>) => string;

export type DictionaryHookData = {
  locale: LocaleFunction;
}

export function useDictionary(): DictionaryHookData {
  function locale(keyPath: string, args?: Record<string, any>): string {
    const [fileName, property, subProperty] = keyPath.split('.');
    const languageFile: Record<string, any> = ptBr;
    // const languageFile: Record<string, any> = language === UserLanguage.PTBR ? ptBr : en;
    const file = languageFile[fileName];

    if (!file) {
      return '';
    }

    let value = file[property];

    if (!value) {
      return '';
    }

    if (subProperty) {
      value = value[subProperty];
    }

    if (!args) {
      return value;
    }

    Object.keys(args).forEach(key => {
      value = value.replace(`{${key}}`, args[key]);
    });

    return value;
  }

  return { locale };
}
