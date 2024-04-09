const main = {

}
fetch('yala.json')
            .then (response => response.json())
            .then (data =>{
                 main.yalatopic01 = data.yalatopic01;
                 main.yalasubtopic1 = data.yalasubtopic1;
                 main.yalapara01 = data.yalapara01;
                 main.yalapara02 = data.yalapara02;
                 main.yalagallery = data.yalagallery;
                 main.footertop = data.footertop;
                 main.footerpara = data.footerpara;
                 main.footlink = data.footlink;

                 localStorage.setItem("yalatopic01",data.yalatopic01);
                 localStorage.setItem("yalasubtopic1",data.yalasubtopic1);
                 localStorage.setItem("yalapara01",data.yalapara01);
                 localStorage.setItem("yalapara02",data.yalapara02);
                 localStorage.setItem("yalagallery",data.yalagallery);
                 localStorage.setItem("footertop",data.footertop);
                 localStorage.setItem("footerpara",data.footerpara);
                 localStorage.setItem("footlink",data.footlink);

            })

            function toggleMenu() {
               var navLinks = document.querySelector('.nav-links');
               navLinks.classList.toggle('active');
           }
