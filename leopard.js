const main ={

}

fetch('leopard.json')
            .then(response => response.json())
            .then(data => {
                 main.leotopic1 = data.leotopic1;
                 main.leopara1 = data.leopara1;
                 main.leotopic2 = data.leotopic2;
                 main.leosubtopic1 = data.leosubtopic1;
                 main.leopara2 = data.leopara2;
                 main.leosubtopic2 = data.leosubtopic2;
                 main.leopara3 = data.leopara3;
                 main.leosubtopic3 = data.leosubtopic3;
                 main.leopara4 = data.leopara4;
                 main.footertop = data.footertop;
                 main.footerpara = data.footerpara;
                 main.footlink = data.footlink;


                localStorage.setItem("leotopic1",data.leotopic1);
                localStorage.setItem("leopara1",data.leopara1);
                localStorage.setItem("leotopic2",data.leotopic2);
                localStorage.setItem("leosubtopic1",data.leosubtopic1);
                localStorage.setItem("leopara2",data.leopara2);
                localStorage.setItem("leosubtopic2",data.leosubtopic2);
                localStorage.setItem("leopara3",data.leopara3);
                localStorage.setItem("leosubtopic3",data.eosubtopic3);
                localStorage.setItem("leopara4",data.leopara4);
                localStorage.setItem("footertop",data.footertop);
                 localStorage.setItem("footerpara",data.footerpara);
                 localStorage.setItem("footlink",data.footlink);
               
            })

            function toggleMenu() {
               var navLinks = document.querySelector('.nav-links');
               navLinks.classList.toggle('active');
           }