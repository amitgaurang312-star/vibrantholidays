import { notFound } from 'next/navigation';
import { getPackageBySlug, getRelatedPackages, packages } from '@/data/packageData';
import PackageDetailClient from './PackageDetailClient';

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: 'Package Not Found' };
  return {
    title: `${pkg.packageName} | ${pkg.destination} Tour Package | Vibrant Holidays`,
    description: pkg.overview.slice(0, 160),
    openGraph: {
      title: `${pkg.packageName} — ${pkg.duration}`,
      description: pkg.overview.slice(0, 160),
      images: [{ url: pkg.heroImage }],
    },
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const related = getRelatedPackages(pkg.relatedSlugs);

  return <PackageDetailClient pkg={pkg} related={related} />;
}
