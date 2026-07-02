const widgetGeneratorInput = document.querySelector("#widgetGeneratorInput");
const widgetGeneratorButton = document.querySelector("#widgetGeneratorButton");
const widgetGeneratorSource = document.querySelector("#widgetGeneratorSource");

const template = widgetGeneratorSource.textContent;

widgetGeneratorButton.addEventListener('click', () => {
    const values = {
        address: encodeURIComponent(widgetGeneratorInput.value)
    };
    
    widgetGeneratorSource.textContent = template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
})