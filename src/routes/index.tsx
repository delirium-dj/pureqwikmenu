import { component$ } from '@builder.io/qwik';
import { PureMenu } from '../components/menu/menu';

export default component$(() => {
  return (
    <>
      <PureMenu />
      <main class="max-w-7xl text-center text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl flex justify-center items-center h-96 mx-auto">
        <h1>QwikJS Tailwind "hamburger" Menu</h1>
      </main>
    </>
  );
});