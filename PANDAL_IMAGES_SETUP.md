# Pandal Images - Setup Guide

## Overview
The pandal system now supports loading images from URLs. Users can click on images to view them in a full-screen gallery viewer.

## Features
- **URL-based Images**: Load pandal images from any external URL instead of storing them in assets
- **Image Gallery**: Gallery view with thumbnails for each selected pandal
- **Image Viewer Modal**: Full-screen image viewer with:
  - Previous/Next navigation
  - Thumbnail selection
  - Keyboard shortcuts (Arrow keys, Escape)
  - Image counter
- **Map Integration**: Preview images in map marker popups

## How to Add Images to Pandals

### 1. Update Pandal Data in `src/lib/pandals.ts`

Add `imageUrls` array to any pandal entry:

```typescript
{
  "id": "cr-park-mela-ground",
  "name": "CR Park Mela Ground",
  "area": "Chittaranjan Park",
  "district": "Delhi",
  "state": "Delhi",
  "lat": 28.5382,
  "lng": 77.2531,
  "description": "One of the most popular pandals in Delhi",
  "imageUrls": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ]
}
```

### 2. Image URL Requirements

- **Format**: Any publicly accessible image URL (JPEG, PNG, WebP, etc.)
- **Hosting**: Use any image hosting service:
  - Imgur
  - Cloudinary
  - AWS S3
  - Google Cloud Storage
  - Vercel Blob Storage
  - Your own CDN
  - GitHub (raw.githubusercontent.com)

### 3. Example with Real URLs

```typescript
{
  "id": "north-bombay-sarbojanin",
  "name": "North Bombay Sarbojanin",
  "area": "Santacruz/Juhu",
  "city": "Mumbai",
  "district": "Mumbai",
  "state": "Maharashtra",
  "lat": 19.088,
  "lng": 72.835,
  "description": "Traditional celebration in Mumbai's suburbs",
  "imageUrls": [
    "https://images.unsplash.com/photo-1585399789803-d5a3e5cc3c1a?w=800",
    "https://images.unsplash.com/photo-1567016432779-094d6e44efd2?w=800"
  ]
}
```

## User Interface

### Gallery View (After Selecting a Pandal)
- Click on a pandal in the list → images gallery appears
- Click any thumbnail → opens full-screen image viewer
- Hover to see magnified preview

### Image Viewer
- **Navigation**:
  - Click ‹ › buttons to navigate
  - Use keyboard arrow keys (← →)
  - Click on thumbnails
  - Press Escape to close

- **Display**:
  - Shows current image with counter
  - Thumbnails at bottom for quick selection
  - Responsive design (mobile-friendly)

## Integration Points

### 1. Map Markers
- When you click a marker, the popup shows:
  - Pandal name and location
  - First image (if available)
  - Number of images available
  - Directions link

### 2. Pandal List
- Each pandal with images shows a clickable gallery
- Images appear in a responsive grid
- Clicking any image opens the full viewer

## Typescript Interface

```typescript
interface Pandal {
  id: string;
  name: string;
  area: string;
  district: string;
  lat: number;
  lng: number;
  imageUrls?: string[];      // NEW: Array of image URLs
  description?: string;       // NEW: Pandal description
}
```

## Image Optimization Tips

1. **Size**: Keep images under 2MB for faster loading
2. **Resolution**: 1200x800px or similar for good quality
3. **Format**: Use JPEG or WebP for photos
4. **CDN**: Use a CDN for faster delivery globally
5. **Lazy Loading**: Images load on demand

## Keyboard Shortcuts in Image Viewer

| Key | Action |
|-----|--------|
| ← Arrow | Previous image |
| → Arrow | Next image |
| Esc | Close viewer |

## Responsive Design

The gallery and image viewer work on:
- Desktop browsers
- Tablets
- Mobile phones
- All screen sizes

## Files Modified/Created

1. **Modified**: `src/lib/pandals.ts` - Added imageUrls and description to interface
2. **Created**: `src/components/PandalImageViewer.tsx` - Full-screen image viewer component
3. **Modified**: `src/components/PandalMapPage.tsx` - Added image gallery and viewer integration
4. **Modified**: `src/components/PandalMapView.tsx` - Added image preview to map popups

## No Backend Required

- No database changes needed
- No API endpoints required
- Images stored externally
- Fully static/client-side solution
- Fast performance with external CDNs

## Next Steps

1. Add image URLs to pandal entries in `src/lib/pandals.ts`
2. Test the gallery view by selecting a pandal
3. Click images to view full-screen
4. Use keyboard navigation to browse images
