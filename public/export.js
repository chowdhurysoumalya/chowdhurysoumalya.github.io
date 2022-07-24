window.onload = function () {
    document.getElementById("export")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("resume");           
            var opt = {
               
                filename: 'Soumalya_Chowdhury.pdf',
                html2canvas: { scale: 1.5 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}