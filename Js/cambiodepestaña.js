document.addEventListener("DOMContentLoaded", function () {
    // Detectar cambios de visibilidad
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            document.title = "¡No te vayas :(";
        } else {
            // Detectar la sección activa y cambiar el título en consecuencia
            const activeSection = document.querySelector(".active-section");
            if (activeSection) {
                switch (activeSection.id) {
                    case "home":
                        document.title = "HOME";
                        break;
                    case "Proyecto1": // Corregí el ID (sin espacios)
                        document.title = "Proyecto 1";
                        break;
                    case "Proyecto2": // Corregí el ID (sin espacios)
                        document.title = "Proyecto 2";
                        break;
                    case "contact":
                        document.title = "Contacto";
                        break;
                    case "Listado":
                        document.title = "Listado";
                        break;
                    default:
                        document.title = "Bienvenido"; // Título por defecto
                }
            } else {
                document.title = "Bienvenido"; // Si no hay sección activa
            }
        }
    });
});
