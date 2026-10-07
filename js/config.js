window.NEXUS_CONFIG = {
  name: 'NexusLogistics',
  domain: 'shipments, routes, warehouses, fleet and exceptions',
  aiNote: 'Demo UI response · Connect your local model and network data layer for live results.',
  suite: {
    NexusDistro: 'https://abraar05.github.io/NexusDistro/',
    NexusPeople: 'https://abraar05.github.io/NexusPeople/',
    NexusPortal: 'https://abraar05.github.io/NexusPortal/',
    NexusCRM: 'https://abraar05.github.io/NexusCRM/'
  },
  generated: {
    shipments: { title: 'Shipments', sub: 'Every consignment from pickup to proof of delivery.', cards: [
      { i: '▦', t: 'Live shipments', d: '126 in motion · 98% on schedule.' },
      { i: '＋', t: 'Create shipment', d: 'Book, label and track in one flow.' },
      { i: '⇥', t: 'Bulk import', d: 'Import from ERP or CSV templates.' }],
      events: [{ t: 'TR-92841 picked up at Chattogram', s: 'On route' }, { t: 'SO-48271 address issue reported', s: 'Exception' }, { t: 'CN-8802 cleared customs', s: 'Resolved' }] },
    routes: { title: 'Routes', sub: 'Plan, rate and optimize lanes across Bangladesh.', cards: [
      { i: '↝', t: 'Lane planner', d: 'Cost per km, transit time and carrier mix.' },
      { i: '◇', t: 'Zone map', d: 'Dhaka, Chittagong, Sylhet and beyond.' },
      { i: '✦', t: 'Optimization', d: 'AI suggests the cheapest viable combination.' }],
      events: [{ t: 'Dhaka → Sylhet lane rated to Steadfast', s: 'Yesterday' }, { t: 'Fuel surcharge updated on 3 lanes', s: 'Today' }, { t: 'New lane Chattogram → Cox’s Bazar', s: 'Added' }] },
    warehouses: { title: 'Warehouses', sub: 'Capacity, dock scheduling and inbound/outbound flow.', cards: [
      { i: '▦', t: 'Capacity', d: 'Chattogram 92% · Dhaka 78% · Sylhet 61%.' },
      { i: '⇅', t: 'Dock schedule', d: 'Inbound appointments and receiving queues.' },
      { i: '⚑', t: 'Stock dwell', d: 'Flag stock sitting beyond SLA.' }],
      events: [{ t: 'Dhaka Hub dock congestion detected', s: 'Today' }, { t: 'Sylhet Depot receiving complete', s: '2h ago' }, { t: 'Cycle count finished · Chattogram', s: 'Yesterday' }] },
    fleet: { title: 'Fleet', sub: 'Vehicles, drivers, maintenance and trip history.', cards: [
      { i: '⛟', t: 'Vehicles', d: '38 active · 4 in maintenance.' },
      { i: '◉', t: 'Drivers', d: 'Licenses, shifts and safety scores.' },
      { i: '⚒', t: 'Maintenance', d: 'Preventive schedule and cost tracking.' }],
      events: [{ t: 'TRK-449 customs hold · driver notified', s: '6h delayed' }, { t: 'Vehicle DH-12-3456 serviced', s: 'Yesterday' }, { t: 'Driver training completed', s: '2d ago' }] },
    carriers: { title: 'Carriers', sub: 'Performance, rates and claims by carrier.', cards: [
      { i: '◈', t: 'Scorecards', d: 'On-time, exception rate and claims ratio.' },
      { i: '৳', t: 'Rate cards', d: 'Contract and spot rates side by side.' },
      { i: '✉', t: 'Claims', d: 'File and track claims to closure.' }],
      events: [{ t: 'Pathao Logistics on-time 97.2%', s: 'This month' }, { t: 'New rate card from RedX', s: 'Review needed' }, { t: 'Claim CN-8802 resolved', s: 'Settled' }] },
    exceptions: { title: 'Exceptions', sub: 'Delays, holds, address issues in one cockpit.', cards: [
      { i: '!', t: 'Critical', d: '3 critical · 6 others open.' },
      { i: '↺', t: 'Reassignment', d: 'Re-route or re-carrier in one tap.' },
      { i: '◌', t: 'Customer comms', d: 'Notify buyers before they ask.' }],
      events: [{ t: 'PO-1982 delayed 6h · Dhaka', s: 'Critical' }, { t: 'TRK-449 customs hold', s: 'Watch' }, { t: 'SO-48271 address issue', s: 'Outreach sent' }] },
    analytics: { title: 'Analytics', sub: 'OTIF, cost per shipment, dwell and service levels.', cards: [
      { i: '◴', t: 'Service levels', d: 'OTIF by lane, carrier and region.' },
      { i: '৳', t: 'Cost analytics', d: 'Cost per kg and per delivery.' },
      { i: '✦', t: 'Forecast', d: 'Volume forecast by region and week.' }],
      events: [{ t: 'Delivery success hit 97.4%', s: 'Best in 90 days' }, { t: 'Cost per kg down 4.1%', s: 'This month' }, { t: 'Peak Sunday volumes predicted', s: 'Forecast' }] },
    settings: { title: 'Settings', sub: 'Carrier accounts, zones, SLAs and notifications.', cards: [
      { i: '⚙', t: 'Carriers', d: 'API keys and webhooks per carrier.' },
      { i: '⌖', t: 'Zones & SLAs', d: 'Delivery promises by destination.' },
      { i: '☲', t: 'Notifications', d: 'Email, SMS and webhook triggers.' }],
      events: [{ t: 'RedX webhook added', s: 'Yesterday' }, { t: 'SLA for Sylhet updated', s: 'Today' }, { t: 'SMS template published', s: '2d ago' }] }
  }
};
