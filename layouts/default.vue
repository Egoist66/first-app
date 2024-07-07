


<template>
    <div>
      <header class="sticky top-0 shadow-md bg-blue-950">
        <div class="container">
          <nav class="flex gap-4">
            <NuxtLink :active-class="'active'" to="/contacts">Contacts</NuxtLink>
            <NuxtLink :active-class="'active'" :to="{ name: 'index' }">Home</NuxtLink>
          </nav>
        </div>
      </header>
       



      <main class="py-5">
        <div class="container">
          <slot />
        </div>
      </main>


      <footer>Footer</footer>
    </div>
  </template>
  