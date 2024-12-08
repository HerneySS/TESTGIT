<template>
  
    <main>

      <!-- TITULOS -->
    <div :style="'background-image: url(../img/imagen_ciclista.png)'" class="w-full h-[450px]">
        <div>
          <span :style="'font-family: Magistral-Bold, sans-serif'" class="text-7xl">TIERRA</span>
        </div>
        <div>
          <span class="text-9xl font-semibold text-amber-400">CYCLING</span>
        </div>
        <div class="">
          <div>
            <a target="_blank" class="bg-red-600 text-white border-none rounded-md text-sm py-0.5 px-3 mt-14" href="contactenos.html">HAZ CLIC AQUÍ</a>
          </div>
          <div>
            <span class="mt-1 text-[8px] font-semibold">CONOCE MAS DE NOSOTROS</span>
          </div>
        </div>
      </div>


      <!-- LISTA DE NOTICIAS -->
      <div class="cards-noticias">
        <!-- Tarjetas de noticias -->
        <div class="card noticia1">
          <div class="">
            <div>
              <a target="_blank"
                href="https://ciclismointernacional.com/en-bora-abren-el-paraguas-de-cara-al-tour-vingegaard-y-pogacar-tienen-mas-experiencia-corriendo-con-sus-companeros/"
                class="color-botton-noticia" >VER NOTICIA</a>
            </div>
            <div class="span-card-noticia">
              En BORA abren el paraguas de cara al Tour: "Vingegaand y Pogacar tienen más experiencia corriendo con sus
              compañeros"
            </div>
          </div>
        </div>


        <div class="card">
          <iframe style="width: 100%;" width="560" height="315" src="https://www.youtube.com/embed/8Y1-bWnIVwM?si=2-3eIcLjcRAHEDEF"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div class="card noticia2">
          <div class="">
            <div>
              <a class="color-botton-noticia" >VER NOTICIA</a>
            </div>
            <div class="span-card-noticia">
              En BORA abren el paraguas de cara al Tour: "Vingegaand y Pogacar tienen más experiencia corriendo con sus
              compañeros"
            </div>
          </div>
        </div>
        <div class="card noticia3">
          <div class="">
            <div>
              <a target="_blank"
                href="https://ciclismointernacional.com/nairo-quintana-baja-de-ultima-hora-en-los-juegos-nacionales-de-colombia/"
                class="color-botton-noticia" >VER NOTICIA</a>
            </div>
            <div class="span-card-noticia">
              Nairo Quintana, baja de última hora en los Juegos Nacionales de Colombia
            </div>
          </div>
        </div>
      </div>
    </main>
</template>


<script>
export default {
  data() {
    return {
      'noticias': [
        {
          'href': '',
          'href': '',
        }
      ],
    }
  },
  components:{}
}
</script>
