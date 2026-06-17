const sekbidData = {

  1: {
    nama: "Pembinaan Keimanan dan Ketakwaan",

    ketua: {
      nama: "Ahmad Fauzi",
      foto: "assets/images/default-profile.jpg"
    },

    anggota: [
      "Budi",
      "Rian",
      "Salsa",
      "Putri",
      "Nabila"
    ]
  },

  2: {
    nama: "Kehidupan Berbangsa dan Bernegara",

    ketua: {
      nama: "Dimas",
      foto: "assets/images/default-profile.jpg"
    },

    anggota: [
      "Aldi",
      "Fahri",
      "Putra",
      "Raka",
      "Nina"
    ]
  }

};

const modal =
document.getElementById("sekbidModal");

const modalBody =
document.getElementById("modalBody");

document.querySelectorAll(".detail-btn")
.forEach(button => {

button.addEventListener("click", () => {

const id = button.dataset.sekbid;

const data = sekbidData[id];

let anggotaHTML = "";

data.anggota.forEach(nama => {

anggotaHTML += `
<div class="anggota-card">
<img src="assets/images/default-profile.jpg">
<h4>${nama}</h4>
</div>
`;

});

modalBody.innerHTML = `

<div class="modal-header">
<h2>${data.nama}</h2>
</div>

<div class="ketua-bidang">

<img src="${data.ketua.foto}">

<h3>${data.ketua.nama}</h3>

<p>Ketua Bidang</p>

</div>

<h3>Anggota</h3>

<div class="anggota-grid">

${anggotaHTML}

</div>

`;

modal.style.display = "block";

});

});

document
.querySelector(".close-modal")
.addEventListener("click", () => {

modal.style.display = "none";

});

window.addEventListener("click", e => {

if(e.target === modal){

modal.style.display = "none";

}

});