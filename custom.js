var voteCount = {
    Khufra : 0,
    Atlas : 0,
    Balmond : 0,
    Tigreal : 0,
    Lolita : 0,
    Gatotkaca : 0,
    Belerick : 0,
    Grock : 0,
    Uranus : 0,
    Minotaur : 0,
};

$(document).ready(
    function(){
        $("#p1").click(
            function(){
                console.log("Khufra")
                voteCount.Khufra++;
                $("#p1vote").html(voteCount.Khufra);            
            }
        );

        $("#p2").click(
            function(){
                console.log("Atlas");
                voteCount.Atlas++;
                $("#p2vote").html(voteCount.Atlas);            
            }
        );

        $("#p3").click(
            function(){
                console.log("Balmond");
                voteCount.Balmond++;
                $("#p3vote").html(voteCount.Balmond);            
            }
        );

        $("#p4").click(
            function(){
                console.log("Tigreal");
                voteCount.Tigreal++;
                $("#p4vote").html(voteCount.Tigreal);            
            }
        );

        $("#p5").click(
            function(){
                console.log("Lolita");
                voteCount.Lolita++;
                $("#p5vote").html(voteCount.Lolita);            
            }
        );

        $("#p6").click(
            function(){
                console.log("Gatotkaca");
                voteCount.Gatotkaca++;
                $("#p6vote").html(voteCount.Gatotkaca);            
            }
        );

        $("#p7").click(
            function(){
                console.log("Belerick");
                voteCount.Belerick++;
                $("#p7vote").html(voteCount.Belerick);            
            }
        );

        $("#p8").click(
            function(){
                console.log("Grock");
                voteCount.Grock++;
                $("#p8vote").html(voteCount.Grock);            
            }
        );

        $("#p9").click(
            function(){
                console.log("Uranus");
                voteCount.Uranus++;
                $("#p9vote").html(voteCount.Uranus);            
            }
        );

        $("#p10").click(
            function(){
                console.log("Minotaur");
                voteCount.Minotaur++;
                $("#p10vote").html(voteCount.Minotaur);            
            }
        );
    }
)

