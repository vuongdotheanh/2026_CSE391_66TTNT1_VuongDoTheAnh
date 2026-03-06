let count = 0;
document.getElementById("giam").addEventListener("click", function() {
    count -= 1;
    document.getElementById("count").innerText = count;
});