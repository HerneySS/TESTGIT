<template>
  
  <section class="relative max-w-screen-2xl mx-auto">
    <!-- HEADER -->
    <header class="flex justify-between items-center p-4 text-white">

      <div class="logo dflex centrar-vertical-center">
        <!-- ICON HAMBURGUESA -->
        <div click="" class="icon-hamburguesa centrar-vertical-center centrar-horizontal-center">
          <i class="bx bxs-grid-alt"></i>
        </div>
        <router-link to="/"><img src="../../../img/logo_primario.png" alt=""></router-link>
      </div>

      <div class="">
        <router-link to="/contactenos" class="bg-sky-950 px-2 py-1 cursor-pointer rounded">
          COMUNICATE CON NOSOTROS AQUI
        </router-link>
      </div>
    </header>


    <!-- MENU -->
    <header-component></header-component>

    <!-- CONTENIDO DE TITULO Y ETIQUETAS -->
    <router-view></router-view>
  </section>


  <!-- FOOTER -->
  <footer>
    <div class="footer-content-pricipal">
      <div class="footer-content">

        <div class="dflex centrar-horizontal-center">
          <img class="width160px" src="../../../img/logo_Footer-02.png">
        </div>


        <div>
          <div>
            <a href="ciclistas.html" class="color-blanco font-bold  font-family-magitral-black font13px">CICLISTAS</a>
          </div>
          <div class="dflex flex-columna margin-top5px">
            <span class="color-blanco">Nairo Quintana</span>
            <span class="color-blanco">Egan Bernal</span>
            <span class="color-blanco">Miguel Angel López</span>
          </div>
        </div>


        <div>
          <div>
            <a href="tres_grandes.html" class="color-blanco font-bold  font-family-magitral-black font13px">TRES
              GRANDES</a>
          </div>
          <div class="dflex flex-columna margin-top5px">
            <span class="color-blanco">Giro de Italia</span>
            <span class="color-blanco">Tour de Francia</span>
            <span class="color-blanco">Vuelta España</span>
          </div>
        </div>


        <div>
          <div>
            <span class="color-blanco font-bold  font-family-magitral-black font13px">Sobre TierraCycling</span>
          </div>
          <div class="dflex flex-columna margin-top5px">
            <span class="color-blanco">
              Tierra Cycling es un canal ciclismo y hacemos todo lo
              posible por traerte la información a tiempo del mundo
              del ciclismo, nuestro lema es Ciclismo, pasión y Gloria
              que representa la importancia que tienen los grandes
              ciclistas del mundo.
            </span>
          </div>
        </div>


      </div>
    </div>
  </footer>
</template>


<script>
import { defineAsyncComponent } from 'vue';
export default {
  components:{
    'header-component' : defineAsyncComponent(() =>
      import('./Header.vue')
    ),
  }
}
</script>
