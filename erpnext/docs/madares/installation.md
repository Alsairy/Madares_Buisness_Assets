# Installation

Prereqs
- Frappe/Bench dev environment compatible with ERPNext v16-dev (Python >= 3.10)

Steps
1. Create or use an existing bench and site
2. Add app and install
   bench get-app --branch develop erpnext
   bench --site your.site install-app erpnext
3. Log in and verify Madares branding on the desk

What’s included
- Fixtures auto-create Roles and Workflows
- Arabic translations loaded from app/translations/ar.csv
- JS/CSS includes registered in hooks.py

Notes
- Client OCR and Leaflet assets use CDN by default; replace with bundled assets if needed for offline environments.
