import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const modules = {
  toolbar: [
    [{ 'font': [] }],
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['link'],
    ['clean']
  ],
};

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'list',
  'bullet',
  'align',
  'link'
];

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="mt-3">
      <h6>Description</h6>
      <ReactQuill 
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
        className=' '
      />
    </div>
  );
};

export default RichTextEditor;
