<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import Line from './components/Line.vue'
import List from './components/List.vue'
import Project from './components/Project.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMediumScreenOrSmaller = breakpoints.smaller('lg')
</script>

<template>
  <header class="mx-auto mb-40 px-4 pt-6 3xl:container lg:mb-56 lg:px-10">
    <h1 class="pb-6">
      <span>Harrison</span>
      <span class="text-stroke">Peace</span>
    </h1>
    <Line class="h-[1px] w-full" show-on-load />
  </header>

  <section class="mx-auto px-4 3xl:container lg:px-10">
    <div class="mx-auto flex w-fit flex-col pb-20">
      <h2 class="mb-8 flex flex-col">
        <span>Elegant</span><span class="text-stroke ms-12 md:ms-32">solutions</span>
      </h2>
      <h2 class="flex flex-col lg:ml-8 xl:lg:ml-80">
        <span>Exceptional</span><span class="text-stroke ms-12 md:ms-64">experiences</span>
      </h2>
    </div>
    <Line class="-ml-[6px] h-[1px] w-[101%]" show-on-load rotation="9" />
  </section>

  <main section class="mx-auto px-4 3xl:container xl:px-10">
    <div class="flex flex-col justify-center xl:flex-row">
      <div class="px-4 pt-24 xl:w-[49%] xl:px-10 xl:pt-40">
        <p>
          I create user interfaces that are both visually stunning and functionally exceptional. I
          use modern technologies and frameworks to transform design concepts into elegant solutions
          that enhance user experiences.
        </p>
      </div>
      <div class="flex w-full justify-center xl:w-[1%]">
        <Line
          class="mt-[-1px] h-[1px] w-full max-lg:mt-24 max-lg:rotate-[-9deg] lg:h-full lg:w-[2px]"
          show-on-load
          :rotation="isMediumScreenOrSmaller ? -9 : 0"
        />
      </div>
      <div class="px-4 pt-32 xl:w-[49%] xl:px-10 xl:pt-72">
        <div class="mb-12 flex justify-center xl:mb-20">
          <List :listItems="['React', 'Vue', 'Node', 'Next', 'Nuxt', 'Nest', 'TypeScript']">
            <template v-slot:heading>
              <span>JavaScript</span>
              <span class="ms-6 max-lg:inline-flex max-lg:flex-col lg:ms-12">
                <span class="text-stroke">Technologies</span
                ><span class="max-lg:ms-6"
                  ><span>&</span><span class="text-stroke">Frameworks</span></span
                >
              </span>
            </template>
          </List>
        </div>
        <div class="max-lg:mb-16 max-lg:flex max-lg:justify-center lg:ml-[10%] xl:ml-6">
          <List :listItems="['SCSS', 'Tailwind', 'Bootstrap']">
            <template v-slot:heading>
              <span>CSS</span>
              <span class="ms-6"><span>&</span><span class="text-stroke">Frameworks</span></span>
            </template>
          </List>
        </div>
        <div
          class="flex justify-center pb-32 lg:mr-[20%] lg:justify-end lg:pb-14 xl:mt-24 3xl:-mt-7 3xl:mr-20"
        >
          <List :listItems="['Wix', 'Storyblok', 'Shopify', 'Webflow']">
            <template v-slot:heading>
              <span>Other</span>
              <span class="text-stroke ms-6">technologies</span>
            </template>
          </List>
        </div>
      </div>
    </div>

    <div>
      <Line class="-ml-[6px] h-[1px] w-[101%]" rotation="9" />
      <h2 class="flex flex-col py-[103px] lg:ml-80">
        <span>Recent</span><span class="text-stroke ms-24">projects</span>
      </h2>
      <Line class="-ml-[6px] h-[1px] w-[101%]" rotation="-9" />
    </div>

    <Project href="https://www.mcgrathnicol.com/" py="py-[127px]">
      <template v-slot:heading>
        <span>McGrath</span><span class="text-stroke">Nicol</span>
      </template>
    </Project>

    <Project href="https://www.bounty.media/" py="py-[127px]" alignLeft>
      <template v-slot:heading>
        <span>Bounty</span><span class="text-stroke">Media</span>
      </template>
    </Project>

    <Project href="https://www.apwines.com/">
      <template v-slot:heading>
        <span class="flex flex-col">
          <span><span>Andrew</span><span class="text-stroke">Peace</span></span>
          <span>Wines</span>
        </span>
      </template>
    </Project>

    <Project href="https://ada.org.au/" alignLeft py="py-[127px]">
      <template v-slot:heading>
        <span class="flex flex-col">
          <span><span>Australian</span><span class="text-stroke">Dental</span></span>
          <span>
            <span>Association</span>
          </span>
        </span>
      </template>
    </Project>

    <div class="mb-32 mt-[calc(8%-2px)] h-fit">
      <Line class="ml-[4px] h-[1px] w-full origin-left" rotation="-5" />
      <Line class="ml-[4.8%] mt-[-8.8%] h-[1px] w-[95%] origin-right" rotation="-8" />
      <Line class="ml-[6.2%] mt-[13.1%] h-[1px] w-[80%] origin-left" rotation="-5" />
      <Line class="ml-[20.9%] mt-[-7%] h-[1px] w-[65%] origin-right" rotation="-8" />
      <Line class="ml-[21.5%] mt-[9%] h-[1px] w-[50%] origin-left" rotation="9" />
      <Line class="ml-[31%] mt-[7.8%] h-[1px] w-[40%] origin-right" rotation="-8" />
      <Line class="ml-[31.4%] mt-[5.5%] h-[1px] w-[25%] origin-left" rotation="10" />
      <Line class="ml-[35.9%] mt-[4.3%] h-[1px] w-[20%] origin-right" rotation="-8" />
      <Line class="ml-[36.1%] mt-[2.75%] h-[1px] w-[10%] origin-left" rotation="13" />
      <Line class="ml-[40.8%] mt-[2.2%] h-[1px] w-[5%] origin-right" rotation="-36" />
    </div>
  </main>

  <footer class="flex flex-col justify-around gap-4 pb-20 lg:flex-row">
    <div class="flex items-center">
      <a
        href="mailto:harrison@apwines.com"
        class="text-hover font-rubik text-heading-sm md:text-heading-lg"
      >
        <span v-motion-slide-visible-once-bottom>Contact</span
        ><span v-motion-slide-visible-once-bottom class="text-stroke">Me</span>
      </a>
    </div>
    <div class="flex gap-4 lg:gap-7" v-motion-slide-visible-once-bottom>
      <a
        href="https://www.linkedin.com/in/harrison-peace"
        target="_blank"
        class="transition-transform ease-in-out hover:rotate-180"
      >
        <svg
          width="89"
          height="90"
          viewBox="0 0 89 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 lg:h-16 lg:w-16"
        >
          <path
            d="M82.6429 0.375H6.33728C2.84085 0.375 0 3.26367 0 6.80977V83.1902C0 86.7363 2.84085 89.625 6.33728 89.625H82.6429C86.1393 89.625 89 86.7363 89 83.1902V6.80977C89 3.26367 86.1393 0.375 82.6429 0.375ZM26.8987 76.875H13.7076V34.282H26.9185V76.875H26.8987ZM20.3031 28.4648C16.0717 28.4648 12.6547 25.0184 12.6547 20.7949C12.6547 16.5715 16.0717 13.125 20.3031 13.125C24.5147 13.125 27.9516 16.5715 27.9516 20.7949C27.9516 25.0383 24.5346 28.4648 20.3031 28.4648ZM76.3453 76.875H63.1542V56.1562C63.1542 51.2156 63.0549 44.8605 56.3004 44.8605C49.4268 44.8605 48.3739 50.2395 48.3739 55.7977V76.875H35.1828V34.282H47.8375V40.0992H48.0163C49.7844 36.7523 54.0953 33.2262 60.5121 33.2262C73.8621 33.2262 76.3453 42.0516 76.3453 53.5266V76.875Z"
            fill="black"
          />
        </svg>
      </a>
      <a
        href="https://github.com/harrisonpeace"
        target="_blank"
        class="transition-transform ease-in-out hover:rotate-180"
      >
        <svg
          width="89"
          height="90"
          viewBox="0 0 89 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 lg:h-16 lg:w-16"
        >
          <path
            d="M79.4643 0.375H9.53571C4.27121 0.375 0 4.6582 0 9.9375V80.0625C0 85.3418 4.27121 89.625 9.53571 89.625H79.4643C84.7288 89.625 89 85.3418 89 80.0625V9.9375C89 4.6582 84.7288 0.375 79.4643 0.375ZM55.0886 76.8152C53.4199 77.1141 52.804 76.0781 52.804 75.2215C52.804 74.1457 52.8438 68.6473 52.8438 64.2047C52.8438 61.0969 51.8107 59.1246 50.5989 58.0887C57.9493 57.2719 65.6971 56.2559 65.6971 43.5258C65.6971 39.9 64.4058 38.0871 62.3 35.7563C62.6377 34.8996 63.7701 31.3734 61.9623 26.7914C59.2009 25.9348 52.8835 30.3574 52.8835 30.3574C50.2612 29.6203 47.4203 29.2418 44.6192 29.2418C41.8181 29.2418 38.9772 29.6203 36.3549 30.3574C36.3549 30.3574 30.0375 25.9348 27.2761 26.7914C25.4683 31.3535 26.5808 34.8797 26.9384 35.7563C24.8326 38.0871 23.8393 39.9 23.8393 43.5258C23.8393 56.1961 31.2493 57.2719 38.5998 58.0887C37.6462 58.9453 36.792 60.4195 36.494 62.5312C34.6067 63.3879 29.7792 64.8621 26.8987 59.7621C25.0908 56.6145 21.8328 56.3555 21.8328 56.3555C18.6145 56.3156 21.6143 58.3875 21.6143 58.3875C23.7598 59.3836 25.2696 63.2086 25.2696 63.2086C27.1967 69.1254 36.4145 67.1332 36.4145 67.1332C36.4145 69.9023 36.4542 74.4047 36.4542 75.2215C36.4542 76.0781 35.8583 77.1141 34.1696 76.8152C21.058 72.4125 11.8799 59.9016 11.8799 45.2789C11.8799 26.9906 25.8259 13.1051 44.0629 13.1051C62.3 13.1051 77.0804 26.9906 77.0804 45.2789C77.1002 59.9016 68.2002 72.4324 55.0886 76.8152ZM35.6 64.643C35.2225 64.7227 34.865 64.5633 34.8252 64.3043C34.7855 64.0055 35.0438 63.7465 35.4212 63.6668C35.7987 63.627 36.1562 63.7863 36.196 64.0453C36.2556 64.3043 35.9973 64.5633 35.6 64.643ZM33.7127 64.4637C33.7127 64.7227 33.4147 64.9418 33.0174 64.9418C32.5804 64.9816 32.2824 64.7625 32.2824 64.4637C32.2824 64.2047 32.5804 63.9855 32.9777 63.9855C33.3551 63.9457 33.7127 64.1648 33.7127 64.4637ZM30.9911 64.2445C30.9116 64.5035 30.5143 64.623 30.1766 64.5035C29.7991 64.4238 29.5408 64.125 29.6203 63.866C29.6998 63.607 30.0971 63.4875 30.4348 63.5672C30.8321 63.6867 31.0904 63.9855 30.9911 64.2445ZM28.5475 63.1688C28.3687 63.3879 27.9913 63.348 27.6933 63.0492C27.3953 62.7902 27.3158 62.4117 27.5145 62.2324C27.6933 62.0133 28.0708 62.0531 28.3688 62.352C28.627 62.6109 28.7263 63.0094 28.5475 63.1688ZM26.7397 61.3559C26.5609 61.4754 26.2232 61.3559 26.0047 61.057C25.7862 60.7582 25.7862 60.4195 26.0047 60.2801C26.2232 60.1008 26.5609 60.2402 26.7397 60.5391C26.9583 60.8379 26.9583 61.1965 26.7397 61.3559ZM25.4484 59.4234C25.2696 59.6027 24.9717 59.5031 24.7531 59.3039C24.5346 59.0449 24.4949 58.7461 24.6737 58.6066C24.8525 58.4273 25.1504 58.527 25.369 58.7262C25.5875 58.9852 25.6272 59.284 25.4484 59.4234ZM24.1174 57.9492C24.0379 58.1285 23.7797 58.1684 23.5612 58.0289C23.3029 57.9094 23.1837 57.6902 23.2632 57.5109C23.3426 57.3914 23.5612 57.3316 23.8194 57.4312C24.0777 57.5707 24.1969 57.7898 24.1174 57.9492Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>
