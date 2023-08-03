import React from "react";
import { Editor } from "@tinymce/tinymce-react"; // tinymce-react is imported as an ES module
// import "./Styles.css";

export default function WordComponent() {
  const editorRef = React.useRef<any>();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_WORD_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Online Document Editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins:
            "powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap tinycomments linkchecker emoticons advtable export print autosave",
          toolbar:
            "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat",
          // height: "700px",
          toolbar_sticky: true,
          icons: "thin",
          skin: "material-classic",
          // icons: "material",
          content_style: "material-classic",
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}