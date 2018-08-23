class Field {
  constructor(field) {
    this.label = field.label;
    this.data = field.name;
    this.value = field.displayValue;
  }
}

module.exports = Field;
