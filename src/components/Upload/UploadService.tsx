import  { storage, db } from "../Auth/firebase.ts";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export const uploadFileAndSaveMetadata
  = async (file: File, additionalData: any) => {
    try{
        const timeStamp = Date.now();
        const storageRef = ref(storage, `videos/${file.name}`);
        await uploadBytesResumable(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        const videoDocRef = await addDoc(collection(db, "videos"), {
            fileName: file.name,
            size: file.size,
            uploadTime: timeStamp,
            fileType: file.type,
            url: downloadURL,
            ...additionalData
        })
        console.log('file uploaded ', videoDocRef.id);
        // const uploadTask = uploadBytesResumable(storageRef, file);
        // const snapshot
        //     = await uploadTask.on("state_changed", (snapshot) => {
        //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     console.log("Upload is " + progress + "% done");
        // }, (error) => {
        //     console.log(error);
        // }, async () => {
        //     const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        //     }
        // )
    }catch (error){
        console.log(error);
    }
}