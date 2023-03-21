import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clothesImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

export default async function ProductsPage() {
  // throw new Error();
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt='Clothes'></Image>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
