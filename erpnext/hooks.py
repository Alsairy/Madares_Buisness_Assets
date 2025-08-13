app_name = "erpnext"
app_title = "Madares Business (Asset Management)"
app_publisher = "Madares Business Solutions"
app_description = """Asset management workflows and progressive field completion for MOE"""
app_icon = "fa fa-th"
app_color = "#e74c3c"
app_email = "info@madares.business"
app_license = "GNU General Public License (v3)"
source_link = "https://github.com/frappe/erpnext"
app_logo_url = "/assets/erpnext/images/madares-logo.svg"
app_home = "/app/home"

add_to_apps_screen = [
	{
		"name": app_name,
		"logo": "/assets/erpnext/images/madares-logo.svg",
		"title": app_title,
		"route": app_home,
		"has_permission": "erpnext.check_app_permission",
	}
]

develop_version = "15.x.x-develop"

app_include_js = ["erpnext.bundle.js", "/assets/erpnext/js/madares-lang-toggle.js", "/assets/erpnext/js/madares-ocr.js", "/assets/erpnext/js/madares-map.js"]
app_include_css = ["erpnext.bundle.css", "/assets/erpnext/css/madares-rtl.css"]
web_include_css = "erpnext-web.bundle.css"
email_css = "email_erpnext.bundle.css"
fixtures = [
    {"dt": "Role", "filters": [["role_name", "in", [
        "Data Entry Staff", "Assets Management Department", "Safety Department", "Planning Department", "Investment Department", "TBC", "Director"
    ]]]},
    {"dt": "Workflow", "filters": [["document_type", "in", [
        "MOE Asset", "Asset Allocation Request", "Investment Preparation", "Asset Document", "Maintenance Request", "Demolition Request"
    ]]]},
    {"dt": "Notification", "filters": [["document_type", "in", [
        "MOE Asset", "Asset Allocation Request", "Investment Preparation", "Asset Document", "Maintenance Request", "Demolition Request"
    ]]]},
    {"dt": "Assignment Rule"},
    {"dt": "Server Script"}
]

app_include_icons = [
	"/assets/erpnext/icons/pos-icons.svg",
]

web_include_icons = [
	"/assets/erpnext/icons/pos-icons.svg",
]

doctype_js = {}
doctype_list_js = {}


override_whitelisted_methods = {"frappe.www.contact.send_message": "erpnext.templates.utils.send_message"}

welcome_email = "erpnext.setup.utils.welcome_email"

# setup wizard
setup_wizard_requires = ""
setup_wizard_stages = ""
setup_wizard_complete = ""
setup_wizard_test = ""

after_install = ""

boot_session = ""
notification_config = ""
get_help_messages = ""
leaderboards = []
filters_config = ""
additional_print_settings = ""

on_session_creation = ""

treeviews = []

demo_master_doctypes = []
demo_transaction_doctypes = []

jinja = {"methods": []}

# website
webform_list_context = ""

calendars = []

website_generators = []

website_context = {
	"brand_html": "Madares Business (Asset Management)",
	"favicon": "/assets/erpnext/images/madares-favicon.svg",
	"splash_image": "/assets/erpnext/images/madares-logo.svg",
}

# nosemgrep
website_route_rules = []

standard_portal_menu_items = []

sounds = []

has_upload_permission = {}

has_website_permission = {}

before_tests = "erpnext.setup.utils.before_tests"


period_closing_doctypes = []

doc_events = {}

# function should expect the variable and doc as arguments
naming_series_variables = {}

# On cancel event Payment Entry will be exempted and all linked submittable doctype will get cancelled.
# to maintain data integrity we exempted payment entry. it will un-link when sales invoice get cancelled.
# if payment entry not in auto cancel exempted doctypes it will cancel payment entry.
auto_cancel_exempted_doctypes = [
	"Payment Entry",
]

scheduler_events = {}

email_brand_image = "assets/erpnext/images/erpnext-logo.jpg"

default_mail_footer = """
	<span>
		Sent via
		<a class="text-muted" href="https://frappe.io/erpnext?source=via_email_footer" target="_blank">
			ERPNext
		</a>
	</span>
"""

get_translated_dict = {("doctype", "Global Defaults"): "frappe.geo.country_info.get_translated_dict"}

bot_parsers = [
	"erpnext.utilities.bot.FindItemBot",
]

get_site_info = "erpnext.utilities.get_site_info"

payment_gateway_enabled = None

communication_doctypes = []

advance_payment_receivable_doctypes = []
advance_payment_payable_doctypes = []

invoice_doctypes = []

bank_reconciliation_doctypes = []

accounting_dimension_doctypes = []






regional_overrides = {}
user_privacy_documents = []

# ERPNext doctypes for Global Search
global_search_doctypes = {"Default": []}

additional_timeline_content = {}


extend_bootinfo = []


default_log_clearing_doctypes = {
	"Repost Item Valuation": 60,
}

export_python_type_annotations = True

fields_for_group_similar_items = ["qty", "amount"]
