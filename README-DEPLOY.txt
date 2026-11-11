WINWILL ATTENDANCE — V3 UPDATE FIX TEST BUILD

This ZIP is flattened: index.html, manifest.json, service-worker.js and icons are at the ZIP root.
When deploying to GitHub Pages, upload/commit these FILES to the repository's published root (not inside an extra folder).

Included:
- Themes: Original Dark, Royal Purple, Emerald Green, Premium Light, Luxury Gold
- Profile name/photo/colour
- Photo upload limit 15 MB, with resize/compression
- JSON Backup and Restore
- Existing attendance_... and winwill_settings_v1 storage keys retained
- Service worker V3: network-first HTML navigation, explicit update check, old Winwill cache cleanup

IMPORTANT:
1. Do not overwrite production until tested on a separate test branch or test repository.
2. Back up attendance data from the existing app before testing restore/deployment.
3. This build does not sync localStorage between different phones/browsers.
