const main= {
    
}
fetch('introduction.json')
            .then(response => response.json())
            .then(data => {
                 main.introdtopic1 = data.introdtopic1;
                 main.introdpara1 = data.introdpara1;
                 main.introdtopic2 = data.introdtopic2;
                 main.introdpara2 = data.introdpara2;
                 main.introdtopic3 = data.introdtopic3;
                 main.introdpara3 = data.introdpara3;
                 main.introtopic4 = data.introtopic4;
                 main.introdpara4 = data.introdpara4;
                 main.footertop = data.footertop;
                 main.footerpara = data.footerpara;
                 main.footlink = data.footlink;

                 localStorage.setItem("introdtopic1",data.introdtopic1);
                 localStorage.setItem("introdpara1",data.introdpara1);
                 localStorage.setItem("introdtopic2",data.introdtopic2);
                 localStorage.setItem("introdpara2",data.introdpara2);
                 localStorage.setItem("introdtopic3",data.introdtopic3);
                 localStorage.setItem("introdpara3",data.introdpara3);
                 localStorage.setItem("introtopic4",data.introtopic4);
                 localStorage.setItem("introdpara4",data.introdpara4);
                 localStorage.setItem("footertop",data.footertop);
                 localStorage.setItem("footerpara",data.footerpara);
                 localStorage.setItem("footlink",data.footlink);

                 localStorage.setItem("introduction",JSON.stringify(data));

            })



            function toggleMenu() {
               var navLinks = document.querySelector('.nav-links');
               navLinks.classList.toggle('active');
           }
          