<script setup>
import Link from './Link.vue'
import Line from './Line.vue'

defineProps({
  href: {
    type: String,
    required: true
  },
  alignLeft: {
    type: Boolean,
    default: false
  },
  py: {
    type: String,
    default: 'py-[103px]'
  }
})
</script>

<template>
  <div>
    <Line class="-ml-[6px] h-[1px] w-[101%]" :rotation="alignLeft ? 9 : -9" />
    <div :class="`flex  ${alignLeft ? 'lg:ml-80' : 'justify-end lg:mr-80'} ${py}`">
      <Link :href="href" target="_blank">
        <template v-slot:heading><slot name="heading"></slot></template>
      </Link>
    </div>
    <Line class="-ml-[6px] h-[1px] w-[101%]" :rotation="alignLeft ? -9 : 9" />
  </div>
</template>
