WINWILL ATTENDANCE - PRODUCTION UPDATE V4

This package is prepared for the existing GitHub Pages repository root.
Upload/replace the files at the repository root:
index.html
manifest.json
service-worker.js
icon-192.png
icon-512.png

Included:
- Themes: Original Dark, Royal Purple, Emerald Green, Premium Light, Luxury Gold.
- Improved readable contrast for Premium Light.
- Profile photo appears beside the Winwill heading on the Attendance page and other app pages.
- Existing profile name/photo/colour and backup/restore controls remain.
- Existing attendance_* and winwill_settings_v1 storage keys are retained.
- Production service worker cache v8 checks the network for HTML updates.

Before deployment:
1. Save a backup from Settings > Save a Backup.
2. Replace the existing root files in one GitHub commit; do not upload this ZIP as a ZIP file.
3. After deployment, close the installed PWA fully and reopen it online.
4. Verify attendance records, pay sheet, profile image and backup/restore.

Important: localStorage data remains device/browser-specific and is not synced across devices.
