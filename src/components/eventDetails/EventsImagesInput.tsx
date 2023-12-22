"use client";

import { Events, User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface EventsImagesInputProps {
  eventOwner: Events;
  currentUser: User;
  params: any;
}

const EventsImagesInput: React.FC<EventsImagesInputProps> = ({
  eventOwner,
  currentUser,
  params,
}: EventsImagesInputProps) => {
  const router = useRouter();
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [imageInputs, setImageInputs] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: any, index: any) => {
    const files = event.target.files;
    const imagesArray = [...selectedImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        const imageObject: any = { image: reader.result };
        imagesArray[index] = imageObject;

        setSelectedImages(imagesArray);
      };

      reader.readAsDataURL(file);
    }
  };

  const addImageInput = () => {
    setImageInputs(imageInputs + 1);
  };

  const renderImageInputs = () => {
    const inputFields = [];
    for (let i = 0; i < imageInputs; i++) {
      inputFields.push(
        <input
          key={i}
          type="file"
          accept="image/*"
          multiple
          onChange={(event) => handleImageUpload(event, i)}
        />
      );
    }
    return inputFields;
  };

  const uploadImages = () => {
    setLoading(true); 
    const selectedImageURLs = selectedImages.map(
      (imageObject: any) => imageObject.image
    );

    axios
      .post("/api/saveEventImages", {
        images: selectedImageURLs,
        paramsId: params.id,
      })
      .then(() => {
        toast.success("Event images upload successfully");
        setImageInputs(1);
        setSelectedImages([]);
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Upload failed !", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="md:mx-12 mx-2 mb-5">
      {eventOwner?.userId == currentUser.id ? (
        <div>
          <div className="mb-4">
            <h1 className="text-lg font-bold">
              Choose and save event images for the slider below:
            </h1>
          </div>
          {renderImageInputs()}
          <button
            onClick={addImageInput}
            className=" border bg-blue-600 rounded-xl p-2 text-white"
          >
            Add more images
          </button>
          {selectedImages.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mt-4">Selected images:</h3>
              <div className="grid grid-cols-3 gap-4">
                {selectedImages.map((image: any, index: any) => (
                  <Image
                    key={index}
                    src={image.image}
                    alt={`Image ${index}`}
                    height={150}
                    width={150}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
          <div onClick={uploadImages} className="">
            {/* Disable the button if loading is true */}
            <button
              disabled={loading}
              className={`border bg-blue-700 rounded-xl mt-2 p-2 flex items-center justify-center hover:bg-blue-900 text-white ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Uploading..." : "Upload Images"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EventsImagesInput;
