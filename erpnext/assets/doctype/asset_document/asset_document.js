frappe.ui.form.on('Asset Document', {
  refresh(frm) {
    if (!frm.is_new() && frm.doc.file && frm.doc.ocr_status !== 'Completed') {
      frm.add_custom_button(__('Run OCR'), async () => {
        try {
          frm.set_value('ocr_status', 'Processing'); await frm.save();
          const url = frm.doc.file;
          const text = await madaresRunOCR(url, null);
          frm.set_value('ocr_text', text);
          frm.set_value('ocr_status', 'Completed');
          await frm.save();
          frappe.show_alert({message: __('OCR Completed'), indicator: 'green'});
        } catch (e) {
          frm.set_value('ocr_status', 'Failed'); await frm.save();
          frappe.msgprint(__('OCR failed'));
        }
      });
    }
  }
});
