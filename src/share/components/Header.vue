<template>
    <nav>
      <div class="icon-close-menu">
        <i class="bx bxs-caret-left-circle"></i>
      </div>
      <ul class="list-none mt-2">

        <li v-for="(menu, i) in menuList" :key="i"
            class="flex justify-center mt-0.5">
          <router-link class="w-28 text-xs rounded-md flex h-9 items-center px-1 py-0.5 bg-sky-950 text-white text-xs justify-center" :to="menu.to"> {{ menu.title }} </router-link>
        </li>
      
        <li class="flex justify-center mt-0.5">
          <div class="px-1.5 w-28 bg-sky-950 rounded-lg text-center mt-9">
            <strong class="mt-1 text-white text-[9px] uppercase">Redes sociales</strong>
            <div class="grid grid-cols-2 mt-1">
              <a v-for="(men,i) in menuSocials" :key="i"
                  target="_blank" class="px-1" :href="men.href">
                <i class="bx text-white text-2xl" :class="men.icon"></i></a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  components:{},
  data() {
    return {
      menuList: [
        {
          id: 1,
          to: '/',
          title: 'INICIO',
        },
        {
          id: 2,
          to: '/tres-grandes',
          title: 'TRES GRANDES',
        },
        {
          id: 3,
          to: '/ciclistas',
          title: 'CICLISTAS',
        },
      ],
      menuSocials: [
        {
          id: 1,
          href: "https://instagram.com/colombiatierradeescarabajos?igshid=NzZlODBkYWE4Ng==",
          icon: "bxl-instagram",
        },
        {
          id: 2,
          href: "https://x.com/CEscarabajos?t=o3Ok_wsC_mTRV2AU8ui8yg&s=09",
          icon: "bxl-twitter",
        },
        {
          id: 3,
          href: "https://www.youtube.com/@Tierracycling",
          icon: "bxl-youtube",
        },
        {
          id: 4,
          href: "https://www.facebook.com/colombiatierradeescarabajos?mibextid=ZbWKwL",
          icon: "bxl-facebook",
        },
      ],
    };
  },
}
</script>
