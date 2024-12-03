document.getElementById("quiz_submit").addEventListener("click", quiz_result)
document.getElementById("quiz_submit").addEventListener("click", reloading_function)

function quiz_result(){
    var points = 0;
    if(document.getElementById("1_b").checked){
        points += 1;
    }
    if(document.getElementById("2_c").checked){
        points += 1;
    }
    if(document.getElementById("3_a").checked){
        points += 1;
    }
    if(document.getElementById("4_a").checked){
        points += 1;
    }
    if(document.getElementById("5_b").checked){
        points += 1;
    }
    if(document.getElementById("6_c").checked){
        points += 1;
    }
    if(document.getElementById("7_a").checked){
        points += 1;
    }
    if(document.getElementById("8_b").checked){
        points += 1;
    }
    if(document.getElementById("9_b").checked){
        points += 1;
    }
    if(document.getElementById("10_c").checked){
        points += 1;
    }
    if(document.getElementById("11_a").checked){
        points += 1;
    }
    if(document.getElementById("12_a").checked){
        points += 1;
    }
    if(document.getElementById("13_c").checked){
        points += 1;
    }
    if(document.getElementById("titkoskod").value == "8859770666134"){
        points += 1;
    }

    points = String(points)

    document.getElementById("results").innerHTML = "A pontszáma: " + points
}

function reloading_function() {
    // Set a timer to reload the page after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        location.reload();  // Reload the page
    }, 5000);
}