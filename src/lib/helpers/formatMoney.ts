export const formatAsMoney = (n: number | string) => {
    // Check if the input can be converted to a number
    if (isNaN(Number(n))) {
      return n;
    }
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

 