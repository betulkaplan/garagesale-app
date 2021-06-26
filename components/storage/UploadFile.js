import firebase from 'firebase/app';
import 'firebase/storage';
import { useRef, useState } from 'react';

const UploadFile = () => {
  const inputEl = useRef(null);
  const [value, setValue] = useState(0);

  function upLoadFile() {
    const file = inputEl.current.files[0];
    const storageRef = firebase.storage().ref('products_img/' + file.name);
    let task = storageRef.put(file);

    task.on(
      'state_change',
      function progress(snapshot) {
        setValue((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      function error(error) {
        alert(error);
      },
      function complete() {
        alert('Upload to firebase storage successful');
      }
    );
  }

  return (
    <>
      <progress value={value} max="100"></progress>
      <input type="file" ref={inputEl} />
      <button type="button" onClick={upLoadFile}>
        Upload
      </button>
    </>
  );
};
export default UploadFile;
