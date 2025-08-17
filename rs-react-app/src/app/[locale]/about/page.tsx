import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <div className="grid md:grid-cols-2 gap-4 ">
      <Image
        src="/me.jpg"
        alt={t('imageAlt')}
        priority={true}
        width={500}
        height={350}
      />

      <div className="content">
        <h1>{t('title')}</h1>
        <p>
          {t('author')} <strong>{t('authorName')}</strong>
        </p>
        <p>{t('stack')}</p>
        <p>{t('funFact')}</p>

        <p>
          {t('learnMore')}{' '}
          <Link
            href="https://rs.school/courses/reactjs"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {t('courseLinkText')}
          </Link>
        </p>
      </div>
    </div>
  );
}
