<script>
      var vitrine1 = "estantes_polishop.html"
      var vitrine2 = "";
      var vitrine3 = "";
      var vitrine4 = "";
      var vitrine5 = "";
      var vitrine6 = "";
      AFRAME.registerComponent("botao_entrar1", {
        init: function() {
          this.el.addEventListener("mouseenter", (e) => {
            let mouse = document.querySelector("#mouser_normal")
            let mouse_carregando = document.querySelector("#mouser_loading")
            console.log(vitrine1)
            mouse.setAttribute("visible", false)
            mouse_carregando.setAttribute("visible", true)
            temporizador_clique = setTimeout(function(){ window.location.href = vitrine1; }, 1500);
            console.log("iniciou o temporizador")
          })
          this.el.addEventListener("mouseleave", (e) => {
            let mouse = document.querySelector("#mouser_normal")
            let mouse_carregando = document.querySelector("#mouser_loading")
            mouse.setAttribute("visible", true)
            mouse_carregando.setAttribute("visible", false)
            console.log(temporizador_clique)
            clearTimeout(temporizador_clique)
          })
        }
      })
    </script>
    <script id="link" type="text/html">
        <a-entity class="link"
          geometry="primitive: plane; height: 6; width: 6"
          material="shader: flat; src: ${thumb}"
          event-set__mouseleave="scale: 1 1 1"
          event-set__click="_target: #image-360; _delay: 300; material.src: ${src}"
          proxy-event="event: click; to: #image-360; as: fade"></a-entity>
    </script>
    <script id="button" type="text/html">
        <a-entity class="link"
          geometry="primitive: plane; height: 6; width: 6"
          material="shader: flat; src: ${thumb}"
          event-set__mouseenter="scale: 1.2 1.2 1"
          event-set__mouseleave="scale: 1 1 1"
          event-set__click="_target: #image-360; _delay: 300; material.src: ${src}"
          proxy-event="event: click; to: #image-360; as: fade"></a-entity>
      </script>
