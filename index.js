document.addEventListener("DOMContentLoaded", function () {
    // Tu código JavaScript aquí
    const form = document.getElementById("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let lastName = document.getElementById("lastName").value;
        let born = document.getElementById("born").value;

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                'Nombre': name,
                'Apellido': lastName,
                'Fecha de Nacimiento': born
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    });
});
