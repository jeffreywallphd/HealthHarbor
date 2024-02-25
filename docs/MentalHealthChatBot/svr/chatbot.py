import openai

openai.api_key = '' # OpenAI API key Here

messages = [{'role': 'system', 'content': 'You should act as a mental health therapist for the user.'}]

print('This is an AI chat therapist. Feel free to ask it a question below.')
while True:
    user_in = input('User: ')
    messages.append({'role': 'user', 'content': user_in})

    response = openai.ChatCompletion.create(
        model='gpt-3.5-turbo',
        max_tokens=100,
        messages=messages
    )
    messages.append({'role': 'assistant', 'content': response['choices'][0]['message']['content']})
    print('Bot: {}'.format(response['choices'][0]['message']['content']))

