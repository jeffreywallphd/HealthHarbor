const { AutoModelForCausalLM } = require("@huggingface/node-library");

async function main() {
    // Set gpu_layers to the number of layers to offload to GPU. Set to 0 if no GPU acceleration is available on your system.
    const llm = await AutoModelForCausalLM.fromPretrained({
        pretrainedConfigArchiveMap: {
            mistral: "TheBloke/Mistral-7B-Instruct-v0.1-GGUF"
        },
        modelFile: "mistral-7b-instruct-v0.1.Q4_K_M.gguf",
        modelType: "mistral",
        gpuLayers: 0
    });

    const inputText = "What is meantal health? How can i take care of my mental health?";
    const output = await llm(inputText);
    console.log(output);
}

main();
