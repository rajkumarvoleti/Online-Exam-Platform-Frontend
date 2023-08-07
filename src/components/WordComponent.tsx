import React, { useState } from 'react';
import dynamic from "next/dynamic";

import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function WordComponent({ handleData }: { handleData: (data: string) => void }) {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} />;
}