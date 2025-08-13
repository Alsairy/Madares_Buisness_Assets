function hasRole(role){ return (frappe.user_roles || []).includes(role); }
function setSectionFields(frm, fields, opts){
  fields.forEach(fn => {
    const df = frm.get_field(fn);
    if (!df) return;
    if (opts.read_only !== undefined) frm.set_df_property(fn, 'read_only', opts.read_only ? 1 : 0);
    if (opts.reqd !== undefined) frm.set_df_property(fn, 'reqd', opts.reqd ? 1 : 0);
    if (opts.hidden !== undefined) frm.set_df_property(fn, 'hidden', opts.hidden ? 1 : 0);
  });
}

frappe.ui.form.on('MOE Asset', {
  setup(frm){},
  refresh(frm) {
    const financial = ['purchase_price','current_market_value','annual_rental_income','cap_rate','roi'];
    const safety = ['safety_hazards','safety_compliance','last_safety_review'];
    const planning = ['zoning','land_use'];
    if (hasRole('Data Entry Staff')) {
      setSectionFields(frm, financial, {hidden: 1});
    }
    if (hasRole('Safety Department')) {
      setSectionFields(frm, safety, {read_only: 0});
    } else {
      setSectionFields(frm, safety, {read_only: 1});
    }
    if (hasRole('Planning Department')) {
      setSectionFields(frm, planning, {read_only: 0});
    } else {
      setSectionFields(frm, planning, {read_only: 1});
    }
  }
});
