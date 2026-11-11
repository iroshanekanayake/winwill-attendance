WINWILL ATTENDANCE — PERSONALIZED THEME & BACKUP TEST BUILD

Included
- Four themes only: Forest, Ocean, Sunset, Royal (no Night theme).
- Theme brightness slider (65%–135%).
- Profile name, photo selection/removal, and profile colour.
- Save Backup / Restore from Backup for attendance records and app settings.
- Before a restore, the app downloads a safety backup of the current device data.

DATA PRESERVATION
- Existing attendance localStorage keys (attendance_YEAR_MONTH) are unchanged.
- Existing employee/payroll settings key (winwill_settings_v1) is unchanged.
- Theme, brightness, and profile use separate keys:
  winwill_attendance_test_theme_v1
  winwill_theme_brightness_v1
  winwill_profile_v1
- No existing attendance records are automatically deleted or migrated.
- Restore replaces only keys included in the selected backup. It first downloads a safety backup.
- Profile photos are resized/compressed before being stored locally. Browser storage limits still apply; keep regular JSON backups.

IMPORTANT
This is a TEST BUILD. It has not been uploaded to the production GitHub Pages site.
Do not overwrite the production repository with this ZIP until the test has been checked.
The included service worker uses a test-only cache name and only clears older caches with the same test prefix.

TEST CHECKLIST
1. Use a separate test URL/origin and dummy records first.
2. Check all four themes and brightness slider.
3. Save a profile name, photo, and colour; reload and verify persistence.
4. Save a backup, make a test attendance change, then restore and verify the earlier data returns.
5. Confirm salary calculation, month navigation, printing, and existing attendance data.
