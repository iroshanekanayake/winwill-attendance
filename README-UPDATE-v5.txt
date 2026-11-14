WINWILL ATTENDANCE UPDATE v5

Included:
- Optional Sky Neumorphism theme inspired by the supplied screenshots.
- Background service-worker update checks.
- In-app update notice appears after a new version is downloaded.
- App reloads only after the user taps Update.
- Update notice reminds users to save attendance before applying.

Preserved:
- Existing files and original root-level file layout.
- Existing attendance/settings/profile localStorage keys.
- Existing time selection and payroll calculation code.
- Existing attendance records and backup/restore code.

Deployment:
Upload all files from this ZIP to the existing GitHub Pages repository root and commit them.
Do not delete or reset users' browser data. The new service worker cache version is app-specific and only removes older caches with the existing Winwill cache prefixes.
