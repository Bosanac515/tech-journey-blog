import Link from 'next/link';
import Date from '@/components/Date';
import { getSortedPostsData } from '@/lib/posts';
import Image from "next/image";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

// Change this url to change the image!
const imageUrl = '/images/seth-snorlax.webp';
const leftBannerUrl = '/images/minecraft-left-banner.webp';
const rightBannerUrl = '/images/minecraft-right-banner.webp';

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <div className="relative">
      <section className="prose">
        <p>Hey I&apos;m Aden. This is my site.</p>
        <div className="my-4">
          <i>
            Check out the repo{' '}
            <Link href={'https://lukes-secrets-okvyv49m5-bosanac515s-projects.vercel.app/'}>
              <button className="btn btn-primary">
                <span className="text-primary-content">
                  here
                </span>
              </button>
            </Link>
          </i>
        </div>
      </section>

      <div className="my-4">
        <Image className="rounded" src={imageUrl} alt="My Image" width={500} height={500} />
      </div>

      <section className="prose">
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <div>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="prose my-8">
        <h2>Bounty</h2>
        <p>🔥💀 Bounty for the following cards: 9 of ♠️, King of ♥️, Ace of ♥️ 💀🔥</p>
      </section>

      <div className="absolute top-0 left-0 w-1/4 h-full">
        <Image src={leftBannerUrl} alt="Left Banner" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-0 right-0 w-1/4 h-full">
        <Image src={rightBannerUrl} alt="Right Banner" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
