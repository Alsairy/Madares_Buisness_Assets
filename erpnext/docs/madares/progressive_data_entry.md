# Progressive Data Entry and Role-Based Access

MOE Asset implements role-based progressive field handling:
- Data Entry Staff: Can edit basic fields; financial fields hidden
- Safety Department: Can edit safety fields
- Planning Department: Can edit planning fields
- Investment Department: Can edit investment fields
- Director: Final approval per workflow

Client logic lives in erpnext/assets/doctype/moe_asset/moe_asset.js
Server-side calculations live in erpnext/assets/doctype/moe_asset/moe_asset.py
