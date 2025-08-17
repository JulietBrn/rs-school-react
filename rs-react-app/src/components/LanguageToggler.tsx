'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from 'next-intl';
import type { ChangeEvent } from 'react';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('language');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
    startTransition(() => {
      router.push(newPathname);
    });
  }

  return (
    <label className="flex items-center gap-2">
      <p>{t('label')}:</p>
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option value="en">{t('en')}</option>
        <option value="ru">{t('ru')}</option>
      </select>
    </label>
  );
}
