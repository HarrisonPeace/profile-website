<script setup>
defineProps({
  listItems: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="w-fit">
    <h3 class="mb-0 inline-flex flex-col text-heading-sm">
      <slot name="heading"></slot>
    </h3>
    <div class="ml-12">
      <p
        v-for="(listItem, idx) in listItems"
        :style="{ marginLeft: `${20 + idx * 20}px` }"
        :key="listItem.replace(' ', '-')"
      >
        -{{ listItem }}
      </p>
    </div>
  </div>
</template>
