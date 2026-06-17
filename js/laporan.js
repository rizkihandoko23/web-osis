const laporanData = {

    1:{
        event:"LDKS 2026",
        total:"Rp 3.500.000",

        rincian:[
            {
                item:"Konsumsi",
                nominal:"Rp 1.000.000"
            },
            {
                item:"Sertifikat",
                nominal:"Rp 500.000"
            },
            {
                item:"ATK",
                nominal:"Rp 300.000"
            },
            {
                item:"Banner",
                nominal:"Rp 200.000"
            },
            {
                item:"Dokumentasi",
                nominal:"Rp 1.500.000"
            }
        ]
    },

    2:{
        event:"Pentas Seni",
        total:"Rp 5.000.000",

        rincian:[
            {
                item:"Panggung",
                nominal:"Rp 2.000.000"
            },
            {
                item:"Sound System",
                nominal:"Rp 1.500.000"
            },
            {
                item:"Banner",
                nominal:"Rp 500.000"
            },
            {
                item:"Konsumsi",
                nominal:"Rp 1.000.000"
            }
        ]
    }

};

const modal =
document.getElementById("laporanModal");

const modalBody =
document.getElementById("modalBody");

document
.querySelectorAll(".detail-btn")
.forEach(button => {

    button.addEventListener("click",()=>{

        const id =
        button.dataset.event;

        const data =
        laporanData[id];

        let rows = "";

        data.rincian.forEach(item=>{

            rows += `
            <tr>
                <td>${item.item}</td>
                <td>${item.nominal}</td>
            </tr>
            `;

        });

        modalBody.innerHTML = `

        <h2>${data.event}</h2>

        <table class="rincian-table">

            <thead>

                <tr>
                    <th>Keterangan</th>
                    <th>Nominal</th>
                </tr>

            </thead>

            <tbody>

                ${rows}

                <tr class="total-row">

                    <td>Total</td>

                    <td>${data.total}</td>

                </tr>

            </tbody>

        </table>

        `;

        modal.style.display = "block";

    });

});

document
.querySelector(".close-modal")
.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});