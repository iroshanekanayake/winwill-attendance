WINWILL ATTENDANCE — THEME TEST BUILD

This is a separate test build based on the supplied source ZIP. It adds five selectable visual themes and soft 3D-style buttons.

IMPORTANT SAFETY NOTES
- Do not replace the existing production GitHub Pages repository with this test build.
- Publish this ZIP to a completely separate GitHub account/repository and a separate username.github.io origin. A separate repository under the SAME GitHub username may still share the same origin.
- Existing attendance/settings storage keys and salary/time calculation code have been retained. The theme preference uses a new key: winwill_attendance_test_theme_v1.
- The service worker cache name is unique to this test build and only removes older caches with its own test prefix.
- Test using dummy employee details and dummy attendance first. Do not use real payroll data until verified.

PUBLISHING
1. Create a separate GitHub account (or use a different hosting origin).
2. Create a new repository for the test.
3. Upload the CONTENTS of the winwill-attendance-main folder to the repository root (index.html, manifest.json, service-worker.js, icons).
4. Enable GitHub Pages from the repository settings.
5. Open the new test URL in a browser. Install it only as a separate test app.

The test ZIP does not update or modify the currently published app.
