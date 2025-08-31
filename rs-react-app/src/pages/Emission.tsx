import { Profiler, Suspense } from 'react';
import Loading from '@components/Loading';
import Table from '@components/Table';
import Search from '@components/Search';
import Filter from '@components/Filter';

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update' | 'nested-update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) {
  console.log(`[Profiler:${id}]`, {
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
}

export default function Emission() {
  return (
    <section>
      <h2>CO2 emissions</h2>

      <Profiler id="search" onRender={onRenderCallback}>
        <Search />
      </Profiler>

      <Profiler id="filter" onRender={onRenderCallback}>
        <Filter />
      </Profiler>

      <Suspense fallback={<Loading />}>
        <Profiler id="table" onRender={onRenderCallback}>
          <Table />
        </Profiler>
      </Suspense>
    </section>
  );
}
