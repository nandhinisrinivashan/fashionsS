

        var bnow=document.getElementById("sizepop1");
        var bnow1=document.querySelectorAll(".sizepop11")
        function big(){
            bnow.style.display="block"
         }

         var non =document.querySelectorAll(".btn")
         var non1=document.getElementById("sizepop1")
         function funn(){
            non1.style.display="none"
         }

         var bnow12=document.getElementById("sizepop12");
        var bnow122=document.querySelectorAll(".sizepop11")
        function big12(){
            bnow12.style.display="block"
         }

         var non22 =document.querySelectorAll(".btn12")
         var non12=document.getElementById("sizepop12")
         function funn12(){
            non12.style.display="none"
         }

         var bnow32=document.getElementById("sizepop32");
        var bnow322=document.querySelectorAll(".sizepop11")
        function big32(){
            bnow32.style.display="block"
         }

         var non222 =document.querySelectorAll(".btn32")
         var non132=document.getElementById("sizepop32")
         function funn32(){
            non132.style.display="none"
         }


    
         var bnow42=document.getElementById("sizepop42");
        var bnow342=document.querySelectorAll(".sizepop11")
        function big42(){
            bnow42.style.display="block"
         }

         var non422 =document.querySelectorAll(".btn42")
         var non142=document.getElementById("sizepop42")
         function funn42(){
            non142.style.display="none"
         }



        var to = document.getElementById("cmmt");
        var cmmt11 = document.getElementById("cmmt1");
        var cmmtvar = "";
        function forcmmt() {
            var one2 = to.value;
            if (one2 === null || one2.trim() === '') {
                cmmtvar = "no comments yet";
            } else {
                cmmtvar = "you: " + one2;
                alert("Message added")
            }
            cmmt11.textContent = cmmtvar;
        }


       
        function forcmmt1() {
            var to1 = document.getElementById("cmmt11");
        var cmmt111 = document.getElementById("cmmt12");
        var cmmtvar1 = "";
            var one3 = to1.value;
            if (one3 === null || one3.trim() === '') {
                cmmtvar1 = "no comments yet";
            } else {
                cmmtvar1 = "you: " + one3;
                alert("Message added")
            }
            cmmt111.textContent = cmmtvar1;
        }

        function forcmmt12() {
            var to12 = document.getElementById("cmmt112");
        var cmmt1112 = document.getElementById("cmmt122");
        var cmmtvar12 = "";
            var one4 = to12.value;
            if (one4 === null || one4.trim() === '') {
                cmmtvar12 = "no comments yet";
            } else {
                cmmtvar12 = "you: " + one4;
                alert("Message added")
            }
            cmmt1112.textContent = cmmtvar12;
        }


        function forcmmt123() {
            var to123 = document.getElementById("cmmt1123");
        var cmmt11123 = document.getElementById("cmmt1223");
        var cmmtvar123 = "";
            var one43 = to123.value;
            if (one43 === null || one43.trim() === '') {
                cmmtvar123 = "no comments yet";
            } else {
                cmmtvar123 = "you: " + one43;
                alert("Message added")
            }
            cmmt11123.textContent = cmmtvar123;
        }

     function con1(){
        var one=document.getElementById("content1")
        one.removeAttribute("class","width")
     }
        function con(){
            var one=document.getElementById("content1")
            one.setAttribute("class","width")
        }

        function con12(){
            var one2=document.getElementById("content12")
            one2.setAttribute("class","width1")
        }
        function con122(){
        var one2=document.getElementById("content12")
        one2.removeAttribute("class","width1")
     }

     function con13(){
            var one34=document.getElementById("content123")
            one34.setAttribute("class","width2")
        }
        function con133(){
        var one34=document.getElementById("content123")
        one34.removeAttribute("class","width2")
     }

     function con4(){
            var one44=document.getElementById("content1234")
            one44.setAttribute("class","width3")
        }
        function con144(){
        var one44=document.getElementById("content1234")
        one44.removeAttribute("class","width3")
     }
    