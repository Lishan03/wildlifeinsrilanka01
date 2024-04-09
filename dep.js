const main = {

}

fetch('department.json')
            .then(response => response.json())
            .then(data => {
                main.deptopic1 = data.deptopic1;
                main.deppara1 = data.deppara1;
                main.deptopic2 = data.deptopic2;
                main.footertop = data.footertop;
                main.footerpara = data.footerpara;
                main.footlink = data.footlink;


                localStorage.setItem("deptopic1",data.deptopic1);
                localStorage.setItem("deppara1",data.deppara1);
                localStorage.setItem("deptopic2",data.deptopic2);
                localStorage.setItem("footertop",data.footertop);
                localStorage.setItem("footerpara",data.footerpara);
                localStorage.setItem("footlink",data.footlink);

            })


            function toggleMenu() {
                var navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('active');
            }