import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg">{t('message')}</p>
      <Link className="text-blue-500 underline hover:text-blue-700" href="/">
        {t('goHome')}
      </Link>
    </div>
  );
}
