window.onload = function () {
    document.getElementById("export")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("resume");
            console.log(invoice);
            console.log(window);
            var opt = {
               
                filename: 'Soumalya_Chowdhury.pdf',
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}