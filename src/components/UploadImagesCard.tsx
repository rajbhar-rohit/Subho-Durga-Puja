'use client';

import { useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// NOTE: These previews use URL.createObjectURL and only exist in the
// uploading visitor's own browser tab — nothing is sent anywhere. To make
// uploads real and visible to other visitors, wire handleFiles() up to a
// storage backend (e.g. Cloudinary, S3, Supabase Storage) and swap the
// object URLs for the uploaded file URLs it returns.
export function UploadImagesCard() {
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...urls, ...prev].slice(0, 8));
    e.target.value = '';
  }

  return (
    <div className="explore-card glass upload-card">
      <div className="explore-card-media">
        {previews.length > 0 ? (
          <div className="explore-card-gallery">
            {previews.map((src) => (
              <div className="explore-thumb" key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        ) : (
          <div className="explore-card-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <path d="M12 16V4M12 4l-4 4M12 4l4 4" />
              <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="explore-card-title">{t.uploadTitle}</h3>
      <p className="explore-card-desc">{t.uploadDesc}</p>
      <p className="upload-hint">{t.uploadHint}</p>
      <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={handleFiles} />
      <button className="upload-btn glass" onClick={() => inputRef.current?.click()}>
        {t.uploadButton}
      </button>
    </div>
  );
}
