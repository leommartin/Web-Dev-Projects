// utils.js

/**
 * Array with the days of the week and their numeric values
 */
export const diasSemana = [
  { nomeDia: "Segunda", valor: 1 },
  { nomeDia: "Terça", valor: 2 },
  { nomeDia: "Quarta", valor: 3 },
  { nomeDia: "Quinta", valor: 4 },
  { nomeDia: "Sexta", valor: 5 },
  { nomeDia: "Sábado", valor: 6 },
  { nomeDia: "Domingo", valor: 7 },
];

/**
 * Converts a time string (e.g., "13:45") to minutes
 * @param {string} horaStr - String in the format "hh:mm"
 * @returns {number} Total minutes
 */
export function horaParaMinutos(horaStr) {
    const [h, m] = horaStr.split(":").map(Number);
    return h * 60 + m;
}

/**
 * Returns the numeric value corresponding to a weekday
 * @param {string} dia - Name of the day (e.g., "Terça")
 * @returns {number} Day value or 0 if not found
 */
export function getValorDoDia(dia) {
    const diaObj = diasSemana.find(d => d.nomeDia === dia);
    return diaObj ? diaObj.valor : 0;
}
