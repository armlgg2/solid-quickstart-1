import { createEffect, Suspense } from "solid-js";
import AboutData from "./about.data";

export default function About() {
  const name = AboutData();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="bg-indigo-100 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">About</h2>

      <p class="mt-4">
        BBBB. <span>BBBB</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name()}!</span>
        </Suspense>
      </p>
      <p>
        {" "}
        <a href="https://google.com" target="_blank" class="underline">
          google.com
        </a>
        {" "}Sorry Sorry Sorry
      </p>
    </section>
  );
}
