import { itemtypeTableMap } from './itemtypeTableMap.js';

// Mapeo de itemtypes GLPI a tablas
export const itemtypeToTableMap = {
    // ===== ITEMTYPES PRINCIPALES =====
    "Computer": "glpi_computers",
    "User": "glpi_users",
    "Group": "glpi_groups",
    "Ticket": "glpi_tickets",
    "Problem": "glpi_problems",
    "Change": "glpi_changes",
    "Project": "glpi_projects",
    "Software": "glpi_softwares",
    "SoftwareLicense": "glpi_softwarelicenses",
    "Domain": "glpi_domains",
    "DomainRecord": "glpi_domainrecords",
    "DatabaseInstance": "glpi_databaseinstances",
    "Unmanaged": "glpi_unmanageds",
    "NetworkEquipment": "glpi_networkequipments",
    "Printer": "glpi_printers",
    "Monitor": "glpi_monitors",
    "Peripheral": "glpi_peripherals",
    "Phone": "glpi_phones",
    "Cartridge": "glpi_cartridges",
    "Consumable": "glpi_consumables",
    "Appliance": "glpi_appliances",
    "Rack": "glpi_racks",
    "Enclosure": "glpi_enclosures",
    "PDU": "glpi_pdus",
    "Cluster": "glpi_clusters",
    "Contract": "glpi_contracts",
    "Supplier": "glpi_suppliers",
    "Contact": "glpi_contacts",
    "Document": "glpi_documents",
    "KnowbaseItem": "glpi_knowbaseitems",
    "Notification": "glpi_notifications",
    "CronTask": "glpi_crontasks",
    "MailCollector": "glpi_mailcollectors",
    "Reminder": "glpi_reminders",
    "RSSFeed": "glpi_rssfeeds",
    "Link": "glpi_links",
    "Plugin": "glpi_plugins",
    "Entity": "glpi_entities",
    "Profile": "glpi_profiles",
    "State": "glpi_states",
    "Location": "glpi_locations",
    "Manufacturer": "glpi_manufacturers",
    "Budget": "glpi_budgets",
    "Certificate": "glpi_certificates",
    "Line": "glpi_lines",
    "IPNetwork": "glpi_ipnetworks",
    "VLAN": "glpi_vlans",

    // ===== ITEMS_ DISPOSITIVOS (POLIMÓRFICOS) =====
    "Item_DeviceSimcard": "glpi_items_devicesimcards",
    "Item_DeviceProcessor": "glpi_items_deviceprocessors",
    "Item_DeviceMemory": "glpi_items_devicememories",
    "Item_DeviceHardDrive": "glpi_items_deviceharddrives",
    "Item_DeviceNetworkCard": "glpi_items_devicenetworkcards",
    "Item_DeviceBattery": "glpi_items_devicebatteries",
    "Item_DeviceCamera": "glpi_items_devicecameras",
    "Item_DeviceCase": "glpi_items_devicecases",
    "Item_DeviceControl": "glpi_items_devicecontrols",
    "Item_DeviceDrive": "glpi_items_devicedrives",
    "Item_DeviceFirmware": "glpi_items_devicefirmwares",
    "Item_DeviceGeneric": "glpi_items_devicegenerics",
    "Item_DeviceGraphicCard": "glpi_items_devicegraphiccards",
    "Item_DevicePowerSupply": "glpi_items_devicepowersupplies",
    "Item_DeviceSensor": "glpi_items_devicesensors",
    "Item_DeviceSoundCard": "glpi_items_devicesoundcards",

    // ===== RELACIONES POLIMÓRFICAS =====
    "Domain_Item": "glpi_domains_items",
    "Group_Item": "glpi_groups_items",
    "Item_Line": "glpi_items_lines",
    "Item_Problem": "glpi_items_problems",
    "Item_Project": "glpi_items_projects",
    "Item_Ticket": "glpi_items_tickets",
    "Item_Cluster": "glpi_items_clusters",
    "Item_Enclosure": "glpi_items_enclosures",
    "Item_Rack": "glpi_items_racks",
    "Document_Item": "glpi_documents_items",
    "Contract_Item": "glpi_contracts_items",
    "Appliance_Item": "glpi_appliances_items",
    "Certificate_Item": "glpi_certificates_items",

    // ===== ITIL =====
    "ITILFollowup": "glpi_itilfollowups",
    "ITILSolution": "glpi_itilsolutions",
    "ITILCategory": "glpi_itilcategories",
    "ProjectTask": "glpi_projecttasks",
    "ChangeTask": "glpi_changetasks",
    "ProblemTask": "glpi_problemtasks",
    "TicketTask": "glpi_tickettasks",

    // ===== SISTEMA =====
    "Config": "glpi_configs",
    "Log": "glpi_logs",
    "Event": "glpi_events",
    "Session": "glpi_sessions"
};

export function getTableName(itemtype) {
    // Si ya es un nombre de tabla, usarlo directamente
    if (itemtype.startsWith('glpi_') && itemtypeTableMap[itemtype]) {
        return itemtype;
    }
    
    // Buscar en el mapeo de itemtypes
    if (itemtypeToTableMap[itemtype]) {
        return itemtypeToTableMap[itemtype];
    }
    
    // Fallback: convertir a nombre de tabla
    const tableName = `glpi_${itemtype.toLowerCase()}`;
    if (itemtypeTableMap[tableName]) {
        return tableName;
    }
    
    console.warn(`⚠️ Itemtype no mapeado: "${itemtype}"`);
    return itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}`;
}

export function isValidItemtype(itemtype) {
    if (itemtype.startsWith('glpi_') && itemtypeTableMap[itemtype]) {
        return true;
    }
    return itemtypeToTableMap.hasOwnProperty(itemtype);
}

// Exportar también el mapeo original
export { itemtypeTableMap };
