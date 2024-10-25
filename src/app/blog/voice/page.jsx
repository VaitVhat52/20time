"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Markdown from "react-markdown";
import supabase from "../../../../utils/client";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const page = () => {
  // const [title, setTitle] = useState();
  // const [body, setBody] = useState();
  // const [dateData, setDateData] = useState();

  // const day = dateData?.getDate();
  // const month = dateData?.toLocaleString("default", { month: "long" });
  // const year = dateData?.getFullYear();
  // const date = month + " " + Number(day + 1) + ", " + year;

  // const params = useParams().id;

  // async function fetchBlogData() {
  //   const { data, error } = await supabase
  //     .from("blog")
  //     .select()
  //     .match({
  //       link: `${params}`,
  //     });
  //   setTitle(data[0]?.title);
  //   setBody(data[0]?.content);
  //   setDateData(new Date(`${data[0]?.created_at}`));

  //   error ? console.log(error) : null;
  // }

  // useEffect(() => {
  //   fetchBlogData();
  // }, []);

  const body = `
<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/B6DLsvMS/Screenshot-2024-10-25-185119.png" alt="my alt text"/>
  </figure>
</center>

## This Week

This week, I completed the code that will be used to run the assistant. The code consists of a few parts that work together to make a complete voice assistant. 

Firstly, I created a variable that stores if the assistant is waiting for the user to say its name. 

\`\`\`
 waiting = True 
\`\`\`

Then, I created a function that will take in the user’s voice and detect if “Zacky” is said so that the assistant can start listening for the request.

\`\`\`
 while True:
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Waiting for wake word...")
        r.adjust_for_ambient_noise(source)
        audio = r.listen(source)
            
    try:
        text = r.recognize_google(audio)
        text_lower = text.lower()
        print(f"You said: {text_lower}")
        if text_lower in wake_word:
                waiting = False
                wake_response()
                get_audio(waiting, messages)
    except Exception as e:
        print({e})
\`\`\`

This block of code starts off by initializing the program to start listening for the wake word. Then, it checks if what the user says is in the “wake_word” list:

\`\`\`
 wake_word = ["zacky", "hey zacky"]
\`\`\`

If that passes, it calls the “wake_response” function which randomly chooses between 3 welcoming responses, “How can I help you?”, “Yes?”, or “What’s up?”. 

\`\`\`
def wake_response():
    response_count = [1, 2, 3]
    response_number = random.choice(response_count)
    
    if response_number == 1:
        playsound("effects/HCIHY.mp3")
    elif response_number == 2:
        playsound("effects/Yes.mp3")
    elif response_number == 3:
        playsound("effects/WU.mp3")
\`\`\`

After that, the “waiting” variable is set to false and the “get_audio” function is called.

\`\`\`
def get_audio(waiting, messages):
    while waiting == False:
        r = sr.Recognizer()
        with sr.Microphone() as source:
            r.adjust_for_ambient_noise(source)
            audio = r.listen(source)
            print("Say Something...")
            
        try:
            text = r.recognize_google(audio)
            print(f"You said: {text}")
            chat(text, messages)
        except Exception as e:
            print(f"Error detecting audio: {e}")
            waiting = True
\`\`\`

This function takes the user’s voice input and converts it into text that the voice assistant will be able to understand. Once the text is created, the “chat” function is called. 

\`\`\`
def chat(user_input, messages):
    
    messages.append({"role": "user", "content": user_input},)
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages = messages
    )

    assistant_response = completion.choices[0].message.content
    
    speech_file_path = Path(__file__).parent / "speech.mp3"
    response = client.audio.speech.create(
      model="tts-1",
      voice="echo",
      input=assistant_response
    )
    response.stream_to_file(speech_file_path)
    messages.append({"role": "assistant", "content": assistant_response},)
    
    print(assistant_response)
    playsound('speech.mp3')
\`\`\`

This function is the brains of the assistant. It takes the text from the “get_audio” function and feeds it into ChatGPT, which produces a text response. Then, using OpenAI’s text to speech function, a file called “speech.mp3” is created, which is then played by the assistant using the “playsound” function. If the assistant does not detect a request from the user, the waiting variable will be set to true and the assistant will once again start listening for its name.

Here is the <a href='https://github.com/VaitVhat52/zacky/blob/main/main.py'>link</a> to the complete code


## Right Now
Now that the code for the voice assistant is done, I have to create the physical parts that will make up the body of Zacky. I am currently watching a video tutorial on the basics of Fusion 360, the 3D modeling software that I will use to design and later 3D print the parts for Zacky.

## Next Week
Next week, I will create the different components for Zacky which includes a way to attach both controller boards together and a housing for all the other components.
`;

  return (
    <div className="flex flex-col mx-auto mb-14">
      <div className="mx-8 md:mx-[200px]">
        <p className="text-5xl font-semibold mt-10 md:mt-20 text-left">
          Voice Assistant
        </p>
        <p className="mt-3 mb-8">October 10, 2024</p>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="prose min-w-fit max-w-max"
        >
          {body}
        </Markdown>
      </div>
    </div>
  );
};

export default page;
