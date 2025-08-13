import frappe
from frappe.model.document import Document

class AssetDocument(Document):
    def before_save(self):
        if not self.ocr_status:
            self.ocr_status = "Pending"

@frappe.whitelist()
def client_ocr_start(docname: str):
    doc = frappe.get_doc("Asset Document", docname)
    if doc.ocr_status in ("Completed", "Processing"):
        return True
    doc.ocr_status = "Processing"
    doc.save(ignore_permissions=True)
    return True
