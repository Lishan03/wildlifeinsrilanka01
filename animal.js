const main={

}
fetch ('animal.json')
            .then (response => response.json())
            .then (data =>{
                 main.animaltopic1 = data.animaltopic1;
                 main.animalpara1 = data.animalpara1;
                 main.animals1 = data.animals1;
                 main.animas1para = data.animas1para;
                 main.animals2 = data.animals2;
                 main.animals2para = data.animals2para;
                 main.animals3 = data.animals3;
                 main.animals3para =data.animals3para;
                 main.animals4 = data.animals4;
                 main.animals4para = data.animals4para;
                 main.animals5 = data.animals5;
                 main.animls5para = data.animls5para;
                 main.animals6 = data.animals6;
                 main.animals6para = data.animals6para;
                 main.animals7 = data.animals7;
                 main.animals7para = data.animals7para;
                 main.animals8 = data.animals8;
                 main.animals8para = data.animals8para;
                 main.footertop = data.footertop;
                 main.footerpara = data.footerpara;
                 main.footlink = data.footlink;

                 
                 localStorage.setItem("animaltopic1",data.animaltopic1);
                 localStorage.setItem("animalpara1",data.animalpara1);
                 localStorage.setItem("animals1",data.animals1);
                 localStorage.setItem("animas1para",data.animas1para);
                 localStorage.setItem("animals2",data.animals2 );
                 localStorage.setItem("animals2para",data.animals2para);
                 localStorage.setItem("animals3",data.animals3);
                 localStorage.setItem("animals3para",data.animals3para);
                 localStorage.setItem("animals4",data.animals4);
                 localStorage.setItem("animals4para",data.animals4para);
                 localStorage.setItem("animals5",data.animals5);
                 localStorage.setItem("animls5para",data.animls5para);
                 localStorage.setItem("animals6",data.animals6);
                 localStorage.setItem("animals6para",data.animals6para);
                 localStorage.setItem("animals7",data.animals7);
                 localStorage.setItem("animals7para",data.animals7para);
                 localStorage.setItem("animals8 ",data.animals8);
                 localStorage.setItem("animals8para",data.animals8para);
                 localStorage.setItem("footertop",data.footertop);
                 localStorage.setItem("footerpara",data.footerpara);
                 localStorage.setItem("footlink",data.footlink);

            })

            function toggleMenu() {
               var navLinks = document.querySelector('.nav-links');
               navLinks.classList.toggle('active');
           }