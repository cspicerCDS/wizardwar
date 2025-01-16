export const vaultTables = {
    names: [
        "The Forgotten Vault",
        "Sanctuary 23",
        "The Lost Archive",
        "Vault Zero",
        "The Ancient Bunker",
        // Add more names...
    ],
    status: [
        "Abandoned and sealed",
        "Partially operational",
        "Critical systems failing",
        "Fully functional",
        "Under lockdown",
        // Add more status options...
    ],
    dangers: [
        "Radiation leak",
        "Hostile AI",
        "Deadly virus",
        "Malfunctioning security",
        "Resource depletion",
        // Add more dangers...
    ],
    dwellers: [
        "Mutated survivors",
        "Rogue robots",
        "Original vault inhabitants",
        "Scavengers",
        "Automated systems",
        // Add more dwellers...
    ],
    whatIsHere: [
        "Valuable technology",
        "Ancient artifacts",
        "Medical supplies",
        "Weapon cache",
        "Scientific research"
    ],
    entrance: [
        "Heavy blast door",
        "Hidden elevator",
        "Camouflaged hatch",
        "Security checkpoint",
        "Airlock system"
    ],
    guards: [
        "Automated turrets",
        "Security robots",
        "Armed survivors",
        "Defense drones",
        "Laser grid system"
    ],
    features: [
        "Advanced hydroponics",
        "Medical bay",
        "Power generator",
        "Security center",
        "Research lab"
    ],
    rooms: [
        "Storage room",
        "Living quarters",
        "Command center",
        "Workshop",
        "Cafeteria"
    ]
};

export const getRandomEntry = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
} 