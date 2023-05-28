import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";


type IData = {
    name:string,
     purpose:string,
     coming:string,
     contact:string,
     entry:string,
     idType:string,
     idNumber:string,
     image:string

}
type Props = {
    setFormVisible: (a:string) => void
    setVisitorData: (a: IData) => void
    visitorData: IData
}
const videoConstraints = {
    width: 100,
    height: 100,
    facingMode: "user"
  };

const Camera = ({ setFormVisible ,setVisitorData,visitorData}: Props) => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    useEffect(() => {
        imgSrc && setVisitorData({...visitorData, 'image': imgSrc});
        imgSrc && setFormVisible('');
    }, [imgSrc]);
    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
                <img
                    src={imgSrc} alt='Captured pic'
                />
            )}
        </>
    );
};

export default Camera;