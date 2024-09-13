//Call Objs
let IdUser = document.getElementById("IdUser");
let Content = document.getElementById("Content");

fetch("https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/Clase")
    .then(Res => Res.json())
    .then(Data =>{
        Data.forEach(Datos => {
            Content.innerHTML += 
            `
            <div class="User" id="User">
                <div class="Img">
                    <img id="UserImg" src="${Datos.avatar}">
                </div>
                <div class="Text">
                    <h1 id="NameUser">${Datos.name_full}</h1>
                    <p id="TextUser">${Datos.description}</p>
                </div>
            </div>
            `
        });
        IdUser.addEventListener("input",(e)=>{
            if (e.target.matches("#IdUser")){
                document.querySelectorAll("#User").forEach(Persona =>{            
                    Persona.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                    ?Persona.classList.remove("filtro")
                    :Persona.classList.add("filtro")
                });
            };
        });
    });


    