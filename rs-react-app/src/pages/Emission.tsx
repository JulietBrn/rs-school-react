import { Suspense } from 'react';
import Loading from '@components/Loading';
import Table from '@components/Table';
import Search from '@components/Search';
import Filter from '@components/Filter';

export default function Emission() {
  return (
    <section>
      <h2>CO2 emissions</h2>

      <Search />
      <Filter />

      <Suspense fallback={<Loading />}>
        <Table />
      </Suspense>
    </section>
  );
}
