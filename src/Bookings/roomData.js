export const roomData = [
    {
      type: "Deluxe Double Room",
      description: ["Spacious room with a queen-sized bed.", "Modern amenities for a comfortable stay."],
      maxPersonCount: 2,
      currentlyAvailable: 8,
      prices: {
        roomOnly: { 1: 27, 2: 36 },
        bedAndBreakfast: { 1: 36, 2: 54 },
      },
    },
    {
      type: "Deluxe Twin Room",
      description: ["A cozy twin room with two single beds.", "Ideal for travelers seeking convenience."],
      maxPersonCount: 2,
      currentlyAvailable: 2,
      prices: {
        roomOnly: { 1: 27, 2: 36 },
        bedAndBreakfast: { 1: 36, 2: 54 },
      },
    },
    {
      type: "Deluxe Triple Room",
      description: ["Perfect for small groups.", "Features three single beds for flexibility."],
      maxPersonCount: 3,
      currentlyAvailable: 3,
      prices: {
        roomOnly: { 1: 38, 2: 47, 3: 54 },
        bedAndBreakfast: { 1: 65, 2: 73, 3: 81 },
      },
    },
    {
      type: "Deluxe Family Room",
      description: ["Ideal for families, with a king-sized bed.", "Extra space for relaxation and comfort."],
      maxPersonCount: 4,
      currentlyAvailable: 2,
      prices: {
        roomOnly: { 1: 50, 2: 58, 3: 65, 4: 72 },
        bedAndBreakfast: { 1: 87, 2: 100, 3: 112, 4: 125 },
      },
    },
  ];
  