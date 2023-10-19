<script setup lang="ts"></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/about"></RouterLink>
        <RouterLink to="/anime"></RouterLink>
        <RouterLink to="/live"></RouterLink>
        <RouterLink to="/game"></RouterLink>
        <RouterLink to="/show"></RouterLink>
        <RouterLink to="/comic"></RouterLink>
        <RouterLink to="/app"></RouterLink>
        <!-- search -->
        <RouterLink to="/account"></RouterLink>
        <RouterLink to="/message"></RouterLink>
        <RouterLink to="/recent"></RouterLink>
        <RouterLink to="/star"></RouterLink>
        <RouterLink to="/history"></RouterLink>
        <RouterLink to="/createCenter"></RouterLink>
        <RouterLink to="/upload"></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
