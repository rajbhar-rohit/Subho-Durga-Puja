Put your media files here, named exactly:

  bg-video.mp4     - background video for the hero
  dhak-beat.mp3    - loops on/off with the "Dhak Beats" button
  ulu-dhwani.mp3   - plays once per tap of the "Ulu Dhwani" button

Next.js serves everything in /public at the site root, so these become
available at /assets/bg-video.mp4, /assets/dhak-beat.mp3, etc. — which is
exactly what the components already reference. No code changes needed.
