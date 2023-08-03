import React, { useEffect, useState } from 'react';

export default function MediaAccess({setDisabled}:{setDisabled: (bool:boolean) => void}) {
  const [hasCameraAccess, setHasCameraAccess] = useState(false);
  const [hasMicrophoneAccess, setHasMicrophoneAccess] = useState(false);

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        setHasCameraAccess(stream.getVideoTracks().length > 0);
        setHasMicrophoneAccess(stream.getAudioTracks().length > 0);
        stream.getTracks().forEach((track) => track.stop());
      } catch (error) {
        console.error('Error accessing camera and microphone:', error);
        setHasCameraAccess(false);
        setHasMicrophoneAccess(false);
      }
    };

    checkPermissions();
  }, []);

  useEffect(() => {
    if(hasCameraAccess && hasMicrophoneAccess)
      setDisabled(false);
    else
      setDisabled(true);
    return () => {
      setDisabled(true);
    }
  }, [hasCameraAccess,hasMicrophoneAccess,setDisabled])
  

  return (
    <div>
      <p>Camera Access: {hasCameraAccess ? 'Granted' : 'Denied'}</p>
      <p>Microphone Access: {hasMicrophoneAccess ? 'Granted' : 'Denied'}</p>
    </div>
  );
};
