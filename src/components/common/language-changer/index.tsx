"use client";

import { TranslatorIcon } from "@/components/icons/translator-icon";
import { LANGUAGES } from "@/data/languages";
import { usePathname, useRouter } from "@/i18n/routing";
import { Select, SelectItem } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { ChangeEvent } from "react";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = useLocale();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <Select
      onChange={handleChange}
      placeholder={currentLocale}
      disableSelectorIconRotation
      selectorIcon={<TranslatorIcon />}
      aria-label="Language selector"
      classNames={{
        listboxWrapper: "p-0",
        listbox: "p-0 rounded-md",
        popoverContent: "p-0 rounded-md",
      }}
    >
      {LANGUAGES.map((language) => (
        <SelectItem key={language.value} value={language.value}>
          {language.label}
        </SelectItem>
      ))}
    </Select>
  );
}
