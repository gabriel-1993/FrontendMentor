const notiList = [
  {
    id: 1,
    usuario: "Mark Webber",
    imagen: "./assets/images/avatar-mark-webber.webp",
    postReciente: "reacted to your recent post",
    seguirdorNuevo: "followed you",
    seUnioAtuGrupo: "has joined your group",
    tuGrupo: "Chess Club",
    notMsjPriv: "sent you a private message",
    msjPriv:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    comImg: "Commented on your picture",
    imgNot: "./assets/images/image-chess.webp",
  },
  {
    id: 2,
    nombre: "Positano",
    imagen: "./assets/img/italia.jpg",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "Europa",
  },
  {
    id: 3,
    nombre: "Brasil",
    imagen: "./assets/img/brasil.jpg",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "America",
  },
  {
    id: 4,
    nombre: "Venecia",
    imagen: "./assets/img/venecia.avif",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "Europa",
  },
  {
    id: 5,
    nombre: "Venezuela",
    imagen: "./assets/img/venezuela.jpg",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "America",
  },
  {
    id: 6,
    nombre: "Perito Moreno",
    imagen: "./assets/img/patagonia.jpg",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "Argentina",
  },
  {
    id: 7,
    nombre: "Misiones",
    imagen: "./assets/img/cataratas.jpg",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "Argentina",
  },
  {
    id: 8,
    nombre: "Bariloche",
    imagen: "./assets/img/bariloche.jpg",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "Argentina",
  },
  {
    id: 9,
    nombre: "Barcelona",
    imagen: "./assets/img/barcelona.jpg",
    precio: 845,
    descripcion: "7 dias y 6 noches,incluye impuestos, tasas y cargos",
    category: "Europa",
  },
];

// RENDERIZAR NOTIFICACIONES : TEMPLATE CARDS
const cardTemplate = (destino) => {
  return `
    <div class="card-destino">
      <img src="${destino.imagen}" class="dimg"/>
        <div class="card-destino-down">
            <h3>${destino.nombre}</h3>
            <div class="down-items">
            <div class="down-items-1">
            <p class="pDescripcion">${destino.descripcion}</p>
            <p class="pPrecioPersona">Precio por persona</p>
            <span> $${destino.precio}</span>
            </div>
            <button class="btn btn-add"
                    data-id="${destino.id}"
                    data-nombre="${destino.nombre}"
                    data-precio="${destino.precio}"
                    data-imagen="${destino.imagen}"
                    data-descripcion="${destino.descripcion}"
                    >Agregar</button>
        </div>
      </div>
    </div>
    `;
};
const destinosTodos = destinosList.map(cardTemplate);
