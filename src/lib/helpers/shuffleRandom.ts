export const shuffleRandom = (arr: any[], num: number): any[] => {
    // Create a copy of the array
    const copy = [...arr];
  
    // Shuffle array
    const shuffled = copy && copy.length > 0 ? copy.sort(() => 0.5 - Math.random()) : [];
  
    // Get sub-array of first num elements after shuffled
    let selected = shuffled && shuffled.length > 0 ? shuffled.slice(0, num) : [];
  
    return selected;
  };
  