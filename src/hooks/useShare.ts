'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/context/ToastContext';

export function useShare() {
  const { t } = useLanguage();
  const { showToast } = useToast();

  async function share() {
    const shareData = {
      title: t.shareTitle,
      text: t.shareText,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled the native share sheet — nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      showToast(t.linkCopied);
    } catch {
      showToast(t.copyManually);
    }
  }

  return { share };
}
