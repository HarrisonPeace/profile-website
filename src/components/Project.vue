<script setup>
import { computed } from 'vue'

import Link from './Link.vue'
import Line from './Line.vue'

const props = defineProps({
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

const linkProps = computed(() => ({
  href: props.href,
  svgBottom: props.alignLeft,
  svgLeft: props.alignLeft
}))
</script>

<template>
  <div>
    <Line class="-ml-[6px] h-[1px] w-[101%]" :rotation="alignLeft ? 9 : -9" />
    <div
      :class="`flex  ${alignLeft ? 'lg:ml-40 xl:ml-80' : 'justify-end lg:mr-40 xl:mr-80'} ${py}`"
    >
      <Link v-bind="linkProps" target="_blank">
        <template v-slot:heading><slot name="heading"></slot></template>
      </Link>
    </div>
    <Line class="-ml-[6px] h-[1px] w-[101%]" :rotation="alignLeft ? -9 : 9" />
  </div>
</template>
