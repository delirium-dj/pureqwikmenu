import { component$, useSignal } from '@builder.io/qwik';

export const PureMenu = component$(() => {
  // signals act like "reactive boxes" to store the menu's state
  const isMobileMenuOpen = useSignal(false);
  const expandedItem = useSignal<string | null>(null);

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Products', 
      href: '#', 
      children: ['Software', 'Hardware', 'Services'] 
    },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav class="bg-slate-900 text-white w-full relative z-30">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16 items-center">
          {/* 1. LOGO SECTION */}
          <div class="flex-shrink-0 font-bold text-xl z-50">
            PureCSS <span class="text-blue-400">Qwik</span>
          </div>

          {/* 2. DESKTOP MENU (Pure CSS Logic) */}
          <div class="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <div key={item.label} class="relative group">
                <a href={item.href} class="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors">
                  {item.label} {item.children && '▼'}
                </a>
                {/* Desktop Dropdown: Handled by 'group-hover' classes, not JS */}
                {item.children && (
                  <div class="absolute left-0 mt-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <a key={child} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. MOBILE TOGGLE BUTTON */}
          <div class="md:hidden flex items-center z-50">
            <button
              onClick$={() => (isMobileMenuOpen.value = !isMobileMenuOpen.value)}
              class="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-700 focus:outline-none"
            >
              <div class="space-y-2">
                <span class={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen.value ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span class={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen.value ? 'opacity-0' : ''}`}></span>
                <span class={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen.value ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 4. FULL SCREEN MOBILE OVERLAY */}
      <div 
        class={`
          fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen.value ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center
        `}
      >
        <div class="w-full max-w-xs space-y-4 text-center">
          {menuItems.map((item) => (
            <div key={item.label} class="flex flex-col items-center">
              {item.children ? (
                <button
                  onClick$={() => {
                    expandedItem.value = expandedItem.value === item.label ? null : item.label;
                  }}
                  class="text-3xl font-bold flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span class={`text-xl transition-transform duration-300 ${expandedItem.value === item.label ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick$={() => (isMobileMenuOpen.value = false)}
                  class="text-3xl font-bold hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              )}

              {/* Submenu with Accordion Animation */}
              {item.children && (
                <div class={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItem.value === item.label ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div class="flex flex-col gap-4">
                    {item.children.map((child) => (
                      <a key={child} href="#" onClick$={() => (isMobileMenuOpen.value = false)} class="text-xl text-slate-400 hover:text-white">
                        {child}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
});