const { HfInference } = require('@huggingface/inference');

const HF_TOKEN = 'insert_token_here'; // Replace with your actual token

const inference = new HfInference(HF_TOKEN);

const prompt = "What is mental health? How can I take care of my mental health?";

async function generateText(prompt) {
  const response = await inference.textGeneration({
    model: 'mistralai/Mistral-7B-v0.1',
    inputs: prompt,
    parameters: {
      max_new_tokens: 300,
      num_beams:10,
    no_repeat_ngram_size:10,
    early_stopping:true,
    //   do_sample: true,
    //   top_p: 0.5,
    //   temperature: 0.5,
    },
    options: {
      use_cache: false,
      wait_for_model: true,
    },
  });

//   console.log(response);
  return response.generated_text;
}


generateText(prompt)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });