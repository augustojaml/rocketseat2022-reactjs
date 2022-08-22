export function formatCurrency(value: number, decimalQuantity = 2) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: decimalQuantity,
    maximumFractionDigits: decimalQuantity,
  }).format(value)
}
