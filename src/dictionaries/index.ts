import 'server-only';

// 辞書の型を定義します。
type Dictionary = {
  [key: string]: { [key: string]: string };
};

// 辞書のインポート関数の型を定義します。
type DictionaryImportFunction = () => Promise<Dictionary>;

const dictionaries: Record<string, DictionaryImportFunction> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
};

export const getDictionaries = async (locale: string) => dictionaries[locale]();
