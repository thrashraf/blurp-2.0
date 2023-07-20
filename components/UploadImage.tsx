'use client'

import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import axios from 'axios'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type Props = {
  setFiles: (file: string) => void;
};

const Upload = (props: Props) => {
  return (
    <div className='container mt-4'>
      <FilePond
        allowMultiple={false}
        maxFiles={1}
        allowReorder={true}
        maxParallelUploads={1}
        server={{
          process: async (fieldName, file, metadata, load, error, progress) => {
            if (!file) return;
            try {
              const formData = new FormData();
              formData.append('file', file, file.name);

              await axios
                .post(
                  `${process.env.NEXT_PUBLIC_APP_URI}/api/collections/images/records`,
                  formData,
                  {
                    onUploadProgress: (progressEvent) => {
                      const progressPercentage = Math.round(
                        (progressEvent.loaded * 100) /
                        (progressEvent?.total ?? 0)
                      );
                      progress(true, progressPercentage, 100);
                    },
                  }
                )
                .then((res) => {
                  props.setFiles(res.data?.id);
                  load(res.data);
                });
            } catch (e) {
              console.log(e);
              error('oh no');
            }
          },
        }}
      />
    </div>
  );
};

export default Upload;
