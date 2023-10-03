<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: ''
  },
  svgBottom: {
    type: Boolean,
    default: false
  },
  svgLeft: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <a class="group/link relative w-fit" :href="href" :target="target">
    <h2 class="inline"><slot name="heading"></slot></h2>
    <svg
      class="ease-out-quad absolute mb-1 h-8 w-8 transition-transform group-hover/link:rotate-180 lg:h-16 lg:w-16"
      :class="[svgBottom ? 'top-full' : 'bottom-full', svgLeft ? 'left-0' : 'right-0']"
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_8_54)">
        <path
          d="M39.375 0C37.1971 0 35.4375 1.75957 35.4375 3.9375C35.4375 6.11543 37.1971 7.875 39.375 7.875H49.551L24.7816 32.6566C23.2436 34.1947 23.2436 36.6926 24.7816 38.2307C26.3197 39.7688 28.8176 39.7688 30.3557 38.2307L55.125 13.449V23.625C55.125 25.8029 56.8846 27.5625 59.0625 27.5625C61.2404 27.5625 63 25.8029 63 23.625V3.9375C63 1.75957 61.2404 0 59.0625 0H39.375ZM9.84375 3.9375C4.40508 3.9375 0 8.34258 0 13.7812V53.1562C0 58.5949 4.40508 63 9.84375 63H49.2188C54.6574 63 59.0625 58.5949 59.0625 53.1562V39.375C59.0625 37.1971 57.3029 35.4375 55.125 35.4375C52.9471 35.4375 51.1875 37.1971 51.1875 39.375V53.1562C51.1875 54.2391 50.3016 55.125 49.2188 55.125H9.84375C8.76094 55.125 7.875 54.2391 7.875 53.1562V13.7812C7.875 12.6984 8.76094 11.8125 9.84375 11.8125H23.625C25.8029 11.8125 27.5625 10.0529 27.5625 7.875C27.5625 5.69707 25.8029 3.9375 23.625 3.9375H9.84375Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_54">
          <rect width="63" height="63" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </a>
</template>
