import frappe
from frappe.model.document import Document

class MOEAsset(Document):
    def validate(self):
        self.volume_m3 = (self.length_m or 0) * (self.width_m or 0) * (self.height_m or 0)
        if (self.annual_rental_income or 0) and (self.current_market_value or 0):
            self.cap_rate = (float(self.annual_rental_income) / float(self.current_market_value)) * 100
        if (self.purchase_price or 0) and (self.current_market_value or 0):
            self.roi = ((float(self.current_market_value) - float(self.purchase_price)) / float(self.purchase_price)) * 100
