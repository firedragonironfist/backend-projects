import React, { useState } from "react";
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';

function Form() {
  const [BlogData, setblogData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: " ",
    selectedFile: "",
  });

  const clear = () => {
    
  }

  const dispatch = useDispatch();
  return (
    <div className="form-control w-full max-w-xs">
      <h1>Forms</h1>
      <input
        type="text"
        placeholder="creator"
        className="input input-bordered w-full max-w-xs"
        value={BlogData.creator}
        onChange={(e) => setblogData({ ...BlogData, creator: e.target.value })}
      />

      <input
        type="text"
        placeholder="title"
        value={BlogData.title}
        onChange={(e) => setblogData({ ...BlogData, title: e.target.value })}
        className="input input-bordered w-full max-w-xs"
      />

      <input
        type="text"
        placeholder="message"
        value={BlogData.message}
        onChange={(e) => setblogData({ ...BlogData, message: e.target.value })}
        className="input input-bordered w-full max-w-xs"
      />

      <input
        type="text"
        placeholder="tags"
        value={BlogData.tags}
        onChange={(e) => setblogData({ ...BlogData, tags: e.target.value })}
        className="input input-bordered w-full max-w-xs"
      />

      <div class="rounded border bg-gray-200 p-4">
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setblogData({ ...BlogData, selectedFile: base64 })} />
      </div>

      <button className="btn btn-success">Submit</button>
      <button className="btn btn-error" onClick={clear}>Clear</button>
    </div>
  );
}

export default Form;
