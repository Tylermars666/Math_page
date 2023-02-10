function mostrarSisas(){

    document.getElementById("contenedor_visible").style.display = "none";
    document.getElementById("contenedor_si").style.display = "block";

    const typingText = document.getElementById("titulo_invisible_yes");
    const text = typingText.textContent;
    typingText.textContent = "";

    let i = 0;
    const typingInterval = setInterval(() => {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
    } else {
        clearInterval(typingInterval);
    }
    }, 50);


}

function mostrarNonas(){

    document.getElementById("contenedor_visible").style.display = "none";
    document.getElementById("contenedor_no").style.display = "block";

}