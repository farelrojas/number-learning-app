from google.cloud import texttospeech

# Initialize the client
client = texttospeech.TextToSpeechClient()

# Set the text input to be synthesized
for number in range(101):
    synthesis_input = texttospeech.SynthesisInput(text=str(number))

    # Build the voice request, select the language code ("de-DE") and the ssml voice gender
    voice = texttospeech.VoiceSelectionParams(
        language_code="de-DE", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )

    # Select the type of audio file you want returned
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    # Perform the text-to-speech request on the text input with the selected voice parameters and audio file type
    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    # The response's audio_content is binary
    with open(f"audio/{number}.mp3", "wb") as out:
        # Write the response to the output file.
        out.write(response.audio_content)
        print(f'Audio content written to file "audio/{number}.mp3"')
