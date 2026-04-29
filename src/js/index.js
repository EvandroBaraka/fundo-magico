function setLoading(isLoading) {
    const btnGenerate = document.getElementById("generate-btn");

    if (isLoading) {
        btnGenerate.disabled = true;
        btnGenerate.textContent = "Gerando Background...";
    } else {
        btnGenerate.disabled = false;
        btnGenerate.textContent = "Gerar Background";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-group");
    const textArea = document.getElementById("description");
    const htmlCode = document.getElementById("html-code");
    const cssCode = document.getElementById("css-code");
    const preview = document.getElementById("preview-section");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const description = textArea.value.trim();

        if (!description) return;

        setLoading(true);

        try {
            const response = await fetch(
                "https://evandrog.app.n8n.cloud/webhook/gerador-fundo",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ description }),
                },
            );

            const data = await response.json();
            
            htmlCode.textContent = data.code || "";
            cssCode.textContent = data.style || "";

            preview.style.display = "block";
            preview.innerHTML = data.code || "";

            let styleTag = document.getElementById("dynamic-style");
            if (styleTag) styleTag.remove();

            if (data.style) {
                styleTag = document.createElement("style");
                styleTag.id = "dynamic-style";
                styleTag.textContent = data.style;
                document.head.appendChild(styleTag);
            }
        } catch (error) {
            console.error("Erro ao gerar background:", error);
            htmlCode.textContent = "Erro ao gerar background.";
            cssCode.textContent = "";
            preview.innerHTML = "";
        } finally {
            setLoading(false);
        }
    });
});
