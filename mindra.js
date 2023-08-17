document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitBtn");
    const problemTextArea = document.getElementById("problem");

    submitButton.addEventListener("click", function () {
        const problemText = problemTextArea.value;
        if (problemText) {
            alert("Terima kasih! Konsultasi Anda telah diterima.");
            problemTextArea.value = "";
        } else {
            alert("Silakan tuliskan masalah Anda terlebih dahulu.");
        }
    });
});