import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <li><Link href="/week-2">week-2</Link></li>
      <li><Link href="/week-3">week-3</Link></li>
      <li><Link href="/week-4">week-4</Link></li>
      <li><Link href="/week-5">week-5</Link></li>
      <li><Link href="/week-6">week-6</Link></li>
      <li><Link href="/week-7">week-7</Link></li>
      <li><Link href="/week-8">week-8</Link></li>
      <li><Link href="https://final-project-cprg-306-5z2n-mx3r2pm0t.vercel.app">Final Project: WeatherView</Link></li>
      </main>
  );
}
