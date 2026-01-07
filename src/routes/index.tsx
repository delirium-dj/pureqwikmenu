import { component$ } from '@builder.io/qwik';
import { PureMenu } from '../components/menu/menu';

export default component$(() => {
  return (
    <>
      <PureMenu />
      <main class="p-8">
        <h1>QwikJS Tailwind "hamburger" Menu</h1>
      </main>
    </>
  );
});