const main = {

}

fetch('wilpattu.json')
            .then (response => response.json())
            .then (data =>{
                 main.wilpattutopic01 = data.wilpattutopic01;
                 main.wilpattusubtopic01 = data.wilpattusubtopic01;
                 main.wilpattupara01 = data.wilpattupara01;
                 main.wilpattupara02 = data.wilpattupara02;
                 main.wilpattugallery = data.wilpattugallery;
                 main.footertop = data.footertop;
                 main.footerpara = data.footerpara;
                 main.footlink = data.footlink;



                 localStorage.setItem("wilpattutopic01",data.wilpattutopic01 );
                 localStorage.setItem("wilpattusubtopic01",data.wilpattusubtopic01);
                 localStorage.setItem("wilpattupara01",data.wilpattupara01);
                 localStorage.setItem("wilpattupara02",data.wilpattupara02);
                 localStorage.setItem("wilpattugallery",data.wilpattugallery);
                 localStorage.setItem("footertop",data.footertop);
                 localStorage.setItem("footerpara",data.footerpara);
                 localStorage.setItem("footlink",data.footlink);


            })

            function toggleMenu() {
               var navLinks = document.querySelector('.nav-links');
               navLinks.classList.toggle('active');
           }