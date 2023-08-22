import React, { useEffect, useState, useRef } from "react";

function WordComponent({handleData, value}:{handleData:(data:string)=>void, value:string}) {
  let editorRef = useRef<{CKEditor:any
    ClassicEditor:any}>();
  const { CKEditor, ClassicEditor } = editorRef.current || {}; // if it don't find any document then it will be an empty object 

  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };

    setLoaded(true);
  }, []); // run on mounting

  if (loaded) {
    return (
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={(editor:any) => {
          // You can store the "editor" and use when it is needed.
          // console.log("Editor is ready to use!", editor);
          const data = editor.getData();
          handleData(data);
        }}
        onChange={(event:any, editor:any) => {
          // do something when editor's content changed
          const data = editor.getData();
          handleData(data);
        }}
        // onBlur={(event:any, editor:any) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event:any, editor:any) => {
        //   console.log("Focus.", editor);
        // }}
      />
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default WordComponent;