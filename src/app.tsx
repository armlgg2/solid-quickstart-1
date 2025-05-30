import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div>
      
      <main class="max-w-2xl mx-auto h-screen flex flex-col justify-center px-4">
        <h1 class="text-5xl mx-auto mb-8 text-slate-600 font-light">Coming Soon!!!</h1>
        <Suspense>{props.children}</Suspense>
      </main>
    </div>
  );
};

export default App;
