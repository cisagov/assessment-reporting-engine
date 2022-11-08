<template>
  <footer data-id="sds-layout-sei-external-footer">
    <div class="py-8 text-white bg-gray-500">
      <div class="container px-4 mx-auto space-y-6 md:px-8">
        <ul class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <li>
            <a
              href="https://vulcoord.cert.org/VulReport/"
              class="hover:underline focus:underline focus:outline-none"
            >Report a Vulnerability to CERT/CC</a>
          </li>
          <li>
            <a
              href="https://sei.cmu.edu/subscribe-to-sei-bulletin/"
              class="hover:underline focus:underline focus:outline-none"
            >Subscribe to SEI Bulletin</a>
          </li>
          <li>
            <a
              href="https://sei.cmu.edu/legal/request-permission-to-use-sei-material"
              class="hover:underline focus:underline focus:outline-none"
            >Request Permission to Use SEI Materials</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="py-8 text-gray-100 bg-gray-900">
      <div class="container px-4 mx-auto space-y-6 md:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <address class="not-italic">
              Carnegie Mellon University<br>
              Software Engineering Institute<br>
              4500 Fifth Avenue<br>
              Pittsburgh, PA 15213-2612<br>
              <a
                href="tel:412-268-5800"
                target="_self"
                class="hover:underline"
              >412-268-5800</a>
            </address>
          </div>
          <ul class="space-x-2">
            <li class="inline-block">
              <a
                href="https://www.facebook.com/SEICMU/"
                rel="noopener"
                target="_blank"
                class="inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 facebook"
                :style="{
                  height: '30px',
                  width: '30px',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${socialSprites})`,
                  backgroundPosition: '0 0',
                  backgroundSize: 'auto 100%',
                }"
              ><span class="sr-only">Facebook</span></a>
            </li>
            <li class="inline-block">
              <a
                href="https://twitter.com/sei_cmu"
                rel="noopener"
                target="_blank"
                class="inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 twitter"
                :style="{
                  height: '30px',
                  width: '30px',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${socialSprites})`,
                  backgroundPosition: '-32px 0',
                  backgroundSize: 'auto 100%',
                  content: '',
                }"
              ><span class="sr-only">Twitter</span></a>
            </li>
            <li class="inline-block">
              <a
                href="https://www.linkedin.com/company/software-engineering-institute"
                rel="noopener"
                target="_blank"
                class="inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 linkedin"
                :style="{
                  height: '30px',
                  width: '30px',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${socialSprites})`,
                  backgroundPosition: '-96px 0',
                  backgroundSize: 'auto 100%',
                }"
              ><span class="sr-only">LinkedIn</span></a>
            </li>
            <li class="inline-block">
              <a
                href="https://www.youtube.com/user/TheSEICMU"
                rel="noopener"
                target="_blank"
                class="inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 youtube"
                :style="{
                  height: '30px',
                  width: '30px',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${socialSprites})`,
                  backgroundPosition: '-129px 0',
                  backgroundSize: 'auto 100%',
                }"
              ><span class="sr-only">YouTube</span></a>
            </li>
            <li class="inline-block">
              <a
                href="https://podcasts.apple.com/us/podcast/software-engineering-institute-sei-podcast-series/id566573552?mt=2"
                rel="noopener"
                target="_blank"
                class="inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 itunes"
                :style="{
                  height: '30px',
                  width: '30px',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${socialSprites})`,
                  backgroundPosition: '-161px 0',
                  backgroundSize: 'auto 100%',
                  borderRadius: '50%',
                }"
              ><span class="sr-only">iTunes</span></a>
            </li>
          </ul>
          <div>
            <a
              href="https://sei.cmu.edu/contact-us/"
              target="_self"
              class="py-8 text-xl text-center transition-colors duration-100 rounded-none btn btn-outline btn-light btn-lg btn-block"
            >
              Contact Us
            </a>
          </div>
        </div>
        <ul class="space-x-1 text-sm">
          <li class="inline-block">
            <a
              href="https://www.sei.cmu.edu/locations/index.cfm"
              target="_self"
              class="hover:underline"
            >Office Locations</a>
          </li>
          <li class="inline-block">
            |
          </li>
          <li class="inline-block">
            <a
              href="https://www.sei.cmu.edu/additional-sites-directory/index.cfm"
              target="_self"
              class="hover:underline"
            >Additional Sites Directory</a>
          </li>
          <li class="inline-block">
            |
          </li>
          <li class="inline-block">
            <a
              href="https://www.sei.cmu.edu/legal/index.cfm"
              target="_self"
              class="hover:underline"
            >Legal</a>
          </li>
          <li class="inline-block">
            |
          </li>
          <li class="inline-block">
            <a
              href="https://www.sei.cmu.edu/legal/privacy-notice/index.cfm"
              target="_self"
              class="hover:underline"
            >Privacy Notice</a>
          </li>
          <li class="inline-block">
            |
          </li>
          <li class="inline-block">
            <a
              href="https://www.cmu.edu/hr/ethics-hotline/"
              target="_self"
              class="hover:underline"
            >CMU Ethics Hotline</a>
          </li>
          <li class="inline-block">
            |
          </li>
          <li class="inline-block">
            <a
              href="https://www.sei.cmu.edu/index.cfm"
              target="_self"
              class="hover:underline"
            >www.sei.cmu.edu</a>
          </li>
        </ul>
        <div class="text-sm">
          &copy; {{ year }} Carnegie Mellon University
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sprites from "../../assets/images/sprites-social.png";

export default defineComponent({
  name: 'SdsLayoutSeiExternalFooter',
  computed: {
    year() {
      const d = new Date();
      return d.getFullYear();
    },
    socialSprites() {
      return sprites;
    },
  },
});
</script>
