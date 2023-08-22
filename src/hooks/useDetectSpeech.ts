import 'regenerator-runtime/runtime';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useState } from 'react';

const appId = process.env.NEXT_PUBLIC_SPEECHLY_KEY || "";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export const useDetectSpeech = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [speaking, setSpeaking] = useState(true);

  useEffect(() => {
    const isSpeaking = listening && transcript.trim() !== '';
    setSpeaking(isSpeaking);
  }, [])
  

  const isBrowserSupported = browserSupportsSpeechRecognition;
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  return {listening, startListening, stopListening, transcript, isBrowserSupported};
}
