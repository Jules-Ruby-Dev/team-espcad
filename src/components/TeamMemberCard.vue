<template>
  <article class="member-card">
    <!-- Portrait -->
    <div class="member-portrait">
      <img :src="portrait" :alt="name + ' portrait'" />
    </div>

    <!-- Info -->
    <div class="member-info">
      <h2 class="member-name">{{ name }}</h2>
      <p class="member-role">{{ role }}</p>
      <p class="member-bio">{{ bio }}</p>
    </div>

    <!-- QR codes -->
    <div class="member-qr">
      <figure>
        <img :src="linkedinQr" :alt="name + ' LinkedIn QR code'" />
        <figcaption>LinkedIn</figcaption>
      </figure>
      <figure>
        <img :src="githubQr" :alt="name + ' GitHub QR code'" />
        <figcaption>GitHub</figcaption>
      </figure>
    </div>
  </article>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: true },
  portrait: { type: String, required: true },
  linkedinQr: { type: String, required: true },
  githubQr: { type: String, required: true },
})
</script>
