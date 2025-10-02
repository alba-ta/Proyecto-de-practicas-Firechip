// ESQUEMAS GENERADOS AUTOMÁTICAMENTE PARA GLPI
// Ejecutar: node generate_schemas.js

export const itemtypeSchemas = {
  "glpi_agents": {
    "allowed": [
      "id",
      "deviceid",
      "entities_id",
      "is_recursive",
      "name",
      "agenttypes_id",
      "last_contact",
      "version",
      "locked",
      "itemtype",
      "items_id",
      "useragent",
      "tag",
      "port",
      "remote_addr",
      "threads_networkdiscovery",
      "threads_networkinventory",
      "timeout_networkdiscovery",
      "timeout_networkinventory",
      "use_module_wake_on_lan",
      "use_module_computer_inventory",
      "use_module_esx_remote_inventory",
      "use_module_remote_inventory",
      "use_module_network_inventory",
      "use_module_network_discovery",
      "use_module_package_deployment",
      "use_module_collect_data"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_agenttypes": {
    "allowed": [
      "id",
      "name"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_alerts": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "type",
      "date"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_apiclients": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "date_mod",
      "date_creation",
      "is_active",
      "ipv4_range_start",
      "ipv4_range_end",
      "ipv6",
      "app_token",
      "app_token_date",
      "dolog_method",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_applianceenvironments": {
    "allowed": [
      "id",
      "name",
      "comment"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_appliances": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "is_deleted",
      "appliancetypes_id",
      "comment",
      "locations_id",
      "manufacturers_id",
      "applianceenvironments_id",
      "users_id",
      "users_id_tech",
      "groups_id",
      "groups_id_tech",
      "date_mod",
      "date_creation",
      "states_id",
      "externalidentifier",
      "serial",
      "otherserial",
      "contact",
      "contact_num",
      "is_helpdesk_visible",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_appliances_items": {
    "allowed": [
      "id",
      "appliances_id",
      "items_id",
      "itemtype"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_appliances_items_relations": {
    "allowed": [
      "id",
      "appliances_items_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_appliancetypes": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "externalidentifier"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_authldapreplicates": {
    "allowed": [
      "id",
      "authldaps_id",
      "host",
      "port",
      "name",
      "timeout"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_authldaps": {
    "allowed": [
      "id",
      "name",
      "host",
      "basedn",
      "rootdn",
      "port",
      "condition",
      "login_field",
      "sync_field",
      "use_tls",
      "group_field",
      "group_condition",
      "group_search_type",
      "group_member_field",
      "email1_field",
      "realname_field",
      "firstname_field",
      "phone_field",
      "phone2_field",
      "mobile_field",
      "comment_field",
      "use_dn",
      "time_offset",
      "deref_option",
      "title_field",
      "category_field",
      "language_field",
      "entity_field",
      "entity_condition",
      "date_mod",
      "comment",
      "is_default",
      "is_active",
      "rootdn_passwd",
      "registration_number_field",
      "email2_field",
      "email3_field",
      "email4_field",
      "location_field",
      "responsible_field",
      "pagesize",
      "ldap_maxlimit",
      "can_support_pagesize",
      "picture_field",
      "date_creation",
      "inventory_domain",
      "tls_certfile",
      "tls_keyfile",
      "use_bind",
      "timeout"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_authmails": {
    "allowed": [
      "id",
      "name",
      "connect_string",
      "host",
      "date_mod",
      "date_creation",
      "comment",
      "is_active"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_autoupdatesystems": {
    "allowed": [
      "id",
      "name",
      "comment"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_blacklistedmailcontents": {
    "allowed": [
      "id",
      "name",
      "content",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name",
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_blacklists": {
    "allowed": [
      "id",
      "type",
      "name",
      "value",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_budgets": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment",
      "is_deleted",
      "begin_date",
      "end_date",
      "value",
      "is_template",
      "template_name",
      "date_mod",
      "date_creation",
      "locations_id",
      "budgettypes_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_budgettypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_businesscriticities": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment",
      "date_mod",
      "date_creation",
      "businesscriticities_id",
      "completename",
      "level",
      "ancestors_cache",
      "sons_cache"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_cables": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "itemtype_endpoint_a",
      "itemtype_endpoint_b",
      "items_id_endpoint_a",
      "items_id_endpoint_b",
      "socketmodels_id_endpoint_a",
      "socketmodels_id_endpoint_b",
      "sockets_id_endpoint_a",
      "sockets_id_endpoint_b",
      "cablestrands_id",
      "color",
      "otherserial",
      "states_id",
      "users_id_tech",
      "cabletypes_id",
      "comment",
      "date_mod",
      "date_creation",
      "is_deleted"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_cablestrands": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_cabletypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_calendars": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment",
      "date_mod",
      "cache_duration",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_calendars_holidays": {
    "allowed": [
      "id",
      "calendars_id",
      "holidays_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_calendarsegments": {
    "allowed": [
      "id",
      "calendars_id",
      "entities_id",
      "is_recursive",
      "day",
      "begin",
      "end"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_cartridgeitems": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "ref",
      "locations_id",
      "cartridgeitemtypes_id",
      "manufacturers_id",
      "users_id_tech",
      "groups_id_tech",
      "is_deleted",
      "comment",
      "alarm_threshold",
      "stock_target",
      "date_mod",
      "date_creation",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_cartridgeitems_printermodels": {
    "allowed": [
      "id",
      "cartridgeitems_id",
      "printermodels_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_cartridgeitemtypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_cartridges": {
    "allowed": [
      "id",
      "entities_id",
      "cartridgeitems_id",
      "printers_id",
      "date_in",
      "date_use",
      "date_out",
      "pages",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_certificates": {
    "allowed": [
      "id",
      "name",
      "serial",
      "otherserial",
      "entities_id",
      "is_recursive",
      "comment",
      "is_deleted",
      "is_template",
      "template_name",
      "certificatetypes_id",
      "dns_name",
      "dns_suffix",
      "users_id_tech",
      "groups_id_tech",
      "locations_id",
      "manufacturers_id",
      "contact",
      "contact_num",
      "users_id",
      "groups_id",
      "is_autosign",
      "date_expiration",
      "states_id",
      "command",
      "certificate_request",
      "certificate_item",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_certificates_items": {
    "allowed": [
      "id",
      "certificates_id",
      "items_id",
      "itemtype",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_certificatetypes": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_changecosts": {
    "allowed": [
      "id",
      "changes_id",
      "name",
      "comment",
      "begin_date",
      "end_date",
      "actiontime",
      "cost_time",
      "cost_fixed",
      "cost_material",
      "budgets_id",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_changes": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "is_deleted",
      "status",
      "content",
      "date_mod",
      "date",
      "solvedate",
      "closedate",
      "time_to_resolve",
      "users_id_recipient",
      "users_id_lastupdater",
      "urgency",
      "impact",
      "priority",
      "itilcategories_id",
      "impactcontent",
      "controlistcontent",
      "rolloutplancontent",
      "backoutplancontent",
      "checklistcontent",
      "global_validation",
      "validation_percent",
      "actiontime",
      "begin_waiting_date",
      "waiting_duration",
      "close_delay_stat",
      "solve_delay_stat",
      "date_creation",
      "locations_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": true
  },
  "glpi_changes_groups": {
    "allowed": [
      "id",
      "changes_id",
      "groups_id",
      "type"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changes_items": {
    "allowed": [
      "id",
      "changes_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changes_problems": {
    "allowed": [
      "id",
      "changes_id",
      "problems_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changes_suppliers": {
    "allowed": [
      "id",
      "changes_id",
      "suppliers_id",
      "type",
      "use_notification",
      "alternative_email"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changes_tickets": {
    "allowed": [
      "id",
      "changes_id",
      "tickets_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changes_users": {
    "allowed": [
      "id",
      "changes_id",
      "users_id",
      "type",
      "use_notification",
      "alternative_email"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changetasks": {
    "allowed": [
      "id",
      "uuid",
      "changes_id",
      "taskcategories_id",
      "state",
      "date",
      "begin",
      "end",
      "users_id",
      "users_id_editor",
      "users_id_tech",
      "groups_id_tech",
      "content",
      "actiontime",
      "date_mod",
      "date_creation",
      "tasktemplates_id",
      "timeline_position",
      "is_private"
    ],
    "requiredOnCreate": [
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_changetemplatehiddenfields": {
    "allowed": [
      "id",
      "changetemplates_id",
      "num"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changetemplatemandatoryfields": {
    "allowed": [
      "id",
      "changetemplates_id",
      "num"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changetemplatepredefinedfields": {
    "allowed": [
      "id",
      "changetemplates_id",
      "num",
      "value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_changetemplates": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_changevalidations": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "users_id",
      "changes_id",
      "users_id_validate",
      "comment_submission",
      "comment_validation",
      "status",
      "submission_date",
      "validation_date",
      "timeline_position"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_clusters": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "uuid",
      "version",
      "users_id_tech",
      "groups_id_tech",
      "is_deleted",
      "states_id",
      "comment",
      "clustertypes_id",
      "autoupdatesystems_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_clustertypes": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_computerantiviruses": {
    "allowed": [
      "id",
      "computers_id",
      "name",
      "manufacturers_id",
      "antivirus_version",
      "signature_version",
      "is_active",
      "is_deleted",
      "is_uptodate",
      "is_dynamic",
      "date_expiration",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_computermodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "weight",
      "required_units",
      "depth",
      "power_connections",
      "power_consumption",
      "is_half_rack",
      "picture_front",
      "picture_rear",
      "pictures",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_computers": {
    "allowed": [
      "id",
      "entities_id",
      "name",
      "serial",
      "otherserial",
      "contact",
      "contact_num",
      "users_id_tech",
      "groups_id_tech",
      "comment",
      "date_mod",
      "autoupdatesystems_id",
      "locations_id",
      "networks_id",
      "computermodels_id",
      "computertypes_id",
      "is_template",
      "template_name",
      "manufacturers_id",
      "is_deleted",
      "is_dynamic",
      "users_id",
      "groups_id",
      "states_id",
      "ticket_tco",
      "uuid",
      "date_creation",
      "is_recursive",
      "last_inventory_update",
      "last_boot"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_computers_items": {
    "allowed": [
      "id",
      "items_id",
      "computers_id",
      "itemtype",
      "is_deleted",
      "is_dynamic"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": true
  },
  "glpi_computertypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_computervirtualmachines": {
    "allowed": [
      "id",
      "entities_id",
      "computers_id",
      "name",
      "virtualmachinestates_id",
      "virtualmachinesystems_id",
      "virtualmachinetypes_id",
      "uuid",
      "vcpu",
      "ram",
      "is_deleted",
      "is_dynamic",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_configs": {
    "allowed": [
      "id",
      "context",
      "name",
      "value"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_consumableitems": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "ref",
      "locations_id",
      "consumableitemtypes_id",
      "manufacturers_id",
      "users_id_tech",
      "groups_id_tech",
      "is_deleted",
      "comment",
      "alarm_threshold",
      "stock_target",
      "date_mod",
      "date_creation",
      "otherserial",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_consumableitemtypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_consumables": {
    "allowed": [
      "id",
      "entities_id",
      "consumableitems_id",
      "date_in",
      "date_out",
      "itemtype",
      "items_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_contacts": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "firstname",
      "registration_number",
      "phone",
      "phone2",
      "mobile",
      "fax",
      "email",
      "contacttypes_id",
      "comment",
      "is_deleted",
      "usertitles_id",
      "address",
      "postcode",
      "town",
      "state",
      "country",
      "date_mod",
      "date_creation",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_contacts_suppliers": {
    "allowed": [
      "id",
      "suppliers_id",
      "contacts_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_contacttypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_contractcosts": {
    "allowed": [
      "id",
      "contracts_id",
      "name",
      "comment",
      "begin_date",
      "end_date",
      "cost",
      "budgets_id",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_contracts": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "num",
      "contracttypes_id",
      "locations_id",
      "begin_date",
      "duration",
      "notice",
      "periodicity",
      "billing",
      "comment",
      "accounting_number",
      "is_deleted",
      "week_begin_hour",
      "week_end_hour",
      "saturday_begin_hour",
      "saturday_end_hour",
      "use_saturday",
      "sunday_begin_hour",
      "sunday_end_hour",
      "use_sunday",
      "max_links_allowed",
      "alert",
      "renewal",
      "template_name",
      "is_template",
      "states_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_contracts_items": {
    "allowed": [
      "id",
      "contracts_id",
      "items_id",
      "itemtype"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_contracts_suppliers": {
    "allowed": [
      "id",
      "suppliers_id",
      "contracts_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_contracttypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_crontasklogs": {
    "allowed": [
      "id",
      "crontasks_id",
      "crontasklogs_id",
      "date",
      "state",
      "elapsed",
      "volume",
      "content"
    ],
    "requiredOnCreate": [
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_crontasks": {
    "allowed": [
      "id",
      "itemtype",
      "name",
      "frequency",
      "param",
      "state",
      "mode",
      "allowmode",
      "hourmin",
      "hourmax",
      "logs_lifetime",
      "lastrun",
      "lastcode",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_dashboards_dashboards": {
    "allowed": [
      "id",
      "key",
      "name",
      "context",
      "users_id"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_dashboards_filters": {
    "allowed": [
      "id",
      "dashboards_dashboards_id",
      "users_id",
      "filter"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_dashboards_items": {
    "allowed": [
      "id",
      "dashboards_dashboards_id",
      "gridstack_id",
      "card_id",
      "x",
      "y",
      "width",
      "height",
      "card_options"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_dashboards_rights": {
    "allowed": [
      "id",
      "dashboards_dashboards_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_databaseinstancecategories": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_databaseinstances": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "version",
      "port",
      "path",
      "size",
      "databaseinstancetypes_id",
      "databaseinstancecategories_id",
      "locations_id",
      "manufacturers_id",
      "users_id_tech",
      "groups_id_tech",
      "states_id",
      "itemtype",
      "items_id",
      "is_onbackup",
      "is_active",
      "is_deleted",
      "is_helpdesk_visible",
      "is_dynamic",
      "autoupdatesystems_id",
      "date_creation",
      "date_mod",
      "date_lastboot",
      "date_lastbackup",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_databaseinstancetypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_databases": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "size",
      "databaseinstances_id",
      "is_onbackup",
      "is_active",
      "is_deleted",
      "is_dynamic",
      "date_creation",
      "date_mod",
      "date_update",
      "date_lastbackup"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_datacenters": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "locations_id",
      "is_deleted",
      "date_mod",
      "date_creation",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_dcrooms": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "locations_id",
      "vis_cols",
      "vis_rows",
      "blueprint",
      "datacenters_id",
      "is_deleted",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_devicebatteries": {
    "allowed": [
      "id",
      "designation",
      "comment",
      "manufacturers_id",
      "voltage",
      "capacity",
      "devicebatterytypes_id",
      "entities_id",
      "is_recursive",
      "devicebatterymodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicebatterymodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicebatterytypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicecameramodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicecameras": {
    "allowed": [
      "id",
      "designation",
      "flashunit",
      "lensfacing",
      "orientation",
      "focallength",
      "sensorsize",
      "comment",
      "manufacturers_id",
      "entities_id",
      "is_recursive",
      "devicecameramodels_id",
      "support",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicecasemodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicecases": {
    "allowed": [
      "id",
      "designation",
      "devicecasetypes_id",
      "comment",
      "manufacturers_id",
      "entities_id",
      "is_recursive",
      "devicecasemodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicecasetypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicecontrolmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicecontrols": {
    "allowed": [
      "id",
      "designation",
      "is_raid",
      "comment",
      "manufacturers_id",
      "interfacetypes_id",
      "entities_id",
      "is_recursive",
      "devicecontrolmodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicedrivemodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicedrives": {
    "allowed": [
      "id",
      "designation",
      "is_writer",
      "speed",
      "comment",
      "manufacturers_id",
      "interfacetypes_id",
      "entities_id",
      "is_recursive",
      "devicedrivemodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicefirmwaremodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicefirmwares": {
    "allowed": [
      "id",
      "designation",
      "comment",
      "manufacturers_id",
      "date",
      "version",
      "devicefirmwaretypes_id",
      "entities_id",
      "is_recursive",
      "devicefirmwaremodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicefirmwaretypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicegenericmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicegenerics": {
    "allowed": [
      "id",
      "designation",
      "devicegenerictypes_id",
      "comment",
      "manufacturers_id",
      "entities_id",
      "is_recursive",
      "locations_id",
      "states_id",
      "devicegenericmodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicegenerictypes": {
    "allowed": [
      "id",
      "name",
      "comment"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicegraphiccardmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicegraphiccards": {
    "allowed": [
      "id",
      "designation",
      "interfacetypes_id",
      "comment",
      "manufacturers_id",
      "memory_default",
      "entities_id",
      "is_recursive",
      "devicegraphiccardmodels_id",
      "chipset",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_deviceharddrivemodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_deviceharddrives": {
    "allowed": [
      "id",
      "designation",
      "rpm",
      "interfacetypes_id",
      "cache",
      "comment",
      "manufacturers_id",
      "capacity_default",
      "entities_id",
      "is_recursive",
      "deviceharddrivemodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicememories": {
    "allowed": [
      "id",
      "designation",
      "frequence",
      "comment",
      "manufacturers_id",
      "size_default",
      "devicememorytypes_id",
      "entities_id",
      "is_recursive",
      "devicememorymodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicememorymodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicememorytypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicemotherboardmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicemotherboards": {
    "allowed": [
      "id",
      "designation",
      "chipset",
      "comment",
      "manufacturers_id",
      "entities_id",
      "is_recursive",
      "devicemotherboardmodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicenetworkcardmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicenetworkcards": {
    "allowed": [
      "id",
      "designation",
      "bandwidth",
      "comment",
      "manufacturers_id",
      "mac_default",
      "entities_id",
      "is_recursive",
      "devicenetworkcardmodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicepcimodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicepcis": {
    "allowed": [
      "id",
      "designation",
      "comment",
      "manufacturers_id",
      "devicenetworkcardmodels_id",
      "entities_id",
      "is_recursive",
      "devicepcimodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicepowersupplies": {
    "allowed": [
      "id",
      "designation",
      "power",
      "is_atx",
      "comment",
      "manufacturers_id",
      "entities_id",
      "is_recursive",
      "devicepowersupplymodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicepowersupplymodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_deviceprocessormodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_deviceprocessors": {
    "allowed": [
      "id",
      "designation",
      "frequence",
      "comment",
      "manufacturers_id",
      "frequency_default",
      "nbcores_default",
      "nbthreads_default",
      "entities_id",
      "is_recursive",
      "deviceprocessormodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicesensormodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicesensors": {
    "allowed": [
      "id",
      "designation",
      "devicesensortypes_id",
      "devicesensormodels_id",
      "comment",
      "manufacturers_id",
      "entities_id",
      "is_recursive",
      "locations_id",
      "states_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicesensortypes": {
    "allowed": [
      "id",
      "name",
      "comment"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicesimcards": {
    "allowed": [
      "id",
      "designation",
      "comment",
      "entities_id",
      "is_recursive",
      "manufacturers_id",
      "voltage",
      "devicesimcardtypes_id",
      "date_mod",
      "date_creation",
      "allow_voip"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicesimcardtypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicesoundcardmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_devicesoundcards": {
    "allowed": [
      "id",
      "designation",
      "type",
      "comment",
      "manufacturers_id",
      "entities_id",
      "is_recursive",
      "devicesoundcardmodels_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_displaypreferences": {
    "allowed": [
      "id",
      "itemtype",
      "num",
      "rank",
      "users_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_documentcategories": {
    "allowed": [
      "id",
      "name",
      "comment",
      "documentcategories_id",
      "completename",
      "level",
      "ancestors_cache",
      "sons_cache",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_documents": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "filename",
      "filepath",
      "documentcategories_id",
      "mime",
      "date_mod",
      "comment",
      "is_deleted",
      "link",
      "users_id",
      "tickets_id",
      "sha1sum",
      "is_blacklisted",
      "tag",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_documents_items": {
    "allowed": [
      "id",
      "documents_id",
      "items_id",
      "itemtype",
      "entities_id",
      "is_recursive",
      "date_mod",
      "users_id",
      "timeline_position",
      "date_creation",
      "date"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_documenttypes": {
    "allowed": [
      "id",
      "name",
      "ext",
      "icon",
      "mime",
      "is_uploadable",
      "date_mod",
      "comment",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_domainrecords": {
    "allowed": [
      "id",
      "name",
      "data",
      "data_obj",
      "entities_id",
      "is_recursive",
      "domains_id",
      "domainrecordtypes_id",
      "ttl",
      "users_id_tech",
      "groups_id_tech",
      "is_deleted",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_domainrecordtypes": {
    "allowed": [
      "id",
      "name",
      "fields",
      "entities_id",
      "is_recursive",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_domainrelations": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_domains": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "domaintypes_id",
      "date_expiration",
      "date_domaincreation",
      "users_id_tech",
      "groups_id_tech",
      "is_deleted",
      "comment",
      "is_template",
      "template_name",
      "is_active",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_domains_items": {
    "allowed": [
      "id",
      "domains_id",
      "items_id",
      "itemtype",
      "domainrelations_id",
      "is_dynamic",
      "is_deleted"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": true
  },
  "glpi_domaintypes": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_dropdowntranslations": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "language",
      "field",
      "value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_enclosuremodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "weight",
      "required_units",
      "depth",
      "power_connections",
      "power_consumption",
      "is_half_rack",
      "picture_front",
      "picture_rear",
      "pictures",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_enclosures": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "locations_id",
      "serial",
      "otherserial",
      "enclosuremodels_id",
      "users_id_tech",
      "groups_id_tech",
      "is_template",
      "template_name",
      "is_deleted",
      "orientation",
      "power_supplies",
      "states_id",
      "comment",
      "manufacturers_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_entities": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "completename",
      "comment",
      "level",
      "sons_cache",
      "ancestors_cache",
      "registration_number",
      "address",
      "postcode",
      "town",
      "state",
      "country",
      "website",
      "phonenumber",
      "fax",
      "email",
      "admin_email",
      "admin_email_name",
      "from_email",
      "from_email_name",
      "noreply_email",
      "noreply_email_name",
      "replyto_email",
      "replyto_email_name",
      "notification_subject_tag",
      "ldap_dn",
      "tag",
      "authldaps_id",
      "mail_domain",
      "entity_ldapfilter",
      "mailing_signature",
      "cartridges_alert_repeat",
      "consumables_alert_repeat",
      "use_licenses_alert",
      "send_licenses_alert_before_delay",
      "use_certificates_alert",
      "send_certificates_alert_before_delay",
      "certificates_alert_repeat_interval",
      "use_contracts_alert",
      "send_contracts_alert_before_delay",
      "use_infocoms_alert",
      "send_infocoms_alert_before_delay",
      "use_reservations_alert",
      "use_domains_alert",
      "send_domains_alert_close_expiries_delay",
      "send_domains_alert_expired_delay",
      "autoclose_delay",
      "autopurge_delay",
      "notclosed_delay",
      "calendars_strategy",
      "calendars_id",
      "auto_assign_mode",
      "tickettype",
      "max_closedate",
      "inquest_config",
      "inquest_rate",
      "inquest_delay",
      "inquest_URL",
      "autofill_warranty_date",
      "autofill_use_date",
      "autofill_buy_date",
      "autofill_delivery_date",
      "autofill_order_date",
      "tickettemplates_strategy",
      "tickettemplates_id",
      "changetemplates_strategy",
      "changetemplates_id",
      "problemtemplates_strategy",
      "problemtemplates_id",
      "entities_strategy_software",
      "entities_id_software",
      "default_contract_alert",
      "default_infocom_alert",
      "default_cartridges_alarm_threshold",
      "default_consumables_alarm_threshold",
      "delay_send_emails",
      "is_notif_enable_default",
      "inquest_duration",
      "date_mod",
      "date_creation",
      "autofill_decommission_date",
      "suppliers_as_private",
      "anonymize_support_agents",
      "display_users_initials",
      "contracts_strategy_default",
      "contracts_id_default",
      "enable_custom_css",
      "custom_css_code",
      "latitude",
      "longitude",
      "altitude",
      "transfers_strategy",
      "transfers_id",
      "agent_base_url"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_entities_knowbaseitems": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_entities_reminders": {
    "allowed": [
      "id",
      "reminders_id",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_entities_rssfeeds": {
    "allowed": [
      "id",
      "rssfeeds_id",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_events": {
    "allowed": [
      "id",
      "items_id",
      "type",
      "date",
      "service",
      "level",
      "message"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_fieldblacklists": {
    "allowed": [
      "id",
      "name",
      "field",
      "value",
      "itemtype",
      "entities_id",
      "is_recursive",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_fieldunicities": {
    "allowed": [
      "id",
      "name",
      "is_recursive",
      "itemtype",
      "entities_id",
      "fields",
      "is_active",
      "action_refuse",
      "action_notify",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_filesystems": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_fqdns": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "fqdn",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_groups": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "ldap_field",
      "ldap_value",
      "ldap_group_dn",
      "date_mod",
      "groups_id",
      "completename",
      "level",
      "ancestors_cache",
      "sons_cache",
      "is_requester",
      "is_watcher",
      "is_assign",
      "is_task",
      "is_notify",
      "is_itemgroup",
      "is_usergroup",
      "is_manager",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_groups_knowbaseitems": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "groups_id",
      "entities_id",
      "is_recursive",
      "no_entity_restriction"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_groups_problems": {
    "allowed": [
      "id",
      "problems_id",
      "groups_id",
      "type"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_groups_reminders": {
    "allowed": [
      "id",
      "reminders_id",
      "groups_id",
      "entities_id",
      "is_recursive",
      "no_entity_restriction"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_groups_rssfeeds": {
    "allowed": [
      "id",
      "rssfeeds_id",
      "groups_id",
      "entities_id",
      "is_recursive",
      "no_entity_restriction"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_groups_tickets": {
    "allowed": [
      "id",
      "tickets_id",
      "groups_id",
      "type"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_groups_users": {
    "allowed": [
      "id",
      "users_id",
      "groups_id",
      "is_dynamic",
      "is_manager",
      "is_userdelegate"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_holidays": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment",
      "begin_date",
      "end_date",
      "is_perpetual",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_imageformats": {
    "allowed": [
      "id",
      "name",
      "date_mod",
      "comment",
      "date_creation",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_imageresolutions": {
    "allowed": [
      "id",
      "name",
      "is_video",
      "date_mod",
      "comment",
      "date_creation",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_impactcompounds": {
    "allowed": [
      "id",
      "name",
      "color"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_impactcontexts": {
    "allowed": [
      "id",
      "positions",
      "zoom",
      "pan_x",
      "pan_y",
      "impact_color",
      "depends_color",
      "impact_and_depends_color",
      "show_depends",
      "show_impact",
      "max_depth"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_impactitems": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "parent_id",
      "impactcontexts_id",
      "is_slave"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_impactrelations": {
    "allowed": [
      "id",
      "itemtype_source",
      "items_id_source",
      "itemtype_impacted",
      "items_id_impacted"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_infocoms": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "entities_id",
      "is_recursive",
      "buy_date",
      "use_date",
      "warranty_duration",
      "warranty_info",
      "suppliers_id",
      "order_number",
      "delivery_number",
      "immo_number",
      "value",
      "warranty_value",
      "sink_time",
      "sink_type",
      "sink_coeff",
      "comment",
      "bill",
      "budgets_id",
      "alert",
      "order_date",
      "delivery_date",
      "inventory_date",
      "warranty_date",
      "date_mod",
      "date_creation",
      "decommission_date",
      "businesscriticities_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_interfacetypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_ipaddresses": {
    "allowed": [
      "id",
      "entities_id",
      "items_id",
      "itemtype",
      "version",
      "name",
      "binary_0",
      "binary_1",
      "binary_2",
      "binary_3",
      "is_deleted",
      "is_dynamic",
      "mainitems_id",
      "mainitemtype"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_ipaddresses_ipnetworks": {
    "allowed": [
      "id",
      "ipaddresses_id",
      "ipnetworks_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_ipnetworks": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "ipnetworks_id",
      "completename",
      "level",
      "ancestors_cache",
      "sons_cache",
      "addressable",
      "version",
      "name",
      "address",
      "address_0",
      "address_1",
      "address_2",
      "address_3",
      "netmask",
      "netmask_0",
      "netmask_1",
      "netmask_2",
      "netmask_3",
      "gateway",
      "gateway_0",
      "gateway_1",
      "gateway_2",
      "gateway_3",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_ipnetworks_vlans": {
    "allowed": [
      "id",
      "ipnetworks_id",
      "vlans_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_items_clusters": {
    "allowed": [
      "id",
      "clusters_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_items_devicebatteries": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicebatteries_id",
      "manufacturing_date",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "locations_id",
      "states_id",
      "real_capacity"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicecameras": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicecameras_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "locations_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicecameras_imageformats": {
    "allowed": [
      "id",
      "items_devicecameras_id",
      "imageformats_id",
      "is_dynamic",
      "is_deleted"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": true
  },
  "glpi_items_devicecameras_imageresolutions": {
    "allowed": [
      "id",
      "items_devicecameras_id",
      "imageresolutions_id",
      "is_dynamic",
      "is_deleted"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": true
  },
  "glpi_items_devicecases": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicecases_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicecontrols": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicecontrols_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicedrives": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicedrives_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicefirmwares": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicefirmwares_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicegenerics": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicegenerics_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicegraphiccards": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicegraphiccards_id",
      "memory",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_deviceharddrives": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "deviceharddrives_id",
      "capacity",
      "serial",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicememories": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicememories_id",
      "size",
      "serial",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicemotherboards": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicemotherboards_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicenetworkcards": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicenetworkcards_id",
      "mac",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicepcis": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicepcis_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicepowersupplies": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicepowersupplies_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_deviceprocessors": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "deviceprocessors_id",
      "frequency",
      "serial",
      "is_deleted",
      "is_dynamic",
      "nbcores",
      "nbthreads",
      "entities_id",
      "is_recursive",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicesensors": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicesensors_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicesimcards": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicesimcards_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "otherserial",
      "states_id",
      "locations_id",
      "lines_id",
      "users_id",
      "groups_id",
      "pin",
      "pin2",
      "puk",
      "puk2",
      "msin",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_devicesoundcards": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "devicesoundcards_id",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "serial",
      "busID",
      "otherserial",
      "locations_id",
      "states_id"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_disks": {
    "allowed": [
      "id",
      "entities_id",
      "itemtype",
      "items_id",
      "name",
      "device",
      "mountpoint",
      "filesystems_id",
      "totalsize",
      "freesize",
      "is_deleted",
      "is_dynamic",
      "encryption_status",
      "encryption_tool",
      "encryption_algorithm",
      "encryption_type",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_enclosures": {
    "allowed": [
      "id",
      "enclosures_id",
      "itemtype",
      "items_id",
      "position"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_items_kanbans": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "users_id",
      "state",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_items_operatingsystems": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "operatingsystems_id",
      "operatingsystemversions_id",
      "operatingsystemservicepacks_id",
      "operatingsystemarchitectures_id",
      "operatingsystemkernelversions_id",
      "license_number",
      "licenseid",
      "company",
      "owner",
      "hostid",
      "operatingsystemeditions_id",
      "date_mod",
      "date_creation",
      "is_deleted",
      "is_dynamic",
      "entities_id",
      "is_recursive",
      "install_date"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_problems": {
    "allowed": [
      "id",
      "problems_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_items_projects": {
    "allowed": [
      "id",
      "projects_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_items_racks": {
    "allowed": [
      "id",
      "racks_id",
      "itemtype",
      "items_id",
      "position",
      "orientation",
      "bgcolor",
      "hpos",
      "is_reserved"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_items_remotemanagements": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "remoteid",
      "type",
      "is_dynamic",
      "is_deleted"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": true
  },
  "glpi_items_softwarelicenses": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "softwarelicenses_id",
      "is_deleted",
      "is_dynamic"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": true
  },
  "glpi_items_softwareversions": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "softwareversions_id",
      "is_deleted_item",
      "is_template_item",
      "entities_id",
      "is_deleted",
      "is_dynamic",
      "date_install"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": true
  },
  "glpi_items_tickets": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "tickets_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_itilcategories": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "itilcategories_id",
      "name",
      "completename",
      "comment",
      "level",
      "knowbaseitemcategories_id",
      "users_id",
      "groups_id",
      "code",
      "ancestors_cache",
      "sons_cache",
      "is_helpdeskvisible",
      "tickettemplates_id_incident",
      "tickettemplates_id_demand",
      "changetemplates_id",
      "problemtemplates_id",
      "is_incident",
      "is_request",
      "is_problem",
      "is_change",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_itilfollowups": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "date",
      "users_id",
      "users_id_editor",
      "content",
      "is_private",
      "requesttypes_id",
      "date_mod",
      "date_creation",
      "timeline_position",
      "sourceitems_id",
      "sourceof_items_id"
    ],
    "requiredOnCreate": [
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_itilfollowuptemplates": {
    "allowed": [
      "id",
      "date_creation",
      "date_mod",
      "entities_id",
      "is_recursive",
      "name",
      "content",
      "requesttypes_id",
      "is_private",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_itils_projects": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "projects_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_itilsolutions": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "solutiontypes_id",
      "solutiontype_name",
      "content",
      "date_creation",
      "date_mod",
      "date_approval",
      "users_id",
      "user_name",
      "users_id_editor",
      "users_id_approval",
      "user_name_approval",
      "status",
      "itilfollowups_id"
    ],
    "requiredOnCreate": [
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitemcategories": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "knowbaseitemcategories_id",
      "name",
      "completename",
      "comment",
      "level",
      "sons_cache",
      "ancestors_cache",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitems": {
    "allowed": [
      "id",
      "name",
      "answer",
      "is_faq",
      "users_id",
      "view",
      "date_creation",
      "date_mod",
      "begin_date",
      "end_date"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitems_comments": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "users_id",
      "language",
      "comment",
      "parent_comment_id",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitems_items": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "itemtype",
      "items_id",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitems_knowbaseitemcategories": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "knowbaseitemcategories_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitems_profiles": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "profiles_id",
      "entities_id",
      "is_recursive",
      "no_entity_restriction"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitems_revisions": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "revision",
      "name",
      "answer",
      "language",
      "users_id",
      "date"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitems_users": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "users_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_knowbaseitemtranslations": {
    "allowed": [
      "id",
      "knowbaseitems_id",
      "language",
      "name",
      "answer",
      "users_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_lineoperators": {
    "allowed": [
      "id",
      "name",
      "comment",
      "mcc",
      "mnc",
      "entities_id",
      "is_recursive",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_lines": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "is_deleted",
      "caller_num",
      "caller_name",
      "users_id",
      "groups_id",
      "lineoperators_id",
      "locations_id",
      "states_id",
      "linetypes_id",
      "date_creation",
      "date_mod",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_linetypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_links": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "link",
      "data",
      "open_window",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_links_itemtypes": {
    "allowed": [
      "id",
      "links_id",
      "itemtype"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_locations": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "locations_id",
      "completename",
      "comment",
      "level",
      "ancestors_cache",
      "sons_cache",
      "address",
      "postcode",
      "town",
      "state",
      "country",
      "building",
      "room",
      "latitude",
      "longitude",
      "altitude",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_lockedfields": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "field",
      "value",
      "date_mod",
      "date_creation",
      "is_global"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_logs": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "itemtype_link",
      "linked_action",
      "user_name",
      "date_mod",
      "id_search_option",
      "old_value",
      "new_value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_mailcollectors": {
    "allowed": [
      "id",
      "name",
      "host",
      "login",
      "filesize_max",
      "is_active",
      "date_mod",
      "comment",
      "passwd",
      "accepted",
      "refused",
      "errors",
      "use_mail_date",
      "date_creation",
      "requester_field",
      "add_cc_to_observer",
      "collect_only_unread",
      "last_collect_date"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_manuallinks": {
    "allowed": [
      "id",
      "name",
      "url",
      "open_window",
      "icon",
      "comment",
      "items_id",
      "itemtype",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_manufacturers": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_monitormodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "weight",
      "required_units",
      "depth",
      "power_connections",
      "power_consumption",
      "is_half_rack",
      "picture_front",
      "picture_rear",
      "pictures",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_monitors": {
    "allowed": [
      "id",
      "entities_id",
      "name",
      "date_mod",
      "contact",
      "contact_num",
      "users_id_tech",
      "groups_id_tech",
      "comment",
      "serial",
      "otherserial",
      "size",
      "have_micro",
      "have_speaker",
      "have_subd",
      "have_bnc",
      "have_dvi",
      "have_pivot",
      "have_hdmi",
      "have_displayport",
      "locations_id",
      "monitortypes_id",
      "monitormodels_id",
      "manufacturers_id",
      "is_global",
      "is_deleted",
      "is_template",
      "template_name",
      "users_id",
      "groups_id",
      "states_id",
      "ticket_tco",
      "is_dynamic",
      "autoupdatesystems_id",
      "uuid",
      "date_creation",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_monitortypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_networkaliases": {
    "allowed": [
      "id",
      "entities_id",
      "networknames_id",
      "name",
      "fqdns_id",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_networkequipmentmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "weight",
      "required_units",
      "depth",
      "power_connections",
      "power_consumption",
      "is_half_rack",
      "picture_front",
      "picture_rear",
      "pictures",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_networkequipments": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "ram",
      "serial",
      "otherserial",
      "contact",
      "contact_num",
      "users_id_tech",
      "groups_id_tech",
      "date_mod",
      "comment",
      "locations_id",
      "networks_id",
      "networkequipmenttypes_id",
      "networkequipmentmodels_id",
      "manufacturers_id",
      "is_deleted",
      "is_template",
      "template_name",
      "users_id",
      "groups_id",
      "states_id",
      "ticket_tco",
      "is_dynamic",
      "uuid",
      "date_creation",
      "autoupdatesystems_id",
      "sysdescr",
      "cpu",
      "uptime",
      "last_inventory_update",
      "snmpcredentials_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_networkequipmenttypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_networkinterfaces": {
    "allowed": [
      "id",
      "name",
      "comment"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_networknames": {
    "allowed": [
      "id",
      "entities_id",
      "items_id",
      "itemtype",
      "name",
      "comment",
      "fqdns_id",
      "ipnetworks_id",
      "is_deleted",
      "is_dynamic",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_networkportaggregates": {
    "allowed": [
      "id",
      "networkports_id",
      "networkports_id_list",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkportaliases": {
    "allowed": [
      "id",
      "networkports_id",
      "networkports_id_alias",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkportconnectionlogs": {
    "allowed": [
      "id",
      "date",
      "connected",
      "networkports_id_source",
      "networkports_id_destination"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkportdialups": {
    "allowed": [
      "id",
      "networkports_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkportethernets": {
    "allowed": [
      "id",
      "networkports_id",
      "items_devicenetworkcards_id",
      "type",
      "speed",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkportfiberchannels": {
    "allowed": [
      "id",
      "networkports_id",
      "items_devicenetworkcards_id",
      "networkportfiberchanneltypes_id",
      "wwn",
      "speed",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkportfiberchanneltypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_networkportlocals": {
    "allowed": [
      "id",
      "networkports_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkportmetrics": {
    "allowed": [
      "id",
      "date",
      "ifinbytes",
      "ifinerrors",
      "ifoutbytes",
      "ifouterrors",
      "networkports_id",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkports": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "entities_id",
      "is_recursive",
      "logical_number",
      "name",
      "instantiation_type",
      "mac",
      "comment",
      "is_deleted",
      "is_dynamic",
      "date_mod",
      "date_creation",
      "ifmtu",
      "ifspeed",
      "ifinternalstatus",
      "ifconnectionstatus",
      "iflastchange",
      "ifinbytes",
      "ifinerrors",
      "ifoutbytes",
      "ifouterrors",
      "ifstatus",
      "ifdescr",
      "ifalias",
      "portduplex",
      "trunk",
      "lastup"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_networkports_networkports": {
    "allowed": [
      "id",
      "networkports_id_1",
      "networkports_id_2"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkports_vlans": {
    "allowed": [
      "id",
      "networkports_id",
      "vlans_id",
      "tagged"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networkporttypes": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "value_decimal",
      "name",
      "comment",
      "is_importable",
      "instantiation_type",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_networkportwifis": {
    "allowed": [
      "id",
      "networkports_id",
      "items_devicenetworkcards_id",
      "wifinetworks_id",
      "networkportwifis_id",
      "version",
      "mode",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_networks": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_notepads": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "date_creation",
      "date_mod",
      "users_id",
      "users_id_lastupdater",
      "content"
    ],
    "requiredOnCreate": [
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_notifications": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "itemtype",
      "event",
      "comment",
      "is_recursive",
      "is_active",
      "date_mod",
      "date_creation",
      "allow_response"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_notifications_notificationtemplates": {
    "allowed": [
      "id",
      "notifications_id",
      "mode",
      "notificationtemplates_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_notificationtargets": {
    "allowed": [
      "id",
      "items_id",
      "type",
      "notifications_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_notificationtemplates": {
    "allowed": [
      "id",
      "name",
      "itemtype",
      "date_mod",
      "comment",
      "css",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_notificationtemplatetranslations": {
    "allowed": [
      "id",
      "notificationtemplates_id",
      "language",
      "subject",
      "content_text",
      "content_html"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_notimportedemails": {
    "allowed": [
      "id",
      "from",
      "to",
      "mailcollectors_id",
      "date",
      "subject",
      "messageid",
      "reason",
      "users_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_objectlocks": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "users_id",
      "date"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_olalevelactions": {
    "allowed": [
      "id",
      "olalevels_id",
      "action_type",
      "field",
      "value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_olalevelcriterias": {
    "allowed": [
      "id",
      "olalevels_id",
      "criteria",
      "condition",
      "pattern"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_olalevels": {
    "allowed": [
      "id",
      "name",
      "olas_id",
      "execution_time",
      "is_active",
      "entities_id",
      "is_recursive",
      "match",
      "uuid"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_olalevels_tickets": {
    "allowed": [
      "id",
      "tickets_id",
      "olalevels_id",
      "date"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_olas": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "type",
      "comment",
      "number_time",
      "use_ticket_calendar",
      "calendars_id",
      "date_mod",
      "definition_time",
      "end_of_working_day",
      "date_creation",
      "slms_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_operatingsystemarchitectures": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_operatingsystemeditions": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_operatingsystemkernels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_operatingsystemkernelversions": {
    "allowed": [
      "id",
      "operatingsystemkernels_id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_operatingsystems": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_operatingsystemservicepacks": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_operatingsystemversions": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_passivedcequipmentmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "weight",
      "required_units",
      "depth",
      "power_connections",
      "power_consumption",
      "is_half_rack",
      "picture_front",
      "picture_rear",
      "pictures",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_passivedcequipments": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "locations_id",
      "serial",
      "otherserial",
      "passivedcequipmentmodels_id",
      "passivedcequipmenttypes_id",
      "users_id_tech",
      "groups_id_tech",
      "is_template",
      "template_name",
      "is_deleted",
      "states_id",
      "comment",
      "manufacturers_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_passivedcequipmenttypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_pcivendors": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "vendorid",
      "deviceid",
      "name",
      "comment",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_pdumodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "weight",
      "required_units",
      "depth",
      "power_connections",
      "max_power",
      "is_half_rack",
      "picture_front",
      "picture_rear",
      "pictures",
      "is_rackable",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_pdus": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "locations_id",
      "serial",
      "otherserial",
      "pdumodels_id",
      "users_id_tech",
      "groups_id_tech",
      "is_template",
      "template_name",
      "is_deleted",
      "states_id",
      "comment",
      "manufacturers_id",
      "pdutypes_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_pdus_plugs": {
    "allowed": [
      "id",
      "plugs_id",
      "pdus_id",
      "number_plugs",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_pdus_racks": {
    "allowed": [
      "id",
      "racks_id",
      "pdus_id",
      "side",
      "position",
      "bgcolor",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_pdutypes": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_pendingreasons": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "followup_frequency",
      "followups_before_resolution",
      "itilfollowuptemplates_id",
      "solutiontemplates_id",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_pendingreasons_items": {
    "allowed": [
      "id",
      "pendingreasons_id",
      "items_id",
      "itemtype",
      "followup_frequency",
      "followups_before_resolution",
      "bump_count",
      "last_bump_date",
      "previous_status"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_peripheralmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "weight",
      "required_units",
      "depth",
      "power_connections",
      "power_consumption",
      "is_half_rack",
      "picture_front",
      "picture_rear",
      "pictures",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_peripherals": {
    "allowed": [
      "id",
      "entities_id",
      "name",
      "date_mod",
      "contact",
      "contact_num",
      "users_id_tech",
      "groups_id_tech",
      "comment",
      "serial",
      "otherserial",
      "locations_id",
      "peripheraltypes_id",
      "peripheralmodels_id",
      "brand",
      "manufacturers_id",
      "is_global",
      "is_deleted",
      "is_template",
      "template_name",
      "users_id",
      "groups_id",
      "states_id",
      "ticket_tco",
      "is_dynamic",
      "autoupdatesystems_id",
      "uuid",
      "date_creation",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_peripheraltypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_phonemodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "date_mod",
      "date_creation",
      "picture_front",
      "picture_rear",
      "pictures"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_phonepowersupplies": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_phones": {
    "allowed": [
      "id",
      "entities_id",
      "name",
      "date_mod",
      "contact",
      "contact_num",
      "users_id_tech",
      "groups_id_tech",
      "comment",
      "serial",
      "otherserial",
      "locations_id",
      "phonetypes_id",
      "phonemodels_id",
      "brand",
      "phonepowersupplies_id",
      "number_line",
      "have_headset",
      "have_hp",
      "manufacturers_id",
      "is_global",
      "is_deleted",
      "is_template",
      "template_name",
      "users_id",
      "groups_id",
      "states_id",
      "ticket_tco",
      "is_dynamic",
      "autoupdatesystems_id",
      "uuid",
      "date_creation",
      "is_recursive",
      "last_inventory_update"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_phonetypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_planningeventcategories": {
    "allowed": [
      "id",
      "name",
      "color",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_planningexternalevents": {
    "allowed": [
      "id",
      "uuid",
      "planningexternaleventtemplates_id",
      "entities_id",
      "is_recursive",
      "date",
      "users_id",
      "users_id_guests",
      "groups_id",
      "name",
      "text",
      "begin",
      "end",
      "rrule",
      "state",
      "planningeventcategories_id",
      "background",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_planningexternaleventtemplates": {
    "allowed": [
      "id",
      "entities_id",
      "name",
      "text",
      "comment",
      "duration",
      "before_time",
      "rrule",
      "state",
      "planningeventcategories_id",
      "background",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_planningrecalls": {
    "allowed": [
      "id",
      "items_id",
      "itemtype",
      "users_id",
      "before_time",
      "when"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_plugins": {
    "allowed": [
      "id",
      "directory",
      "name",
      "version",
      "state",
      "author",
      "homepage",
      "license"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_plugs": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_printerlogs": {
    "allowed": [
      "id",
      "printers_id",
      "total_pages",
      "bw_pages",
      "color_pages",
      "rv_pages",
      "prints",
      "bw_prints",
      "color_prints",
      "copies",
      "bw_copies",
      "color_copies",
      "scanned",
      "date",
      "date_creation",
      "date_mod",
      "faxed"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_printermodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "date_mod",
      "date_creation",
      "picture_front",
      "picture_rear",
      "pictures"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_printers": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "date_mod",
      "contact",
      "contact_num",
      "users_id_tech",
      "groups_id_tech",
      "serial",
      "otherserial",
      "have_serial",
      "have_parallel",
      "have_usb",
      "have_wifi",
      "have_ethernet",
      "comment",
      "memory_size",
      "locations_id",
      "networks_id",
      "printertypes_id",
      "printermodels_id",
      "manufacturers_id",
      "is_global",
      "is_deleted",
      "is_template",
      "template_name",
      "init_pages_counter",
      "last_pages_counter",
      "users_id",
      "groups_id",
      "states_id",
      "ticket_tco",
      "is_dynamic",
      "uuid",
      "date_creation",
      "sysdescr",
      "last_inventory_update",
      "snmpcredentials_id",
      "autoupdatesystems_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_printers_cartridgeinfos": {
    "allowed": [
      "id",
      "printers_id",
      "property",
      "value",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_printertypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_problemcosts": {
    "allowed": [
      "id",
      "problems_id",
      "name",
      "comment",
      "begin_date",
      "end_date",
      "actiontime",
      "cost_time",
      "cost_fixed",
      "cost_material",
      "budgets_id",
      "entities_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_problems": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "is_deleted",
      "status",
      "content",
      "date_mod",
      "date",
      "solvedate",
      "closedate",
      "time_to_resolve",
      "users_id_recipient",
      "users_id_lastupdater",
      "urgency",
      "impact",
      "priority",
      "itilcategories_id",
      "impactcontent",
      "causecontent",
      "symptomcontent",
      "actiontime",
      "begin_waiting_date",
      "waiting_duration",
      "close_delay_stat",
      "solve_delay_stat",
      "date_creation",
      "locations_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": true
  },
  "glpi_problems_suppliers": {
    "allowed": [
      "id",
      "problems_id",
      "suppliers_id",
      "type",
      "use_notification",
      "alternative_email"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_problems_tickets": {
    "allowed": [
      "id",
      "problems_id",
      "tickets_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_problems_users": {
    "allowed": [
      "id",
      "problems_id",
      "users_id",
      "type",
      "use_notification",
      "alternative_email"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_problemtasks": {
    "allowed": [
      "id",
      "uuid",
      "problems_id",
      "taskcategories_id",
      "date",
      "begin",
      "end",
      "users_id",
      "users_id_editor",
      "users_id_tech",
      "groups_id_tech",
      "content",
      "actiontime",
      "state",
      "date_mod",
      "date_creation",
      "tasktemplates_id",
      "timeline_position",
      "is_private"
    ],
    "requiredOnCreate": [
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_problemtemplatehiddenfields": {
    "allowed": [
      "id",
      "problemtemplates_id",
      "num"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_problemtemplatemandatoryfields": {
    "allowed": [
      "id",
      "problemtemplates_id",
      "num"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_problemtemplatepredefinedfields": {
    "allowed": [
      "id",
      "problemtemplates_id",
      "num",
      "value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_problemtemplates": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_profilerights": {
    "allowed": [
      "id",
      "profiles_id",
      "name",
      "rights"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_profiles": {
    "allowed": [
      "id",
      "name",
      "interface",
      "is_default",
      "helpdesk_hardware",
      "helpdesk_item_type",
      "ticket_status",
      "date_mod",
      "comment",
      "problem_status",
      "create_ticket_on_login",
      "tickettemplates_id",
      "changetemplates_id",
      "problemtemplates_id",
      "change_status",
      "managed_domainrecordtypes",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_profiles_reminders": {
    "allowed": [
      "id",
      "reminders_id",
      "profiles_id",
      "entities_id",
      "is_recursive",
      "no_entity_restriction"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_profiles_rssfeeds": {
    "allowed": [
      "id",
      "rssfeeds_id",
      "profiles_id",
      "entities_id",
      "is_recursive",
      "no_entity_restriction"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_profiles_users": {
    "allowed": [
      "id",
      "users_id",
      "profiles_id",
      "entities_id",
      "is_recursive",
      "is_dynamic",
      "is_default_profile"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_projectcosts": {
    "allowed": [
      "id",
      "projects_id",
      "name",
      "comment",
      "begin_date",
      "end_date",
      "cost",
      "budgets_id",
      "entities_id",
      "is_recursive"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_projects": {
    "allowed": [
      "id",
      "name",
      "code",
      "priority",
      "entities_id",
      "is_recursive",
      "projects_id",
      "projectstates_id",
      "projecttypes_id",
      "date",
      "date_mod",
      "users_id",
      "groups_id",
      "plan_start_date",
      "plan_end_date",
      "real_start_date",
      "real_end_date",
      "percent_done",
      "auto_percent_done",
      "show_on_global_gantt",
      "content",
      "comment",
      "is_deleted",
      "date_creation",
      "projecttemplates_id",
      "is_template",
      "template_name"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": true
  },
  "glpi_projectstates": {
    "allowed": [
      "id",
      "name",
      "comment",
      "color",
      "is_finished",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_projecttasklinks": {
    "allowed": [
      "id",
      "projecttasks_id_source",
      "source_uuid",
      "projecttasks_id_target",
      "target_uuid",
      "type",
      "lag",
      "lead"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_projecttasks": {
    "allowed": [
      "id",
      "uuid",
      "name",
      "content",
      "comment",
      "entities_id",
      "is_recursive",
      "projects_id",
      "projecttasks_id",
      "date_creation",
      "date_mod",
      "plan_start_date",
      "plan_end_date",
      "real_start_date",
      "real_end_date",
      "planned_duration",
      "effective_duration",
      "projectstates_id",
      "projecttasktypes_id",
      "users_id",
      "percent_done",
      "auto_percent_done",
      "is_milestone",
      "projecttasktemplates_id",
      "is_template",
      "template_name"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_projecttasks_tickets": {
    "allowed": [
      "id",
      "tickets_id",
      "projecttasks_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_projecttaskteams": {
    "allowed": [
      "id",
      "projecttasks_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_projecttasktemplates": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "description",
      "comment",
      "projects_id",
      "projecttasks_id",
      "plan_start_date",
      "plan_end_date",
      "real_start_date",
      "real_end_date",
      "planned_duration",
      "effective_duration",
      "projectstates_id",
      "projecttasktypes_id",
      "users_id",
      "percent_done",
      "is_milestone",
      "comments",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_projecttasktypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_projectteams": {
    "allowed": [
      "id",
      "projects_id",
      "itemtype",
      "items_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_projecttypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_queuednotifications": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "notificationtemplates_id",
      "entities_id",
      "is_deleted",
      "sent_try",
      "create_time",
      "send_time",
      "sent_time",
      "name",
      "sender",
      "sendername",
      "recipient",
      "recipientname",
      "replyto",
      "replytoname",
      "headers",
      "body_html",
      "body_text",
      "messageid",
      "documents",
      "mode",
      "event"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_rackmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "product_number",
      "date_mod",
      "date_creation",
      "pictures"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_racks": {
    "allowed": [
      "id",
      "name",
      "comment",
      "entities_id",
      "is_recursive",
      "locations_id",
      "serial",
      "otherserial",
      "rackmodels_id",
      "manufacturers_id",
      "racktypes_id",
      "states_id",
      "users_id_tech",
      "groups_id_tech",
      "width",
      "height",
      "depth",
      "number_units",
      "is_template",
      "template_name",
      "is_deleted",
      "dcrooms_id",
      "room_orientation",
      "position",
      "bgcolor",
      "max_power",
      "mesured_power",
      "max_weight",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_racktypes": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_recurrentchanges": {
    "allowed": [
      "id",
      "name",
      "comment",
      "entities_id",
      "is_recursive",
      "is_active",
      "changetemplates_id",
      "begin_date",
      "periodicity",
      "create_before",
      "next_creation_date",
      "calendars_id",
      "end_date"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_refusedequipments": {
    "allowed": [
      "id",
      "name",
      "itemtype",
      "entities_id",
      "ip",
      "mac",
      "rules_id",
      "method",
      "serial",
      "uuid",
      "agents_id",
      "autoupdatesystems_id",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_registeredids": {
    "allowed": [
      "id",
      "name",
      "items_id",
      "itemtype",
      "device_type"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_reminders": {
    "allowed": [
      "id",
      "uuid",
      "date",
      "users_id",
      "name",
      "text",
      "begin",
      "end",
      "is_planned",
      "date_mod",
      "state",
      "begin_view_date",
      "end_view_date",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_reminders_users": {
    "allowed": [
      "id",
      "reminders_id",
      "users_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_remindertranslations": {
    "allowed": [
      "id",
      "reminders_id",
      "language",
      "name",
      "text",
      "users_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_requesttypes": {
    "allowed": [
      "id",
      "name",
      "is_helpdesk_default",
      "is_followup_default",
      "is_mail_default",
      "is_mailfollowup_default",
      "is_active",
      "is_ticketheader",
      "is_itilfollowup",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_reservationitems": {
    "allowed": [
      "id",
      "itemtype",
      "entities_id",
      "is_recursive",
      "items_id",
      "comment",
      "is_active"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_reservations": {
    "allowed": [
      "id",
      "reservationitems_id",
      "begin",
      "end",
      "users_id",
      "comment",
      "group"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_rssfeeds": {
    "allowed": [
      "id",
      "name",
      "users_id",
      "comment",
      "url",
      "refresh_rate",
      "max_items",
      "have_error",
      "is_active",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_rssfeeds_users": {
    "allowed": [
      "id",
      "rssfeeds_id",
      "users_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_ruleactions": {
    "allowed": [
      "id",
      "rules_id",
      "action_type",
      "field",
      "value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_rulecriterias": {
    "allowed": [
      "id",
      "rules_id",
      "criteria",
      "condition",
      "pattern"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_rulematchedlogs": {
    "allowed": [
      "id",
      "date",
      "items_id",
      "itemtype",
      "rules_id",
      "agents_id",
      "method"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_rulerightparameters": {
    "allowed": [
      "id",
      "name",
      "value",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_rules": {
    "allowed": [
      "id",
      "entities_id",
      "sub_type",
      "ranking",
      "name",
      "description",
      "match",
      "is_active",
      "comment",
      "date_mod",
      "is_recursive",
      "uuid",
      "condition",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_savedsearches": {
    "allowed": [
      "id",
      "name",
      "type",
      "itemtype",
      "users_id",
      "is_private",
      "entities_id",
      "is_recursive",
      "query",
      "last_execution_time",
      "do_count",
      "last_execution_date",
      "counter"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_savedsearches_alerts": {
    "allowed": [
      "id",
      "savedsearches_id",
      "name",
      "is_active",
      "operator",
      "value",
      "date_mod",
      "date_creation",
      "frequency"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_savedsearches_users": {
    "allowed": [
      "id",
      "users_id",
      "itemtype",
      "savedsearches_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_slalevelactions": {
    "allowed": [
      "id",
      "slalevels_id",
      "action_type",
      "field",
      "value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_slalevelcriterias": {
    "allowed": [
      "id",
      "slalevels_id",
      "criteria",
      "condition",
      "pattern"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_slalevels": {
    "allowed": [
      "id",
      "name",
      "slas_id",
      "execution_time",
      "is_active",
      "entities_id",
      "is_recursive",
      "match",
      "uuid"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_slalevels_tickets": {
    "allowed": [
      "id",
      "tickets_id",
      "slalevels_id",
      "date"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_slas": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "type",
      "comment",
      "number_time",
      "use_ticket_calendar",
      "calendars_id",
      "date_mod",
      "definition_time",
      "end_of_working_day",
      "date_creation",
      "slms_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_slms": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment",
      "use_ticket_calendar",
      "calendars_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_snmpcredentials": {
    "allowed": [
      "id",
      "name",
      "snmpversion",
      "community",
      "username",
      "authentication",
      "auth_passphrase",
      "encryption",
      "priv_passphrase",
      "is_deleted"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_socketmodels": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_sockets": {
    "allowed": [
      "id",
      "position",
      "locations_id",
      "name",
      "socketmodels_id",
      "wiring_side",
      "itemtype",
      "items_id",
      "networkports_id",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_softwarecategories": {
    "allowed": [
      "id",
      "name",
      "comment",
      "softwarecategories_id",
      "completename",
      "level",
      "ancestors_cache",
      "sons_cache"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_softwarelicenses": {
    "allowed": [
      "id",
      "softwares_id",
      "softwarelicenses_id",
      "completename",
      "level",
      "ancestors_cache",
      "sons_cache",
      "entities_id",
      "is_recursive",
      "number",
      "softwarelicensetypes_id",
      "name",
      "serial",
      "otherserial",
      "softwareversions_id_buy",
      "softwareversions_id_use",
      "expire",
      "comment",
      "date_mod",
      "is_valid",
      "date_creation",
      "is_deleted",
      "locations_id",
      "users_id_tech",
      "users_id",
      "groups_id_tech",
      "groups_id",
      "is_helpdesk_visible",
      "is_template",
      "template_name",
      "states_id",
      "manufacturers_id",
      "contact",
      "contact_num",
      "allow_overquota",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_softwarelicensetypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation",
      "softwarelicensetypes_id",
      "level",
      "ancestors_cache",
      "sons_cache",
      "entities_id",
      "is_recursive",
      "completename"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_softwares": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "locations_id",
      "users_id_tech",
      "groups_id_tech",
      "is_update",
      "softwares_id",
      "manufacturers_id",
      "is_deleted",
      "is_template",
      "template_name",
      "date_mod",
      "users_id",
      "groups_id",
      "ticket_tco",
      "is_helpdesk_visible",
      "softwarecategories_id",
      "is_valid",
      "date_creation",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_softwareversions": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "softwares_id",
      "states_id",
      "name",
      "arch",
      "comment",
      "operatingsystems_id",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_solutiontemplates": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "content",
      "solutiontypes_id",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_solutiontypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "entities_id",
      "is_recursive",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_ssovariables": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_states": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment",
      "states_id",
      "completename",
      "level",
      "ancestors_cache",
      "sons_cache",
      "is_visible_computer",
      "is_visible_monitor",
      "is_visible_networkequipment",
      "is_visible_peripheral",
      "is_visible_phone",
      "is_visible_printer",
      "is_visible_softwareversion",
      "is_visible_softwarelicense",
      "is_visible_line",
      "is_visible_certificate",
      "is_visible_rack",
      "is_visible_passivedcequipment",
      "is_visible_enclosure",
      "is_visible_pdu",
      "is_visible_cluster",
      "is_visible_contract",
      "is_visible_appliance",
      "is_visible_databaseinstance",
      "is_visible_cable",
      "is_visible_unmanaged",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_suppliers": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "suppliertypes_id",
      "registration_number",
      "address",
      "postcode",
      "town",
      "state",
      "country",
      "website",
      "phonenumber",
      "comment",
      "is_deleted",
      "fax",
      "email",
      "date_mod",
      "date_creation",
      "is_active",
      "pictures"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_suppliers_tickets": {
    "allowed": [
      "id",
      "tickets_id",
      "suppliers_id",
      "type",
      "use_notification",
      "alternative_email"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_suppliertypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_taskcategories": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "taskcategories_id",
      "name",
      "completename",
      "comment",
      "level",
      "ancestors_cache",
      "sons_cache",
      "is_active",
      "is_helpdeskvisible",
      "date_mod",
      "date_creation",
      "knowbaseitemcategories_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_tasktemplates": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "content",
      "taskcategories_id",
      "actiontime",
      "comment",
      "date_mod",
      "date_creation",
      "state",
      "is_private",
      "users_id_tech",
      "groups_id_tech"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_ticketcosts": {
    "allowed": [
      "id",
      "tickets_id",
      "name",
      "comment",
      "begin_date",
      "end_date",
      "actiontime",
      "cost_time",
      "cost_fixed",
      "cost_material",
      "budgets_id",
      "entities_id"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_ticketrecurrents": {
    "allowed": [
      "id",
      "name",
      "comment",
      "entities_id",
      "is_recursive",
      "is_active",
      "tickettemplates_id",
      "begin_date",
      "periodicity",
      "create_before",
      "next_creation_date",
      "calendars_id",
      "end_date"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_tickets": {
    "allowed": [
      "id",
      "entities_id",
      "name",
      "date",
      "closedate",
      "solvedate",
      "takeintoaccountdate",
      "date_mod",
      "users_id_lastupdater",
      "status",
      "users_id_recipient",
      "requesttypes_id",
      "content",
      "urgency",
      "impact",
      "priority",
      "itilcategories_id",
      "type",
      "global_validation",
      "slas_id_ttr",
      "slas_id_tto",
      "slalevels_id_ttr",
      "time_to_resolve",
      "time_to_own",
      "begin_waiting_date",
      "sla_waiting_duration",
      "ola_waiting_duration",
      "olas_id_tto",
      "olas_id_ttr",
      "olalevels_id_ttr",
      "ola_tto_begin_date",
      "ola_ttr_begin_date",
      "internal_time_to_resolve",
      "internal_time_to_own",
      "waiting_duration",
      "close_delay_stat",
      "solve_delay_stat",
      "takeintoaccount_delay_stat",
      "actiontime",
      "is_deleted",
      "locations_id",
      "validation_percent",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name",
      "content"
    ],
    "hasSoftDelete": true
  },
  "glpi_tickets_contracts": {
    "allowed": [
      "id",
      "tickets_id",
      "contracts_id"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_tickets_tickets": {
    "allowed": [
      "id",
      "tickets_id_1",
      "tickets_id_2",
      "link"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_tickets_users": {
    "allowed": [
      "id",
      "tickets_id",
      "users_id",
      "type",
      "use_notification",
      "alternative_email"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_ticketsatisfactions": {
    "allowed": [
      "id",
      "tickets_id",
      "type",
      "date_begin",
      "date_answered",
      "satisfaction",
      "comment"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_tickettasks": {
    "allowed": [
      "id",
      "uuid",
      "tickets_id",
      "taskcategories_id",
      "date",
      "users_id",
      "users_id_editor",
      "content",
      "is_private",
      "actiontime",
      "begin",
      "end",
      "state",
      "users_id_tech",
      "groups_id_tech",
      "date_mod",
      "date_creation",
      "tasktemplates_id",
      "timeline_position",
      "sourceitems_id",
      "sourceof_items_id"
    ],
    "requiredOnCreate": [
      "content"
    ],
    "hasSoftDelete": false
  },
  "glpi_tickettemplatehiddenfields": {
    "allowed": [
      "id",
      "tickettemplates_id",
      "num"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_tickettemplatemandatoryfields": {
    "allowed": [
      "id",
      "tickettemplates_id",
      "num"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_tickettemplatepredefinedfields": {
    "allowed": [
      "id",
      "tickettemplates_id",
      "num",
      "value"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_tickettemplates": {
    "allowed": [
      "id",
      "name",
      "entities_id",
      "is_recursive",
      "comment"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_ticketvalidations": {
    "allowed": [
      "id",
      "entities_id",
      "users_id",
      "tickets_id",
      "users_id_validate",
      "comment_submission",
      "comment_validation",
      "status",
      "submission_date",
      "validation_date",
      "timeline_position"
    ],
    "requiredOnCreate": [
      "entities_id"
    ],
    "hasSoftDelete": false
  },
  "glpi_transfers": {
    "allowed": [
      "id",
      "name",
      "keep_ticket",
      "keep_networklink",
      "keep_reservation",
      "keep_history",
      "keep_device",
      "keep_infocom",
      "keep_dc_monitor",
      "clean_dc_monitor",
      "keep_dc_phone",
      "clean_dc_phone",
      "keep_dc_peripheral",
      "clean_dc_peripheral",
      "keep_dc_printer",
      "clean_dc_printer",
      "keep_supplier",
      "clean_supplier",
      "keep_contact",
      "clean_contact",
      "keep_contract",
      "clean_contract",
      "keep_software",
      "clean_software",
      "keep_document",
      "clean_document",
      "keep_cartridgeitem",
      "clean_cartridgeitem",
      "keep_cartridge",
      "keep_consumable",
      "date_mod",
      "date_creation",
      "comment",
      "keep_disk",
      "keep_certificate",
      "clean_certificate",
      "lock_updated_fields",
      "keep_location"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_unmanageds": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "serial",
      "otherserial",
      "contact",
      "contact_num",
      "date_mod",
      "comment",
      "locations_id",
      "networks_id",
      "manufacturers_id",
      "is_deleted",
      "users_id",
      "groups_id",
      "states_id",
      "users_id_tech",
      "groups_id_tech",
      "is_dynamic",
      "date_creation",
      "autoupdatesystems_id",
      "sysdescr",
      "agents_id",
      "itemtype",
      "accepted",
      "hub",
      "ip",
      "snmpcredentials_id",
      "last_inventory_update"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_usbvendors": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "vendorid",
      "deviceid",
      "name",
      "comment",
      "date_creation",
      "date_mod"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_usercategories": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_useremails": {
    "allowed": [
      "id",
      "users_id",
      "is_default",
      "is_dynamic",
      "email"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_users": {
    "allowed": [
      "id",
      "name",
      "password",
      "password_last_update",
      "phone",
      "phone2",
      "mobile",
      "realname",
      "firstname",
      "locations_id",
      "language",
      "use_mode",
      "list_limit",
      "is_active",
      "comment",
      "auths_id",
      "authtype",
      "last_login",
      "date_mod",
      "date_sync",
      "is_deleted",
      "profiles_id",
      "entities_id",
      "usertitles_id",
      "usercategories_id",
      "date_format",
      "number_format",
      "names_format",
      "csv_delimiter",
      "is_ids_visible",
      "use_flat_dropdowntree",
      "use_flat_dropdowntree_on_search_result",
      "show_jobs_at_login",
      "priority_1",
      "priority_2",
      "priority_3",
      "priority_4",
      "priority_5",
      "priority_6",
      "followup_private",
      "task_private",
      "default_requesttypes_id",
      "password_forget_token",
      "password_forget_token_date",
      "user_dn",
      "user_dn_hash",
      "registration_number",
      "show_count_on_tabs",
      "refresh_views",
      "set_default_tech",
      "personal_token",
      "personal_token_date",
      "api_token",
      "api_token_date",
      "cookie_token",
      "cookie_token_date",
      "display_count_on_home",
      "notification_to_myself",
      "duedateok_color",
      "duedatewarning_color",
      "duedatecritical_color",
      "duedatewarning_less",
      "duedatecritical_less",
      "duedatewarning_unit",
      "duedatecritical_unit",
      "display_options",
      "is_deleted_ldap",
      "pdffont",
      "picture",
      "begin_date",
      "end_date",
      "keep_devices_when_purging_item",
      "privatebookmarkorder",
      "backcreated",
      "task_state",
      "palette",
      "page_layout",
      "fold_menu",
      "fold_search",
      "savedsearches_pinned",
      "timeline_order",
      "itil_layout",
      "richtext_layout",
      "set_default_requester",
      "lock_autolock_mode",
      "lock_directunlock_notification",
      "date_creation",
      "highcontrast_css",
      "plannings",
      "sync_field",
      "groups_id",
      "users_id_supervisor",
      "timezone",
      "default_dashboard_central",
      "default_dashboard_assets",
      "default_dashboard_helpdesk",
      "default_dashboard_mini_ticket",
      "default_central_tab",
      "nickname",
      "timeline_action_btn_layout",
      "timeline_date_format"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": true
  },
  "glpi_usertitles": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_virtualmachinestates": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_virtualmachinesystems": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_virtualmachinetypes": {
    "allowed": [
      "id",
      "name",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_vlans": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "comment",
      "tag",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  },
  "glpi_vobjects": {
    "allowed": [
      "id",
      "itemtype",
      "items_id",
      "data",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [],
    "hasSoftDelete": false
  },
  "glpi_wifinetworks": {
    "allowed": [
      "id",
      "entities_id",
      "is_recursive",
      "name",
      "essid",
      "mode",
      "comment",
      "date_mod",
      "date_creation"
    ],
    "requiredOnCreate": [
      "entities_id",
      "name"
    ],
    "hasSoftDelete": false
  }
};
