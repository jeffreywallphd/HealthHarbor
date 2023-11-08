import openai

openai.api_key = '...'  # insert api key here

# instructions for how the chatbot should behave
messages = [{'role': 'system', 'content': 'You should act as a mental health therapist for the user.'}]

# conversation loop
print('This is an AI chat therapist. Feel free to ask it a question below.')
while True:
    user_in = input('User: ')
    messages.append({'role': 'user', 'content': user_in})

    response = openai.ChatCompletion.create(
        model='gpt-3.5-turbo',
        max_tokens=100,  # token limit so the response is not excessively long. May want to tweak
        messages=messages
    )
    messages.append({'role': 'assistant', 'content': response['choices'][0]['message']['content']})
    print('Bot: {}'.format(response['choices'][0]['message']['content']))
