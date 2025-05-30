import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">บริษัท ไซเลนเทค จำกัด</h2>
      <p class="mt-4">SILENTECH COMPANY LIMITED</p>
      <p class="mt-4">49/7 หมู่ 9 ต.บางม่วง อ.บางใหญ่ จ.นนทบุรี 11140</p>
      <p class="mt-4">SILENTECH COMPANY LIMITED</p>
    </div>
    </section>
  );
}
