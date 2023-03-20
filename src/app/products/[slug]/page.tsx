import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react';

//https://nextjs.org/docs/basic-features/pages
// 13버전
// https://beta.nextjs.org/docs/routing/fundamentals
// https://beta.nextjs.org/docs/routing/defining-routes

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품 이름: ${params.slug}`,
  };
}

export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product} 제품 설명 페이지</h1>;
}

// ❓ 특정 경로에 대해 미리 페이지를 만드는 경우
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// generateStaticParams라는 이름은 규격 사항
export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
