# Source: https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.1-GGUF

from ctransformers import AutoModelForCausalLM

# Set gpu_layers to the number of layers to offload to GPU. Set to 0 if no GPU acceleration is available on your system.

llm = AutoModelForCausalLM.from_pretrained("TheBloke/Mistral-7B-Instruct-v0.1-GGUF", model_file="mistral-7b-instruct-v0.1.Q4_K_M.gguf", model_type="mistral", gpu_layers = 0)

print(llm("What is meantal health? How can i take care of my mental health?"))