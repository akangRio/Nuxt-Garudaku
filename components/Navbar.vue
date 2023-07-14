<template>
  <nav class="navbar">
    <ul>
      <li>
        <NuxtLink class="hover:text-lg" to="/">Home</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ccdbe0;

  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px 0 black;
}

.navbar * {
  display: inline;
}

.navbar li {
  margin: 20px;
}

.navbar li a {
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
}
</style>
