import React, { Suspense } from 'react';
import Loading from '../compnents/Loading';
import Table from '../compnents/Table';

export default function Emission() {
  return (
    <section>
      <h2>CO2 emissions</h2>
      <Suspense fallback={<Loading />}>
        <Table />
      </Suspense>
    </section>
  );
}
