import firebase from 'firebase/app';
import 'firebase/storage';
import { useRef, useState, useEffect } from 'react';
import Input from '@material-ui/core/Input';

const UploadFile = ({ setImage }) => {
  const [inputEl, setInputEl] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inputEl !== null) upLoadFile();
  }, [inputEl]);

  function upLoadFile() {
    const file = inputEl;
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

        firebase
          .storage()
          .ref('products_img')
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setImage(url);
          })
          .catch((error) => console.log(error));
      }
    );
  }

  return (
    <>
      <progress value={value} max="100"></progress>
      <Input
        inputRef={inputEl}
        margin="none"
        variant="outlined"
        fullWidth
        type="file"
        onChange={(e) => {
          setInputEl(e.target.files[0]);
        }}
      />
    </>
  );
};
export default UploadFile;
