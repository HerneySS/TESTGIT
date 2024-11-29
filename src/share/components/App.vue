<template>
  
  <section class="section-content">
    <!-- HEADER -->
    <header>

      <div class="logo dflex centrar-vertical-center">
        <!-- ICON HAMBURGUESA -->
        <div click="" class="icon-hamburguesa centrar-vertical-center centrar-horizontal-center">
          <i class="bx bxs-grid-alt"></i>
        </div>
        <router-link to="/"><img src="../../../img/logo_primario.png" alt=""></router-link>
      </div>

      <div class="search">
        <router-link to="/contactenos" class="btn-header">COMUNICATE CON NOSOTROS AQUI</router-link>
      </div>
    </header>


    <!-- MENU -->
    <nav>
      <div class="icon-close-menu">
        <i class="bx bxs-caret-left-circle"></i>
      </div>
      <ul class="menu">
        <li>
          <router-link to="/">INICIO</router-link>
        </li>
        <li>
          <router-link to="/tres-grandes">TRES GRANDES</router-link>
        </li>
        <li>
          <router-link to="/ciclistas">CICLISTAS</router-link>
        </li>
        <li>
          <div class="content_socials">
            <strong>Redes sociales</strong>
            <div class="content_icons_socials">
              <a target="_blank" href="https://instagram.com/colombiatierradeescarabajos?igshid=NzZlODBkYWE4Ng=="> <i
                  class="bx bxl-instagram"></i></a>
              <a target="_blank" href="https://x.com/CEscarabajos?t=o3Ok_wsC_mTRV2AU8ui8yg&s=09"> <i
                  class="bx bxl-twitter"></i></a>
              <a target="_blank" href="https://www.youtube.com/@Tierracycling"> <i class="bx bxl-youtube"></i></a>
              <a target="_blank" href="https://www.facebook.com/colombiatierradeescarabajos?mibextid=ZbWKwL"> <i
                  class="bx bxl-facebook"></i></a>
            </div>

          </div>
        </li>
      </ul>
    </nav>

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
export default {
  components:{

  }
}
</script>
