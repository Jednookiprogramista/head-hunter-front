import React, { ChangeEvent } from 'react';

export const UploadInput = (props: {
  upload(event: ChangeEvent<HTMLInputElement>): Promise<void>;
}) => {
  const { upload } = props;
  return (
    <div>
      <label htmlFor="dropzone-file">
        Kliknij aby dodać plik.
        <p>Akceptowalne rozszerzenia: CSV</p>
        <input
          onChange={upload}
          id="dropzone-file"
          type="file"
          className="UploadInput__hidden"
          multiple
        />
      </label>
    </div>
  );
};
