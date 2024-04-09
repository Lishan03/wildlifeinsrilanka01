const main = {

}
 // Fetch the JSON data
fetch('index.json')
            .then(response => response.json())
            .then(data => {
                 main.subtopic = data.subtopic;
                 main.hpara1 = data.hpara1;
                 main.hpara2 = data.hpara2;
                 main.maintopic = data.maintopic;
                 main.mainsub = data.mainsub;
                 main.footertop = data.footertop;
                 main.footerpara = data.footerpara;
                 main.footlink = data.footlink;

                 localStorage.setItem("subtopic",data.subtopic);
                 localStorage.setItem("hpara1",data.hpara1);
                 localStorage.setItem("hpara2",data.hpara2);
                 localStorage.setItem("maintopic",data.maintopic);
                 localStorage.setItem("mainsub",data.mainsub);
                 localStorage.setItem("footertop",data.footertop);
                 localStorage.setItem("footerpara",data.footerpara);
                 localStorage.setItem("footlink",data.footlink);
            })

            .catch(error => console.error('Error fetching data:', error));



            function toggleMenu() {
               var navLinks = document.querySelector('.nav-links');
               navLinks.classList.toggle('active');
           }
           


