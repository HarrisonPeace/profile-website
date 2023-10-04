<script setup>
import { computed } from 'vue'

const props = defineProps({
  isHorizontal: {
    type: Boolean,
    default: false
  },
  showOnLoad: {
    type: Boolean,
    default: false
  },
  rotation: {
    type: Number,
    default: 0
  }
})

const endAnimationValues = computed(() => ({
  scale: 1,
  rotate: `${props.rotation}deg`
}))

const animationProps = computed(() => ({
  initial: { scale: 0 },
  ...(props.showOnLoad
    ? {
        enter: endAnimationValues.value
      }
    : {
        visibleOnce: endAnimationValues.value
      }),
  delay: 200
}))
</script>

<template>
  <div v-motion v-bind="animationProps" class="bg-light"></div>
</template>
