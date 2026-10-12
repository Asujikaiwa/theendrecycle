import type { Locale } from "./config";
import th, { type Dict } from "./dictionaries/th";
import en from "./dictionaries/en";
import zh from "./dictionaries/zh";

const dicts: Record<Locale, Dict> = { th, en, zh };
export const getDict = (l: Locale): Dict => dicts[l];
export type { Dict };
