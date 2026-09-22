import BannerPage from '@/components/homepage/Banner';
import Stats from '@/components/homepage/Stats';
import TrendingApp from '@/components/homepage/TrendingApp';

export default function Home() {
  return (
    <div>
      <BannerPage />
      <Stats />
      <TrendingApp />
    </div>
  );
}
