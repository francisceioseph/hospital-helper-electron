export const getLine1 = address => `${address.street_name}, ${address.house_number} ${address.neighborhood}`;
export const getLine2 = address => `${address.city} - ${address.state} - ${address.country}`;
export const getLine3 = address => `${address.zipcode}`;
